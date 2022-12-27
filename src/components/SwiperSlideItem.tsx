import React from 'react';
import {SlidePageWrap} from 'ComponentsFarm/styles/common';
import Receipt from './Receipt';
import {ISubkdsListItem} from 'ApiFarm/interface/subkds';

interface ISwiperSlideItem {
  receiptsData: any;
  areaNumber: number;
}

function SwiperSlideItem({receiptsData, areaNumber}: ISwiperSlideItem) {
  // console.log('receiptsData', receiptsData);

  return (
    <SlidePageWrap className={`SlidePage`}>
      {receiptsData.length !== 0 &&
        receiptsData.map((el: ISubkdsListItem) => (
          <Receipt
            key={el.receipt_item_contents_idx}
            data={el}
            areaNumber={areaNumber}
          />
        ))}
      {/* <ReceiptHandlerPopup /> */}
    </SlidePageWrap>
  );
}

export default React.memo(SwiperSlideItem);
