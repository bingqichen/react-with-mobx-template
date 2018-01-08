import { axios } from '../utils';

export const getPage = () => (axios.get('/topics', {
  params: {
    limit: 20,
    tab: 'all',
    page: 1
  }
}));
