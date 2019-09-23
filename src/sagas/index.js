import { put, takeLatest, all } from 'redux-saga/effects';


//here happpen asychronous call to API and when reqest arrived next action
function* fetchNews() {

  const json = yield fetch('https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc')
    .then(response => response.json());

  yield put({
    type: 'NEWS_RECEIVED', json: json.articles,
  });
}

function* actionWatcher() {
  yield takeLatest("GET_NEWS", fetchNews)
}

//we export from file function rootSaga in which we call function actionwatcher
export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}