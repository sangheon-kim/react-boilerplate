import { fork } from "redux-saga/effects";

import { helloSaga } from "./Layout/Layout.saga";

export default function* root() {
  yield fork(helloSaga);
}
