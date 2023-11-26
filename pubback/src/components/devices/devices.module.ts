import { Module } from "@nestjs/common";
import { DevicesService } from "./devices.service";
import { DevicesResolver } from "./devices.resolver";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Device } from "./entities/devices";

@Module({
  imports:[TypeOrmModule.forFeature([Device])],
  providers:[DevicesService,DevicesResolver],
  exports:[DevicesService]
})

export class DevicesModule{}