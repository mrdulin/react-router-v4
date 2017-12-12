import { asyncLoad } from '../../store';
import Loading from '../Loading';

const HomeModules = asyncLoad({
  loader: () => import(/* webpackChunkName: 'home' */'./'),
  reducers: [
    { homeReducers: () => import(/* webpackChunkName: 'homeReducers' */'./reducer') }
  ],
  loading: Loading
})

export { HomeModules }
