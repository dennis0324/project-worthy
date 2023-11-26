/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetDevices
// ====================================================

export interface GetDevices_devices {
  __typename: "Device";
  id: string;
  name: string;
  cost: number;
  comsumeElectric: number;
  usedTime: number;
}

export interface GetDevices {
  devices: GetDevices_devices[];
}
