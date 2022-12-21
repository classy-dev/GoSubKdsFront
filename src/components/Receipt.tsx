import {ISubkdsListItem, ISubkdsListRes} from 'ApiFarm/interface/subkds';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {ReceiptWrap} from './styles/common';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

import {useMutation, useQueryClient} from '@tanstack/react-query';
import {fetchSubKdsProcess} from 'ApiFarm/subkds';
import {listeners} from 'process';

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
  const [showTime, setShowTime] = useState('');
  const [processTime, setProcessTime] = useState('');
  const [time, setTime] = useState(0);
  const [load, setLoad] = useState(true);

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

    return `${minutes} : ${10 > seconds ? '0' + seconds : seconds}`;
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

  console.log(areaNumber, areaNumber);

  return (
    <ReceiptWrap
      className={`${data.process_status === 1 ? 'fin' : ''} ${
        areaNumber === 2 && data.process_status === 0 ? 'showNone' : ''
      }`}
      onClick={() =>
        data.process_status === 0 &&
        handlerProccessing(data.receipt_item_contents_idx, 1)
      }>
      <div
        className={`info_head ${
          Number(showTime.substring(0, 2)) >= 30
            ? 'alert'
            : 30 > Number(showTime.substring(0, 2)) &&
              Number(showTime.substring(0, 2)) > 20
            ? 'warning'
            : 'safe'
        }`}>
        <span className="recepit_id">NO.{data.no}</span>
      </div>
      <div className="cont">
        <div className="item_name">
          <span className="txt">{data.product_name} </span>
        </div>
        <div className="time">
          {data.process_start_date === '' ? (
            `대기 시간 :  ${showTime}`
          ) : (
            <span className="timeBox">
              <span>치리 중 : {processTime}</span>
              <span>총 시간 : {showTime}</span>
            </span>
          )}
        </div>
        {data.process_status !== 0 && data.is_btn_hide === 0 && (
          <div className="btn_box">
            <button
              className="btn_retry"
              onClick={() =>
                handlerProccessing(data.receipt_item_contents_idx, 1)
              }>
              재처리
            </button>

            <button
              className="btn_fin"
              onClick={() =>
                handlerProccessing(data.receipt_item_contents_idx, 2)
              }>
              완료
            </button>
          </div>
        )}
      </div>
    </ReceiptWrap>
  );
}

export default React.memo(Receipt);
