import { put, takeLatest, all } from "redux-saga/effects";
import axios from "axios";
import { actions, actions as userActions } from "../reducers/users";

const findExistingUser = async (email: string, authToken: string) =>
  await axios({
    method: "post",
    url: "/api/db/find-user",
    data: {
      email,
      authToken,
    },
  });

const createUser = async (email: string, authToken: string) =>
  await axios({
    method: "post",
    url: "/api/db/create-user",
    data: {
      email,
      authToken,
    },
  });

export function* refreshCoreData({
  action,
}: {
  action: {
    email: string;
    session: { authToken: string };
    keepLoadingSpinner: boolean;
  };
}): any {
  try {
    yield put({ type: userActions.IS_LOADING, loading: true });

    const { email, session, keepLoadingSpinner = true } = action;

    const { data: user } = yield findExistingUser(email, session?.authToken);

    if (user.length < 1) {
      const { data: res } = yield createUser(email, session?.authToken);

      if (res.error) {
        throw new Error("failed to create user");
      } else {
        yield put({
          type: userActions.CORE_DATA_LOADED,
          user,
          loggedIn: true,
        });
      }
    } else {
      yield put({
        type: userActions.CORE_DATA_LOADED,
        user,
        loggedIn: true,
      });
    }

    return yield put({
      type: userActions.IS_LOADING,
      loading: keepLoadingSpinner,
    });
  } catch (e) {
    yield put({ type: "LOGOUT" });
  }
}

function* refreshCoreDataSaga() {
  // @ts-ignore
  yield takeLatest(actions.REFRESH_CORE_DATA, refreshCoreData);
}

export default refreshCoreDataSaga;
