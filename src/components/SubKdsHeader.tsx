import {Dispatch, SetStateAction, useRef, useState} from 'react';
import {BtnHeadOpen, Dimm, Header, HeaderWrap} from './styles/common';
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
  slideIdx: number;
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
  slideIdx,
  areaNumber,
  setAreaNumber,
  infoStatus,
  totalCount,
}: IinfoStatus) {
  // const queryClient = useQueryClient();
  const [isHeaderOpen, setIsHeaderOpen] = useState(false);
  const soundEffectRef = useRef<HTMLAudioElement | null>(null);

  const handlerMenuMove = (idx: number) => {
    swiperRef?.slideTo(0, 0, false);
    setAreaNumber(idx);
    soundEffectPlay('/sound/btn_menu.mp3');
  };

  const handlerAlarm = () => {
    runInAction(() =>
      kdsSettingStore.alarm
        ? (kdsSettingStore.alarm = false)
        : (kdsSettingStore.alarm = true),
    );
  };

  const soundEffectPlay = (src: string) => {
    if (soundEffectRef.current) {
      soundEffectRef.current.src = src;
      soundEffectRef.current.play();
    }
  };

  return (
    <HeaderWrap className={isHeaderOpen ? 'on' : ''}>
      <Header>
        <div className="left">
          <h1>
            <span className="hiddenZone">GOPIZZA</span>
          </h1>
          <span className="current_nav">
            {menu.filter(el => el.idx === areaNumber)[0].areaName}
          </span>
          <span className="page_info">
            PAGE ( {Number(slideIdx) + 1} / {totalCount === 0 ? 1 : totalCount}{' '}
            )
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
      <BtnHeadOpen
        onClick={() => {
          setIsHeaderOpen(prev => !prev);
          soundEffectPlay('/sound/btn_head_open.mp3');
        }}>
        <span className="hiddenZone">열기</span>
      </BtnHeadOpen>
      <audio src="/sound/next.mp3" id="myAudio" ref={soundEffectRef}>
        오디오 지원되지 않는 브라우저
      </audio>
      {isHeaderOpen && (
        <Dimm
          onClick={() => {
            setIsHeaderOpen(prev => !prev);
            soundEffectPlay('/sound/btn_head_open.mp3');
          }}
        />
      )}
    </HeaderWrap>
  );
}

export default observer(KdsHeader);
