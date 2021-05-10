import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
// import book reducers
import { bookListReducer, bookDetailsReducer } from "./reducers/bookReducers"

const reducer = combineReducers({
  bookList: bookListReducer,
  bookDetails: bookDetailsReducer,
})
const middleware = [thunk]

const initialState = {}

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
