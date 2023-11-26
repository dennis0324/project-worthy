import { Module } from "@nestjs/common";
import { DevicesModule } from "./devices/devices.module";

@Module({
  imports:[DevicesModule]
})

export class ComponentsModule{}