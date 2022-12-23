import styled from '@emotion/styled/macro';

export const LoginWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  h1 {
    width: 19.3rem;
    height: 10.9rem;
    background: url(/images/logo_home.svg) no-repeat left top;
    background-size: 19.3rem 10.9rem;
  }

  .txt {
    margin: 3.2rem 0 17.3rem;
    color: #ff4600;
    font-family: 'Montserrat';
    font-size: 3rem;
    font-weight: 900;
    line-height: 1;
  }

  input {
    display: block;
    width: 39rem;
    height: 4.5rem;
    margin-bottom: 1.6rem;
    padding: 1.6rem 2rem;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 2rem;
    letter-spacing: 0.2px;
    color: #828282;
    border: 1px solid #bdbdbd;
    border-radius: 0.4rem;
    appearance: none;
    transition: border-color 0.15s ease-in-out 0s,
      box-shadow 0.15s ease-in-out 0s;

    &:focus {
      outline: 0;
      border-color: #ff862c;
      box-shadow: 0 0 0 0.25rem rgba(255, 134, 44, 0.25);
    }
  }

  .btn_login {
    width: 39rem;
    height: 5.2rem;
    margin-bottom: 14.8rem;
    color: #fff;
    font-size: 1.4rem;
    font-weight: 500;
    background: #ff4600;
    border-radius: 4px;
  }

  .copy_right {
    margin-top: 14.8rem;
    font-size: 1.2rem;
    text-align: center;
    letter-spacing: 0.2px;
    color: #828282;
  }
`;

export const Header = styled.header`
  display: flex;
  position: relative;
  height: 10rem;
  align-items: center;
  color: #fff;
  font-size: 2.4rem;
  background: #061138;

  .left,
  .right {
    display: flex;
    align-items: center;
    height: 10rem;
    padding: 0 0 0 2.8rem;
  }

  .left .status,
  .right .menu {
    display: flex;
  }

  .left {
    font-family: 'Montserrat';
    font-weight: 700;

    h1 {
      width: 8.4rem;
      height: 4.8rem;
      background: url('/images/logo.svg') no-repeat left center;
      background-size: 8.4rem 4.8rem;
    }

    .current_nav {
      width: 10.9rem;
      margin: 0 2rem 0 3rem;
      color: #ff4600;
      text-align: center;
    }

    .page_info {
      color: #fff;
      margin-right: 5rem;
    }

    .status {
      li {
        display: flex;
        align-items: center;
        margin-right: 3rem;

        &:after {
          content: '';
          display: block;
          width: 1px;
          height: 2.4rem;
          background: #fff;
        }

        &:last-of-type {
          margin-right: 0;
          &:after {
            display: none;
          }
          .txt {
            padding-right: 0;
          }
        }

        .txt {
          padding-right: 3.4rem;
        }
      }
    }

    .btn_speak {
      width: 40px;
      height: 40px;
      margin-right: 30px;
      background: url('/images/ico_volume_mute.svg') no-repeat left center;
      background-size: 40px 40px;

      &.on {
        background: url('/images/ico_volume.svg') no-repeat left center;
        background-size: 40px 40px;
      }
    }
  }

  .right {
    margin-left: auto;
    .menu {
      display: flex;
      justify-content: space-around;
      width: 61.1rem;

      li.on {
        text-decoration: underline;
      }
    }
  }
`;

export const SubKdsContent = styled.div`
  height: calc(100vh - 10rem);
  background: #061138; //E0E0E0  //#061138
  .noOrder {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100%;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 24px;

    .title {
      margin: -65px 0 30px;
    }
  }
`;

export const ReceiptWrap = styled.div`
  border-radius: 4px;
  background: #ffffff;

  &.showNone {
    display: none;
  }

  &.on {
    opacity: 0.5;
  }

  &.fin {
    .cont * {
      color: #fff;
    }
    background: #221e1e;
  }

  .cont.on {
    color: #fff;
    background: #000;
  }

  .info_head {
    height: 24px;
    padding-left: 1.6rem;
    background: #ff3434;
    border-radius: 4px 4px 0px 0px;

    &.alert {
      background: #ff3434;
    }
    &.warning {
      background: #ff862c;
    }
    &.safe {
      background: #828282;
      font-weight: 400;
    }

    .recepit_id {
      color: #fff;
      font-size: 14px;
      //font-size: 1.4rem;
      line-height: 24px;
    }
  }
  .cont {
    display: flex;
    height: calc(100% - 2.4rem);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #4f4f4f;

    &:hover,
    &:active {
      * {
        color: #fff;
      }
      background: #000;
    }

    .item_name {
      display: flex;
      align-items: center;
      font-weight: 700;
      font-size: 2rem;
      line-height: 2.6rem;

      .btn_skip {
        width: 3.2rem;
        height: 3.2rem;
        margin-left: 1.5rem;
        background: url(/images/ico_skip.svg) no-repeat left center;
        background-size: 2.5rem;
      }
    }
    .time {
      margin: 0.8rem 0 1.6rem;
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 2.6rem;
    }
    .timeBox {
      display: flex;
      span:first-of-type {
        display: flex;
        align-items: center;

        &:after {
          content: '';
          width: 1px;
          height: 10px;

          margin: 0 15px;
          background: #bdbdbd;
        }
      }
    }
    .btn_box {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;

      button {
        width: 8.4rem;
        height: 4rem;
        text-align: center;
        font-weight: 700;
        line-height: 4rem;
        border-radius: 4px;
        font-size: 1.6rem;
        &:disabled {
          opacity: 0.7;
        }
      }
      .btn_skip {
        width: 6rem;
        margin-right: 0.8rem;
        color: #221e1e;
        background: #fff;
      }
      .btn_retry {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 8px;
        color: #fff;
        background: #ef4747;
        &.ing:after {
          content: '';
          display: inline-block;
          width: 2rem;
          height: 2rem;
          background: url('/images/spinner_waiting.gif') no-repeat center;
          background-size: 2rem;
        }
      }
      .btn_fin {
        color: #fff;
        background: #5ea152;
      }
      .btn_cancle {
        margin-right: 0.8rem;
        color: #828282;
        border: 1px solid #828282;
        background: transparent;
      }
      .btn_submit {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        width: 50%;
        color: #fff;
        background: #2f80ed;
        &.ing:after {
          content: '';
          display: inline-block;
          width: 2rem;
          height: 2rem;
          background: url('/images/spinner_waiting.gif') no-repeat center;
          background-size: 2rem;
        }
      }
    }
  }
`;

export const PageInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 32px;
  left: 50%;
  z-index: 1000;
  width: 70px;
  height: 36px;
  margin-left: -35px;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  border-radius: 36px;
  background: #404c77;
`;

export const SlidePageWrap = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  height: calc(100vh - 10rem);
  padding: 4rem 4rem 9.2rem;
  background: #061138; //E0E0E0  //#061138
`;

export const SubKdsWrap = styled.div`
  position: relative;
  @media (min-width: 1200px) and (max-width: 1500px) {
    ${SlidePageWrap} {
      padding-bottom: 7rem;
    }
  }
`;
