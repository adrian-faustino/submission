import { IEntry } from "../../constants/types";
import { ADD_ENTRY, UPDATE_ENTRIES } from "../../constants/reduxActions";

export const addNewEntry = (payload: IEntry) => {
  return {
    type: ADD_ENTRY,
    payload,
  };
};

export const updateEntriesArray = (payload: Array<IEntry>) => {
  return {
    type: UPDATE_ENTRIES,
    payload,
  };
};
