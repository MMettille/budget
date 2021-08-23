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

function* addNewBill(action) {
    try {
      const response = yield axios.post('/api/bill/newBill', action.payload )
      yield put({ type: 'FETCH_BILL' })
    } catch (error) {
      console.log('User get bill failed', error);
    }
  }

  // ⬇ Editing the bill in the database
function* editBill(action) {
    const editId = action.payload.id;
     try {
         yield axios.put(`/api/bill/{editId}`, action.payload);
         // ⬇ Refresh the tasks
        yield put({ type: 'FETCH_BILL'})
     } catch {
     console.log('error in put task');
     }
  }

function* billSaga() {
  yield takeLatest('FETCH_BILL', fetchBill);
  yield takeLatest('ADD_NEW_BILL', addNewBill);
  yield takeLatest('EDIT_BILL', editBill);
}

export default billSaga;