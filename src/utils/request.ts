import { request, history } from 'umi';
import { RequestOptionsInit } from 'umi-request';
import { message } from 'antd';
import { isNeedAuthPage } from './utils';

type Options = Omit<RequestOptionsInit, 'method' | 'responseType'> & {
  noAlert?: boolean;
  withoutCustomerHeader?: boolean;
  useOriginResponse?: boolean;
};

const errorHandler = (alertErr: boolean) => (err: any) => {
  if (err) {
    if (err.code === 401) {
      if (isNeedAuthPage()) {
        history.replace({ pathname: '/user/login' });
      }
      throw err;
    }

    alertErr && err.msg && message.error(err.msg);
  }
  throw err;
};

const defaultHeader = {
  'Content-Type': 'application/json;charset=UTF-8',
};

const customRequest =
  (method: 'POST' | 'GET' | 'DELETE') =>
  (url: string, options: Options = {}) => {
    const requestUrl = url.startsWith('http') ? url : `/${url}`;
    return request(requestUrl, {
      ...options,
      headers: {
        // @ts-ignore
        ...(options.data instanceof FormData || defaultHeader),
        ...options.headers,
      },

      method,
    })
      .then(async (rs) => {
        if (options.useOriginResponse) return rs as unknown as any;
        console.log('rs', rs);
        if (rs.code !== 200) {
          throw rs;
        }
        console.log('rs.result', rs.result);
        return rs?.result;
      })
      .catch(errorHandler(!options.noAlert));
  };

export default {
  get: customRequest('GET'),
  del: customRequest('DELETE'),
  post: customRequest('POST'),
};
