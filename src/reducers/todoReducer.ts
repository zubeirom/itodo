import { FETCH_TODOS } from "../actions/types";

const initialState = {
  items: []
};

export default function(state = initialState, action: any) {
  switch (action.type) {
    case FETCH_TODOS:
      return { ...state };

    default:
      return state;
  }
}
