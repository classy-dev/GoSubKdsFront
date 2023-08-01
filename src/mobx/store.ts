// import { setAccountStoreInfo } from "LibFarm/.";
// import router from "next/router";
import { ILoginUserResponse } from "ApiFarm/interface/auth";
import { setAccountStoreInfo } from "LibFarm/accountInfo";
import { toast } from "react-toastify";
import { observable } from "mobx";

export const numberStore = observable({
  number: 0,
  name: "ddd",
  reset() {
    this.number = 0;
  },
});

interface IAuthStore {
  token: string | null;
  user_info: ILoginUserResponse["user_info"] | null;
  store_info: ILoginUserResponse["store"] | null;
  isLoggedIn: boolean;
  selected_store_idx: number | null;
  selected_store_name: string | null;
  init: () => void;
  login: (authData: ILoginUserResponse & { token: string }) => void;
  logOut: () => void;
}

const TOKEN_STORAGE_KEY = "KDS_AUTH_TOKEN";
const USER_STORAGE_KEY = "KDS_USER_INFO";
const STORE_STORAGE_KEY = "KDS_USER_STORE";

export const authStore = observable<IAuthStore>({
  token: null,
  user_info: null,
  store_info: null,
  selected_store_idx: null,
  selected_store_name: null,
  get isLoggedIn() {
    return !!this.user_info && !!this.token;
  },
  init() {
    try {
      this.token = localStorage.getItem(TOKEN_STORAGE_KEY) ?? null;
      this.user_info = JSON.parse(
        String(localStorage.getItem(USER_STORAGE_KEY))
      );
      this.store_info = JSON.parse(
        localStorage.getItem(STORE_STORAGE_KEY) ?? "null"
      );
    } catch (e) {
      this.token = null;
      this.user_info = null;
      this.store_info = null;
    }
  },
  login(authData) {
    if (Object.keys(authData).length !== 0) {
      this.token = authData.token;
      this.user_info = authData.user_info;
      this.store_info = authData.store;
      this.selected_store_idx = authData.selected_store_idx;
      this.selected_store_name = authData.selected_store_name;

      localStorage.setItem(TOKEN_STORAGE_KEY, authData.token);
      localStorage.setItem(
        USER_STORAGE_KEY,
        JSON.stringify(authData.user_info)
      );
      localStorage.setItem(STORE_STORAGE_KEY, JSON.stringify(authData.store));

      if (this.token !== "" && this.user_info.user_idx) {
        window.location.replace("/home");
      } else if (this.token === "" && !this.user_info.user_idx) {
        toast.error("본사 직원은 접속권한이 없습니다.");
      }
    }
  },
  logOut() {
    this.token = null;
    this.user_info = null;
    this.store_info = null;
    this.selected_store_idx = null;
    this.selected_store_name = null;

    if (
      localStorage.getItem("session") !== null ||
      localStorage.getItem("storeInfo") !== null
    ) {
      localStorage.clear();
    }

    localStorage.removeItem(TOKEN_STORAGE_KEY);
    localStorage.removeItem(USER_STORAGE_KEY);
    localStorage.removeItem(STORE_STORAGE_KEY);

    window.location.replace("/");
  },
});

export const kdsSettingStore = observable({
  alarm: false,
});
