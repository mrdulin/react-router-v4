import { asyncLoad } from '../../store';
import Loading from '../Loading';

const ContactModules = asyncLoad({
  loader: () => import(/* webpackChunkName: 'contact' */'./'),
  reducers: [
    { contactReducers: () => import(/* webpackChunkName: 'contactReducers' */'./reducer') }
  ],
  loading: Loading
});

export { ContactModules }
