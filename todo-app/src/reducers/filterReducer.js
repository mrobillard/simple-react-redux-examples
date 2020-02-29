import { SHOW_ALL, SET_VISABILITY_FILTER } from "../actions/types";

const visibilityFitler = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISABILITY_FILTER:
      return action.filter;

    default:
      return state;
  }
};

export default visibilityFitler;
