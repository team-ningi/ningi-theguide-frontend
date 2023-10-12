import { all, call } from "redux-saga/effects";
import refreshCoreDataSaga from "./refresh-core-data-saga";
import logoutSaga from "./logout-saga";

export function* rootSaga() {
  // yield all([call(refreshCoreDataSaga), call(logoutSaga)]);
  yield all([call(logoutSaga), call(refreshCoreDataSaga)]);
}
