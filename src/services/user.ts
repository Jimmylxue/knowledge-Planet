import request from '@/utils/request';

export async function login(data: any) {
  // return await request('/api/user/login', {
  return await request.post('http://127.0.0.1:9999/user/login', {
    data: data,
  });
}

export async function getUser(data: any) {
  // return await request('/api/user/login', {
  return await request.get('http://127.0.0.1:9999/user/all-user', {
    data: data,
  });
}
