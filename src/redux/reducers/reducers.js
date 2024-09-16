import { CHANGEUSERINFO } from "../actions/actions";

const User = { name: "Alice", status: "true" }; // начальное состояние

const reducerUsInfo = (state = User, action) => {
  if (action.type === CHANGEUSERINFO) {
    return {
      ...state,
      name: action.payload.name,
      status: action.payload.status,
    };
  }

  return state; //state - зарезервированное слово здесь
};

export default reducerUsInfo;
