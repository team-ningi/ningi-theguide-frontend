/* eslint-disable no-unused-expressions */
import { call, put, takeLatest } from "redux-saga/effects";
import { actions } from "../reducers/users";

function* logout() {
  yield put({ type: actions.IS_LOADING, loading: true });

  // resets all the stores
  yield put({ type: actions.RESET });

  yield put({ type: actions.IS_LOADING, loading: false });

  window.location.assign("/");
}

function* logoutSaga() {
  // @ts-ignore
  yield takeLatest("LOGOUT", logout);
}

export default logoutSaga;
