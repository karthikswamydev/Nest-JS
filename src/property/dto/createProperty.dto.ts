import { IsInt, IsNumber, IsPositive, IsString, isString, Length } from "class-validator";

export class CreatePropertyDto{
    @IsString()
    @Length(1,10)
    name:string;
   @IsString()
   @Length(2,10,{groups:['create']})
   @Length(2,15,{groups:['update']})
    description :string;
    @IsInt()
    @IsPositive()
    area:number;
}