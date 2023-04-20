import React, {useRef} from 'react';
import {SlidePageWrap} from 'ComponentsFarm/styles/common';
import Receipt from './Receipt';
import {ISubkdsListItem} from 'ApiFarm/interface/subkds';

interface ISwiperSlideItem {
  receiptsData: any;
  areaNumber: number;
}

function SwiperSlideItem({receiptsData, areaNumber}: ISwiperSlideItem) {
  const soundEffectRef = useRef<HTMLAudioElement | null>(null);

  const soundEffectPlay = (src: string) => {
    if (soundEffectRef.current) {
      soundEffectRef.current.src = src;
      soundEffectRef.current.play();
    }
  };

  return (
    <SlidePageWrap className={`SlidePage`}>
      {receiptsData.length !== 0 &&
        receiptsData.map((el: ISubkdsListItem) => (
          <Receipt
            key={el.receipt_item_contents_idx}
            data={el}
            areaNumber={areaNumber}
            soundEffectPlay={soundEffectPlay}
          />
        ))}
      {/* <ReceiptHandlerPopup /> */}
      <audio src="/sound/next.mp3" id="myAudio" ref={soundEffectRef}>
        오디오 지원되지 않는 브라우저
      </audio>
    </SlidePageWrap>
  );
}

export default React.memo(SwiperSlideItem);
