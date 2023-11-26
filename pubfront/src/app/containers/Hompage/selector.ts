import { createSelector } from "reselect";
import { IRootAppState } from "../../../types";

const selectHomepage = (state: IRootAppState) => state.homePage;

export const makeSelectDevices = createSelector(selectHomepage,(Homepage) => Homepage.devices)