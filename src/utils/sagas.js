import {takeEvery, put, call} from 'redux-saga/effects'
import {
    ADD_NEW_ENTITY, DELETE_ENTITY,
    FETCH_SEARCH_RESULT,
    FETCH_TABLE_FIELDS,
    REQUEST_SEARCH_RESULT,
    REQUEST_TABLE_FIELDS,
    hideAlert,
    showAlert
} from "./actions";
import {addNewEntity, deleteEntity, fetchSearchResult, fetchTableFields} from "./fetchFunctions";


export default function* sagaWatcher() {
    yield takeEvery(REQUEST_SEARCH_RESULT, requestStudent);
    yield takeEvery(REQUEST_TABLE_FIELDS, requestTableFields);
    yield takeEvery(ADD_NEW_ENTITY, addNewEntitySaga);
    yield takeEvery(DELETE_ENTITY, deleteEntitySaga)
}

function* requestStudent(action) {
    try {
        const payload = yield call(fetchSearchResult, action.data);
        yield put({type: FETCH_SEARCH_RESULT, payload});
        yield put(hideAlert());
    } catch (error) {
        yield put(showAlert());
    }
}

function* requestTableFields(action) {
    try {
        const payload = yield call(fetchTableFields, action.table);
        yield put({type: FETCH_TABLE_FIELDS, payload});
        yield put(hideAlert());
    } catch (error) {
        yield put(showAlert());
    }
}

function* addNewEntitySaga(action) {
    yield call(addNewEntity, action.data);
}

function* deleteEntitySaga(action) {
    yield call(deleteEntity, action.data);
}