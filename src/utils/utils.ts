import { history } from 'umi';
import { EXTERNAL_ROUTES } from '../../config/routes';

const external_paths = EXTERNAL_ROUTES.map((o) => o.path);

export function isNeedAuthPage() {
  return !['/user/login', ...external_paths].includes(history.location.pathname);
}
