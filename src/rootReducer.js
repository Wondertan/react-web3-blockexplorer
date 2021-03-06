import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import blocksReducer from "./reducers/blocksReducer";
import web3Reducer from "./reducers/web3Reducer";
import transactionReducer from "./reducers/transactionReducer";

export default combineReducers({
  router: routerReducer,
  blocks: blocksReducer,
  web3: web3Reducer,
  transaction: transactionReducer,
});
