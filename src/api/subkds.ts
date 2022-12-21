import AxiosUtil from '.';
import {ISubkdsListReq, ISubkdsProcessReq} from './interface/subkds';

//subKds 리스트
export const fetchSubKdsList = async (
  mode: number,
  params?: ISubkdsListReq,
) => {
  const response = await AxiosUtil.get(`/kds/v1/local/${mode}`, {
    params,
  });

  return response.data.data;
};

//subKds 처리 (0=대기, 1=처리, 2=완료, 8=생략, 9=취소)
export const fetchSubKdsProcess = async ({
  receipt_item_contents_idx,
  process_status,
}: {
  receipt_item_contents_idx: number;
  process_status: number;
}) => {
  console.log(
    'receipt_item_contents_idx',
    receipt_item_contents_idx,
    'process_status',
    process_status,
  );

  const response = await AxiosUtil.put(
    `/kds/v1/local/proc/${receipt_item_contents_idx}`,
    {process_status},
  );

  console.log(response);

  return response.data.data;
};
