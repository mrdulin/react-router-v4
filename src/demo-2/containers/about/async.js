import { asyncLoad } from '../../store';
import Loading from '../Loading';

const AboutModules = asyncLoad({
  loader: () => import(/* webpackChunkName: 'about' */ './'),
  reducers: [
    {
      aboutReducers: () => import(/* webpackChunkName: 'aboutReducers' */ './reducer')
    }
  ],
  loading: Loading
});

export { AboutModules };
