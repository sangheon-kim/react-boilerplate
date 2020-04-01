import { handleActions, createAction } from "redux-actions";

export const CHANGE_MENU = "layout/CHANGE_MENU";

const initialState = {
  menu: "home"
};

const layout = handleActions(
  {
    [CHANGE_MENU]: (state, action) => ({
      ...state,
      menu: action.payload.menu
    })
  },
  initialState
);

export const changeMenu = createAction(CHANGE_MENU, menu => ({ menu }));

export default layout;
