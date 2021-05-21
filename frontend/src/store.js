import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
// import book reducers
import {
  bookListReducer,
  bookDetailsReducer,
  bookCreateReducer,
  bookUpdateReducer,
} from "./reducers/bookReducers"
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducers"
const reducer = combineReducers({
  bookList: bookListReducer,
  bookDetails: bookDetailsReducer,
  bookCreate: bookCreateReducer,
  bookUpdate: bookUpdateReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
})
const middleware = [thunk]

const userInfoFromStroage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null

const initialState = {
  userLogin: { userInfo: userInfoFromStroage },
}

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
