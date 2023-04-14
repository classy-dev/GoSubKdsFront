import {ISubkdsListItem, ISubkdsListRes} from 'ApiFarm/interface/subkds';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {ReceiptWrap} from './styles/common';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

import {useMutation, useQueryClient} from '@tanstack/react-query';
import {fetchSubKdsProcess} from 'ApiFarm/subkds';
import {listeners} from 'process';
import {kdsSettingStore} from 'MobxFarm/store';
import {toast} from 'react-toastify';

dayjs.extend(duration);

function Receipt({
  data,
  areaNumber,
}: {
  data: ISubkdsListItem;
  areaNumber: number;
}) {
  const queryClient = useQueryClient();
  const tick = useRef<NodeJS.Timer>();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [showTime, setShowTime] = useState('');
  const [processTime, setProcessTime] = useState('');
  const [time, setTime] = useState(0);
  const [load, setLoad] = useState(true);
  const [bell, setBell] = useState(false);

  const passedTime = useCallback((orderTime: string) => {
    // 숫자를 시간으로 표현
    const startTime = dayjs(orderTime);
    var endTime = dayjs();

    // calculate total duration
    var duration = dayjs.duration(endTime.diff(startTime));
    // duration in hours
    var hours = Math.floor(duration.asHours());
    // duration in minutes
    var minutes = Math.floor(duration.asMinutes()) % 60;
    // duration in seconds
    var seconds = Math.floor(duration.asSeconds()) % 60;

    return hours
      ? `${hours} : ` +
          `${minutes > 9 ? minutes : '0' + minutes} : ${
            seconds > 9 ? seconds : '0' + seconds
          }`
      : `${minutes > 9 ? minutes : '0' + minutes} : ${
          seconds > 9 ? seconds : '0' + seconds
        }`;
  }, []);

  useEffect(() => {
    if (load) {
      setShowTime(() => passedTime(data.ordered_date));
      setProcessTime(() => passedTime(data.process_start_date));
      setTime(time => time + 1);
      setLoad(false);
    }
    if (!load) {
      tick.current = setTimeout(() => {
        setShowTime(() => passedTime(data.ordered_date));
        setProcessTime(() => passedTime(data.process_start_date));
        setTime(time => time + 1);
      }, 1000);
    }

    return () => {
      setLoad(true);
      clearInterval(tick.current);
    };
  }, [time, data]);

  //주문들어왔는지 체킹, AISTT 에서 STATION 으로 넘어오는데, STATION 신규주문은 processTime을 통해 알 수 있음.
  // useEffect(() => {
  //   if (areaNumber !== 2) {
  //     const bellTime = showTime.split(':');
  //     if (1 > Number(bellTime[0]) && 9 >= Number(bellTime[1]) && !bell) {
  //       setBell(true);
  //     } else if (Number(bellTime[1]) > 10 && bell) {
  //       setBell(false);
  //     }
  //   } else {
  //     const stationTime = processTime.split(':');
  //     if (1 > Number(stationTime[0]) && 9 >= Number(stationTime[1]) && !bell) {
  //       setBell(true);
  //     } else if (Number(stationTime[1]) > 10 && bell) {
  //       setBell(false);
  //     }
  //   }
  // }, [areaNumber, bell, showTime]);

  useEffect(() => {
    const bellTime = showTime.split(':');
    if (1 > Number(bellTime[0]) && 9 >= Number(bellTime[1]) && !bell) {
      setBell(true);
    } else if (Number(bellTime[1]) > 10 && bell) {
      setBell(false);
    }
  }, [bell, showTime]);

  //벨소리 컨트롤 - subkds의 경우, 한번에 여러 아이템이 들어오기때문에, currentTime을 통해서 울리고 있는지 체킹 후, 울리는동안 안울리게.
  useEffect(() => {
    if (bell) {
      if (kdsSettingStore.alarm) {
        audioRef.current?.play();
        (audioRef.current as any).currentTime = 0;
      }

      toast.info('새로운 주문이 들어왔습니다.');
    }
  }, [bell]);

  //확인 (처리 -> 처리 중 상태 변경)
  const processItem = useMutation(['processItem'], fetchSubKdsProcess);

  const handlerProccessing = useCallback((idx: number, status: number) => {
    processItem.mutate(
      {
        receipt_item_contents_idx: idx,
        process_status: status,
      },
      {
        onSuccess: data => {
          queryClient.invalidateQueries(['subKdsListData']);
        },
      },
    );
  }, []);

  useEffect(() => {
    console.log(areaNumber, areaNumber);
  }, [areaNumber]);

  const generateSaleType = useCallback((sale_type: number) => {
    return sale_type === 0 ? '내점' : sale_type === 1 ? '포장' : '배달';
  }, []);

  const generateAddOptionBadge = (item: string) => {
    return item.includes('치즈')
      ? 'badge_cheese'
      : item.includes('무스')
      ? 'badge_mousse'
      : 'badge_default';
  };

  return (
    // <ReceiptWrap
    //   className={`${data.process_status === 1 ? 'fin' : ''} ${
    //     areaNumber === 2 && data.process_status === 0 ? 'showNone' : ''
    //   }`}
    //   onClick={() =>
    //     data.process_status === 0 &&
    //     handlerProccessing(data.receipt_item_contents_idx, 1)
    //   }>
    <ReceiptWrap
      onClick={() =>
        data.process_status === 0 &&
        handlerProccessing(data.receipt_item_contents_idx, 1)
      }>
      <div
        className={`info_head ${
          data.process_status === 1 ? 'fin' : 'default'
        }`}>
        <div className="wrap_info">
          <div className="recepit_id">NO.{data.receipt_number}</div>
          <div className="item_name">
            <span className="txt">{data.product_name} </span>
          </div>
          <div className="time">
            {data.process_start_date === '' ? (
              `대기 :  ${showTime}`
            ) : (
              <span className="timeBox">
                <span className="txt_time1">
                  {processTime.substring(0, 2) !== '-1'
                    ? processTime
                    : '-- : --'}
                </span>
                <span className="bar"></span>
                <span className="txt_time2">{showTime}</span>
              </span>
            )}
          </div>
        </div>
        <div
          className={`wrap_saleType  ${
            showTime.length > 7 || Number(showTime.substring(0, 2)) >= 30
              ? 'alert'
              : 30 > Number(showTime.substring(0, 2)) &&
                Number(showTime.substring(0, 2)) > 20
              ? 'warning'
              : 'safe'
          } `}>
          <span className="txt">{generateSaleType(data.sale_type)}</span>
        </div>
      </div>
      <div className="cont">
        <div className="wrap_badge">
          {data.add_option_list.split(',').map((el, i) => (
            <span key={i} className={`badge ${generateAddOptionBadge(el)}`}>
              {el.includes('치즈') ? '치즈' : el}
            </span>
          ))}
        </div>
        {data.process_status === 0
          ? data.is_btn_hide === 0 && (
              <div className="txt_start">START &gt;</div>
            )
          : data.is_btn_hide === 0 && (
              <div className="btn_box">
                <button
                  className="btn_fin"
                  onClick={() =>
                    handlerProccessing(data.receipt_item_contents_idx, 2)
                  }>
                  완료
                </button>
                <button
                  className="btn_retry"
                  onClick={() =>
                    handlerProccessing(data.receipt_item_contents_idx, 1)
                  }>
                  <span className="hiddenZoneV">재처리</span>
                </button>
              </div>
            )}
      </div>
      <audio src="/sound/bell.mp3" id="myAudio" ref={audioRef} loop={false}>
        오디오 지원되지 않는 브라우저
      </audio>
    </ReceiptWrap>
  );
}

export default React.memo(Receipt);
