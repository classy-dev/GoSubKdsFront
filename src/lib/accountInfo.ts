// 세션 리로드
export const reloadSession = () => {
  const event = new Event('visibilitychange');
  document.dispatchEvent(event);
};

//스토어 정보 관련
export const setAccountStoreInfo = (
  store_id: string,
  store_name: string,
  store_token: string,
) => {
  const storeInfo = localStorage.getItem('storeInfo');
  const storeJson =
    storeInfo === undefined || storeInfo === null
      ? {}
      : JSON.parse(storeInfo as string);
  storeJson['store_id'] = store_id;
  storeJson['store_name'] = store_name;
  storeJson['store_token'] = store_token;

  localStorage.setItem('storeInfo', JSON.stringify(storeJson));
};
