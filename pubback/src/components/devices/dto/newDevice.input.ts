import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class NewDeviceInput{

  @Field()
  name:string;

  @Field(type => Int)
  usedTime:number;

  @Field(type => Int)
  comsumeElectric:number;

  @Field(type => Int)
  cost:number;
}