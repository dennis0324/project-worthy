import gql from 'graphql-tag'

export const GET_ALL_DEVICES = gql`
  query GetDevices {
    devices {
      id
      name
      cost
      comsumeElectric
      usedTime
    }
  }
`