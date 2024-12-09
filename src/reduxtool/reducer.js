import { combineReducers } from "redux";

import authReducer from "./auth/authSlice";
import lemReducer from "./lem/lemSlice";
import stateReducer from "./state/stateSlice";
import appReducer from "./app/appslice";
import editStateReducer from "./editstate/editSlice";

const reducer = combineReducers({
  Auth: authReducer,
  Lem: lemReducer,
  State: stateReducer,
  EditState: editStateReducer,
  App: appReducer,
});

export default reducer;
