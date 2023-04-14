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

export const SubKdsContent = styled.div`
  height: 100vh;
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
  background: #222222;

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

    &.default {
      .wrap_saleType {
        color: #bdbdbd;
        border: 1px solid #333;
        background: #333;
      }
    }

    &.fin {
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
        border-radius: 5px;
        overflow: hidden;
        background-color: #1c1b29;

        &:before {
          content: '';
          background-image: conic-gradient(#04b0ee 20deg, transparent 120deg);
          height: 150%;
          width: 150%;
          position: absolute;
          left: -25%;
          top: -25%;
          animation: rotate 2s infinite linear;
        }

        @keyframes rotate {
          100% {
            transform: rotate(-360deg);
          }
        }
        &:after {
          content: '';
          height: 94%;
          width: 94%;
          position: absolute;
          background-color: #1c1b29;
          border-radius: 5px;
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

        &.alert {
          color: #ef4747;
          border: none;

          &:before {
            background-image: conic-gradient(#ef4747 20deg, transparent 120deg);
          }
          .txt {
            color: #ef4747;
          }
        }
        &.warning {
          color: #ff862c;
          border: 1px solid #ff862c;
        }
        &.safe {
          color: #fff;
          border: 1px solid #fff;
        }
      }
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
      /* border-radius: 50%; */
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

      button {
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
      }
      .btn_skip {
        width: 6rem;
        margin-right: 0.8rem;
        color: #221e1e;
        background: #fff;
      }
      .btn_fin {
        color: #fff;
        background: #5ea152;
      }
      .btn_retry {
        width: 5.6rem;
        height: 5.6rem;
        margin: 0 3.4rem 0 auto;
        background: url('/images/btn_restart.svg') no-repeat left top;
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
  padding: 3rem;
  background: #131313;
`;

export const SubKdsWrap = styled.div`
  position: relative;
  @media (min-width: 1200px) and (max-width: 1500px) {
    ${SlidePageWrap} {
      padding-bottom: 7rem;
    }
  }
`;
