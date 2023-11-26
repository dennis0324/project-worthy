import { apolloClient } from "../../app/graphql";
import { GetDevices_devices } from "./__generated__/GetDevices";
import { GET_ALL_DEVICES } from "./queries";

class deviceService{
  public async getDevices(): Promise<GetDevices_devices[]> {
    const response = await apolloClient.query({query: GET_ALL_DEVICES}).catch((err) => {
      throw err;
    });

    if(response && response.data){
      return response.data.devices as GetDevices_devices[];
    }

    return [];
  }
}
export default new deviceService();