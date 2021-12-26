import myAxios from './axios';

export function getListAPI(data) {
  return myAxios({
    url: '/api/list',
    method: 'get',
    data
  })
}