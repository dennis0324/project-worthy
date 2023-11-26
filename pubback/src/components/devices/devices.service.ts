import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { Repository } from "typeorm";
import { Device } from "./entities/devices";
import { InjectRepository } from "@nestjs/typeorm";
import { NewDeviceInput } from "./dto/newDevice.input";

@Injectable()
export class DevicesService{
  constructor(@InjectRepository(Device) private deviceRepo: Repository<Device>){}

  public async getAllDevices(): Promise<Device[]>{
    return await this.deviceRepo.find({}).catch(err => {
      throw new InternalServerErrorException(err)
    })
  }

  public async addDevice(newDeviceData:NewDeviceInput):Promise<Device>{
    console.log(newDeviceData)
    const newDevice = this.deviceRepo.save(newDeviceData);
    // await this.deviceRepo.save(newDevice).catch(err => {
    //   throw new InternalServerErrorException(err)
    // })
    console.log(this.deviceRepo)

    return newDevice;
  }

}