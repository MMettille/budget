import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchBill() {
  try {
    const response = yield axios.get('/api/bill')
    yield put({ type: 'SET_BILL', payload: response.data });
  } catch (error) {
    console.log('User get bill failed', error);
  }
}

function* billSaga() {
  yield takeLatest('FETCH_BILL', fetchBill);
}

export default billSaga;