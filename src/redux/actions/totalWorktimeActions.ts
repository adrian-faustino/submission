import { IEntry } from "../../constants/types";
import { UPDATE_ENTRIES } from "../../constants/reduxActions";

export const updateEntriesArray = (payload: Array<IEntry>) => {
  return {
    type: UPDATE_ENTRIES,
    payload,
  };
};
