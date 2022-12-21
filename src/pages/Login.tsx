import {SyntheticEvent, useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';

import {runInAction} from 'mobx';
import {authStore} from 'MobxFarm/store';
import {toast} from 'react-toastify';
import {observer} from 'mobx-react';
import AxiosUtil from 'ApiFarm/.';
import {LoginWrap} from 'ComponentsFarm/styles/common';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState<string | string[] | undefined>('');
  const [password, setPassword] = useState('');
  const [isLoginState, setIsLoginState] = useState(-1);

  useEffect(() => {
    if (localStorage.getItem('storeInfo') !== null) {
      setIsLoginState(1);
      history.push(`./home`);
    } else {
      setIsLoginState(0);
    }
  }, [history]);

  const handleLogin = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      const user = await AxiosUtil.post('/kds/v1/login', {
        user_id: email,
        user_pwd: password,
      });
      if ((user as any).data.code !== '0000') {
        (user as any).data.code === '8998'
          ? toast.error('아이디 또는 이메일과 비밀번호를 확인해 주세요.')
          : console.log((user as any).data.message);
      }
      runInAction(() => {
        authStore.login(user.data.data);
      });
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <LoginWrap>
      <h1>
        <span className="hiddenZoneV">GOPIZZA</span>
      </h1>
      <p className="txt">for KICHEN DISPLAY</p>
      <form onSubmit={e => handleLogin(e)}>
        <input
          type="email"
          className="inp_email"
          placeholder="발급받은 이메일을 입력해주세요."
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="inp_password"
          placeholder="비밀번호를 입력해주세요."
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit" className="btn_login">
          로그인
        </button>
      </form>
      <div className="copy_right">© 2021. GOPIZZA. All rights reserved.</div>
    </LoginWrap>
  );
}

export default observer(Login);
