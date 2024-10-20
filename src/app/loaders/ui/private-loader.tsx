import { redirect } from 'react-router-dom';
import { ROUTER_PATHS } from '@/shared/constants';
import { getAccessToken } from '@/shared/lib/localStorage';

export const privateLoader = () => {
  if (!getAccessToken()) {
    return redirect(ROUTER_PATHS.LOGIN);
  }
  return null;
};
