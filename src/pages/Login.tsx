import { SyntheticEvent, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { runInAction } from "mobx";
import { authStore } from "MobxFarm/store";
import { toast } from "react-toastify";
import { observer } from "mobx-react";
import { LoginWrap } from "ComponentsFarm/styles/common";
import { fetchMyInfo, login } from "ApiFarm/auth";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (authStore.isLoggedIn) {
      history.push(`/home`);
    }
  }, [history, authStore.isLoggedIn]);

  const handleLogin = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      const tokenResponse = await login({
        email,
        password,
      });

      const user = await fetchMyInfo(tokenResponse["GO-AUTH"]);

      runInAction(() => {
        authStore.login({
          token: tokenResponse["GO-AUTH"],
          ...user,
        });
      });
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  return (
    <LoginWrap>
      <h1>
        <span className="hiddenZoneV">GOPIZZA</span>
      </h1>
      <p className="txt">for KICHEN DISPLAY</p>
      <form onSubmit={(e) => handleLogin(e)}>
        <input
          type="email"
          className="inp_email"
          placeholder="발급받은 이메일을 입력해주세요."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="inp_password"
          placeholder="비밀번호를 입력해주세요."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
