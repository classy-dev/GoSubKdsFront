// import { setAccountStoreInfo } from "LibFarm/.";
// import router from "next/router";
import {setAccountStoreInfo} from 'LibFarm/accountInfo';
import {toast} from 'react-toastify';

const {observable} = require('mobx');

export const numberStore = observable({
  number: 0,
  name: 'ddd',
  reset() {
    this.number = 0;
  },
});

interface IStoreInfo {
  store_id: string;
  store_name: string;
  store_token: string;
}

export const authStore = observable({
  loading: true,
  session: null,
  storeInfo: {store_id: '', store_name: '', store_token: ''},
  newLogin() {
    if (localStorage.getItem('auth_token') !== null) {
      const authData = {
        auth_token: String(localStorage.getItem('auth_token')),
        info: {...JSON.parse(String(localStorage.getItem('info')))},
        token: String(localStorage.getItem('store_token')),
      };
      this.login(authData);
      localStorage.removeItem('auth_token');
      localStorage.removeItem('info');
      localStorage.removeItem('store_token');
    }
  },
  login(authData: any) {
    if (Object.keys(authData).length !== 0) {
      this.session = authData;
      this.storeInfo = {
        store_id: String(authData?.info.store_id),
        store_name: String(authData?.info.store_name),
        store_token: String(authData?.token),
      };

      localStorage.setItem('session', JSON.stringify(authData));
      setAccountStoreInfo(
        String(authData?.info.store_id),
        String(authData?.info.store_name),
        String(authData?.token),
      );
      if (this.session.token !== '' && this.session.info.user_id) {
        window.location.replace('./home');
      } else if (
        this.session.token === '' &&
        this.session.info.user_id !== ''
      ) {
        toast.error('본사 직원은 접속권한이 없습니다.');
      }
      this.loading = false;
    }
  },
  logOut() {
    this.session = null;
    this.storeInfo = {store_id: '', store_name: '', store_token: ''};
    localStorage.removeItem('session');
    localStorage.removeItem('storeInfo');
    window.location.replace('/');
    this.loading = true;
  },
  sessionGet() {
    if (this.session === null) {
      this.session = JSON.parse(String(localStorage.getItem('session')));
      this.loading = false;
      return this.session;
    } else {
      this.loading = false;
      return this.session;
    }
  },
  storeGet() {
    if (
      this.storeInfo !== null &&
      Object.values(this.storeInfo).every(x => x === '')
    ) {
      this.storeInfo = JSON.parse(String(localStorage.getItem('storeInfo')));
      return this.storeInfo;
    } else {
      return this.storeInfo;
    }
  },
  storeChange(data: IStoreInfo) {
    this.storeInfo = {
      store_id: String(data.store_id),
      store_name: String(data.store_name),
      store_token: String(data.store_token),
    };
    setAccountStoreInfo(
      String(data.store_id),
      String(data.store_name),
      String(data.store_token),
    );
  },
});
