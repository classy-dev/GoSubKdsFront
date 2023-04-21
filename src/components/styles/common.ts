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

export const BtnHeadOpen = styled.button`
  position: relative;
  z-index: 200;
  display: block;
  width: 13.5rem;
  height: 5.6rem;
  margin: 0 auto;
  border-radius: 0 0 4rem 4rem;
  background: #ff4600;

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 2.4rem;
    height: 2.4rem;
    background: url('/images/arrow_header_down.svg') no-repeat left top;
  }
`;

export const HeaderWrap = styled.header`
  position: fixed;
  z-index: 9999;
  top: -10rem;
  transition: transform 0.3s;

  &.on {
    transform: translateY(10rem);

    ${BtnHeadOpen} {
      &:after {
        top: 38%;
        transform: rotate(180deg) translate(-50%, -50%);
        transform-origin: top left;
      }
    }
  }
`;

export const Header = styled.header`
  position: relative;
  z-index: 200;
  display: flex;
  width: 100vw;
  height: 10rem;
  align-items: center;
  color: #fff;
  font-size: 2.4rem;
  border-bottom: 1px solid #ff4600;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background: #222;

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
      width: 4rem;
      height: 4rem;
      margin-right: 3rem;
      background: url('/images/ico_volume_mute.svg') no-repeat left center;
      background-size: 4rem;

      &.on {
        background: url('/images/ico_volume.svg') no-repeat left center;
        background-size: 4rem;
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

export const Dimm = styled.div`
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
`;

export const SubKdsContent = styled.div`
  height: 100vh;
  background: #131313; //E0E0E0  //#061138

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
  background: #222222;

  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &.showNone {
    display: none;
  }

  &.on {
    opacity: 0.5;
  }

  /* &.fin {
    .cont * {
      color: #fff;
    }
    background: #221e1e;
  } */

  .cont.on {
    color: #fff;
    background: #000;
  }

  .info_head {
    display: flex;
    align-items: center;
    position: relative;
    height: 17.6rem;
    padding: 0 0 0 3.2rem;
    border-radius: 0.4rem 0.4rem 0px 0px;
    border-bottom: 1px solid #333333;

    * {
      color: #bdbdbd;
    }

    .recepit_id {
      display: block;
      font-size: 3.2rem;
      font-family: 'Montserrat';
      line-height: 2.6rem;
    }
    .item_name {
      margin: 1.6rem 0;
      font-weight: 400;
      font-size: 3rem;
      line-height: 2.6rem;
    }
    .time {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 400;
      font-size: 2.4rem;
      line-height: 2.6rem;
    }
    .timeBox {
      display: flex;
      align-items: center;

      .txt_time1 {
        min-width: 9.5rem;

        &.on {
          color: #ff4600;
        }
      }

      .txt_time2 {
        margin-left: 1.5rem;
      }

      .bar {
        width: 0.2rem;
        height: 1.7rem;
        background: url('/images/bar_time.svg') no-repeat left top;
      }
    }

    .wrap_saleType {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 11.2rem;
      height: 11.2rem;
      margin-left: auto;
      margin-right: 3.2rem;
      text-align: center;
      font-weight: 700;
      font-size: 3.6rem;
      line-height: 3.4rem;
      border: 1px solid #fff;
      border-radius: 50%;
      /* border-radius: 50%; */
    }
  }

  &.default {
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      background: rgba(255, 255, 255, 0.1);
      opacity: 0;
      transform: scale(2);
      transition: opacity 0.5s, transform 0.5s;
    }

    &:active:after {
      opacity: 1;
      transform: scale(0);
      transition: 0s;
    }
    .info_head .wrap_saleType {
      color: #bdbdbd;
      border: 1px solid #333;
      background: #333;
    }
  }

  &.fin .info_head {
    * {
      color: #fff;
    }
    .wrap_saleType {
      width: 11.2rem;
      height: 11.2rem;
      position: absolute;
      margin: auto;
      top: 0;
      bottom: 0;
      right: 2rem;
      box-shadow: 0 20px 35px rgba(0, 0, 0, 0.3);

      overflow: hidden;
      background-color: #222222;

      &:before {
        content: '';
        background-image: conic-gradient(#04b0ee 20deg, transparent 120deg);
        height: 150%;
        width: 150%;
        position: absolute;
        left: -25%;
        top: -25%;
      }
      &:after {
        content: '';
        height: 94%;
        width: 94%;
        position: absolute;
        background-color: #1c1b29;
        border-radius: 50%;
        top: 3%;
        left: 3%;
        color: #04b0ee;
        display: grid;
        place-items: center;
        font-size: 20px;
        letter-spacing: 6px;
      }

      .txt {
        position: relative;
        z-index: 10;
      }

      @keyframes rotate {
        100% {
          transform: rotate(-360deg);
        }
      }

      @keyframes blink {
        0%,
        100% {
          opacity: 1;
        }
        50% {
          opacity: 0;
        }
      }

      &.alert {
        border: none;

        &:before {
          background-image: conic-gradient(#ef4747 20deg, transparent 120deg);
          animation: rotate 1s infinite linear;
        }
        .txt {
          color: #ef4747;
          animation: blink 1.5s infinite;
        }
      }
      &.warning {
        border: none;

        &:before {
          background-image: conic-gradient(#ff862c 20deg, transparent 120deg);
          animation: rotate 2s infinite linear;
        }
        .txt {
          color: #ff862c;
          animation: blink 4s infinite;
        }
      }
      &.safe {
        border: none;

        &:before {
          background-image: conic-gradient(#fff 20deg, transparent 120deg);
          animation: rotate 2.5s infinite linear;
        }
        .txt {
          color: #fff;
        }
      }
    }
  }
  .cont {
    display: flex;
    flex-direction: column;
    height: calc(100% - 17.6rem);
    color: #4f4f4f;
    padding-left: 3.2rem;

    .wrap_badge {
      display: flex;
      margin-top: 3rem;
      .badge {
        display: block;
        height: 5.8rem;
        padding: 0 3.2rem;
        font-weight: 700;
        font-size: 2.4rem;
        line-height: 5.8rem;
        border-radius: 2.9rem;

        &.badge_cheese {
          color: #ff6d00;
          background: #fff7dd;
        }
        &.badge_mousse {
          color: #6e3dff;
          background: #cdbcff;
        }
        &.badge_drink {
          color: #964b00;
          background: #f2dfd3;
        }
      }
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

    .txt_start {
      margin: auto 3.6rem 3.6rem auto;
      color: #fff;
      font-weight: 400;
      font-size: 65px;
      line-height: 65px;
    }

    .btn_box {
      display: flex;
      align-items: center;
      /* justify-content: center; */
      margin: auto 0 3.2rem 0;
      width: 100%;

      /* button {
        width: 17.9rem;
        height: 9rem;
        text-align: center;
        font-weight: 700;
        line-height: 9rem;
        border-radius: 0.8rem;
        font-size: 3.6rem;
        &:disabled {
          opacity: 0.7;
        }
      } */

      button:nth-of-type(2) {
        margin: 0 3.4rem 0 auto;
      }
      .btn_skip {
        width: 6rem;
        margin-right: 0.8rem;
        color: #221e1e;
        background: #fff;
      }
      .btn_fin {
        color: #fff;
        margin: 0 3.4rem 0 auto;
        background: #5ea152;
        border: none;
        cursor: pointer;
        outline: none;
        transition: background-color 0.3s, transform 0.3s;

        &:active {
          background-color: #3f7a3a;
          transform: translateY(2px);
        }
      }
      .btn_retry {
        position: relative;
        overflow: hidden;
        width: 5.6rem;
        height: 5.6rem;
        background: url('/images/btn_restart.svg') no-repeat left top;
        transition: transform 0.1s ease-in-out;

        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(255, 255, 255, 0.3);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
          border-radius: 50%;
        }
        &:hover::before {
          opacity: 1;
        }
        &:active::before {
          opacity: 0;
          transition: opacity 0s;
        }

        &:active {
          transform: scale(0.7);
        }
        &.on {
          animation: RetryRotate 0.3s ease-out;
        }
      }
      @keyframes RetryRotate {
        100% {
          transform: rotate(360deg);
        }
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
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  height: 100vh;
  padding: 4.4rem 4rem;
  background: #131313;
`;

export const SubKdsWrap = styled.div`
  position: relative;
  max-width: 1920px;
  max-height: 1080px;
  @media (min-width: 1200px) and (max-width: 1500px) {
    ${SlidePageWrap} {
      padding-bottom: 7rem;
    }
  }
`;
