import { asyncLoad } from "../../store";
import Loading from "../Loading";

const TopicModules = asyncLoad({
  loader: () => import(/* webpackChunkName: 'topics' */ "./"),
  reducers: [
    {
      topicsReducers: () =>
        import(/* webpackChunkName: 'topicsReducers' */ "./reducer")
    }
  ],
  loading: Loading
});

export { TopicModules };
