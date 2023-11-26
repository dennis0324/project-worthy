import { createSlice } from "@reduxjs/toolkit";
import { IHomepageState } from "./type";

const initialState: IHomepageState = {
  devices: [],
}

const homePageSlice = createSlice({
  name: "homepage",
  initialState,
  reducers: {
    setDevices: (state, action) => {
      state.devices = action.payload;
    }
  }
})

export const { setDevices } = homePageSlice.actions;
export default homePageSlice.reducer;