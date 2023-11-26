import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "devices"})
@ObjectType()
export class Device{

  @PrimaryGeneratedColumn('uuid')
  @Field()
  id:string;

  @Column()
  @Field()
  name:string;
  
  @Column()
  @Field()
  usedTime:number

  @Column()
  @Field()
  comsumeElectric:number

  @Column()
  @Field()
  cost:number
}