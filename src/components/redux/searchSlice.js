import {createSlice} from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    isSearch: false,
    inputSearch: "",
  },

  reducers: {
    handleClickSearch: (state, actions) => {
      return {
        ...state,
        isSearch: actions.payload,
      };
    },
    getValueInputSearch: (state, action) => {
      return {
        ...state,
        inputSearch: action.payload,
      };
    },
  },
});

export const {handleClickSearch, getValueInputSearch} = searchSlice.actions;

export default searchSlice.reducer;
