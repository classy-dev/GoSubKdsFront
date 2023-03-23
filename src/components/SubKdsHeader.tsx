import {Dispatch, SetStateAction} from 'react';
import {Header} from './styles/common';
import {Swiper} from 'swiper/types';
import {useQueryClient} from '@tanstack/react-query';
import {menu} from 'PagesFarm/Home';
import {kdsSettingStore} from 'MobxFarm/store';
import {runInAction} from 'mobx';
import {observer} from 'mobx-react';

// const status = [{id:1, txt: '완료 대기 중', status:"finWait"} , '처리 중', '처리 대기 중'];
const status = [
  {id: 1, txt: '처리 중', status: 'ing'},
  {id: 2, txt: '대기 중', status: 'wait'},
];
const number = [1, 9, 13];

interface IinfoStatus {
  swiperRef: Swiper | null;
  areaNumber: number;
  setAreaNumber: Dispatch<SetStateAction<number>>;
  infoStatus: {
    [key: string]: string | number;
    ing: number;
    wait: number;
  };
  totalCount: number;
}

function KdsHeader({
  swiperRef,
  areaNumber,
  setAreaNumber,
  infoStatus,
  totalCount,
}: IinfoStatus) {
  const queryClient = useQueryClient();

  const handlerMenuMove = (idx: number) => {
    swiperRef?.slideTo(0, 0, false);
    setAreaNumber(idx);
  };

  const handlerAlarm = () => {
    runInAction(() =>
      kdsSettingStore.alarm
        ? (kdsSettingStore.alarm = false)
        : (kdsSettingStore.alarm = true),
    );
  };

  console.log('swiperRef?.realIndex', swiperRef);

  return (
    <Header>
      <div className="left">
        <h1>
          <span className="hiddenZone">GOPIZZA</span>
        </h1>
        <span className="current_nav">
          {menu.filter(el => el.idx === areaNumber)[0].areaName}
        </span>
        <span className="page_info">
          PAGE
          {String(
            swiperRef?.realIndex === undefined ? 1 : swiperRef?.realIndex + 1,
          ) +
            '/' +
            String(totalCount)}
        </span>
        <ul className="status">
          {status.map(el => (
            <li key={el.id}>
              <span className="txt">
                {el.txt} : {infoStatus[el.status]}
              </span>
            </li>
          ))}
          <li>
            <button
              className={`btn_speak ${kdsSettingStore.alarm ? 'on' : ''}`}
              onClick={handlerAlarm}>
              <span className="hiddenZone">Alarm</span>
            </button>
          </li>
        </ul>
      </div>
      <div className="right">
        <ul className="menu">
          {menu.map((el, i) => (
            <li
              key={el.idx}
              className={`${areaNumber === el.idx ? 'on' : ''}`}
              onClick={() => handlerMenuMove(el.idx)}>
              {el.areaName}
            </li>
          ))}
        </ul>
      </div>
    </Header>
  );
}

export default observer(KdsHeader);
