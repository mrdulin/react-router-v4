import { asyncLoad } from "../../store";
import Loading from "../Loading";

const NoMatchModules = asyncLoad({
  loader: () => import(/* webpackChunkName: 'about' */ "./"),
  loading: Loading
});

export { NoMatchModules };
