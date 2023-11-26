import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { DevicesService } from "./devices.service";
import { Device } from "./entities/devices";
import { NewDeviceInput } from "./dto/newDevice.input";

@Resolver()
export class DevicesResolver{
  constructor(private devicesService:DevicesService){}

  @Query(returns => [Device])
  public async devices():Promise<Device[]>{
    return await this.devicesService.getAllDevices().catch(err => {throw err})
  }

  @Mutation(returns => Device)
  public async addDevice(@Args("newDeviceData") newDeviceInput:NewDeviceInput ):Promise<Device>{
    return await this.devicesService.addDevice(newDeviceInput).catch(err => {throw err})
  }
}

