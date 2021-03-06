import { ADD_ENTRY, UPDATE_ENTRIES } from "../../constants/reduxActions";
import { IEntry } from "../../constants/types";
import { Reducer } from "react";

interface IRootState {
  allEntries: Array<IEntry>;
}

const initialState: IRootState = {
  allEntries: [],
};

const totalWorktimeReducer: Reducer<IRootState, any> = (
  state = initialState,
  action: any
) => {
  switch (action.type) {
    case ADD_ENTRY:
      return { ...state, allEntries: [...state.allEntries, action.payload] };
    case UPDATE_ENTRIES:
      return { ...state, allEntries: action.payload };
    default:
      return state;
  }
};

export default totalWorktimeReducer;
