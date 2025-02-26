import { Body, Controller, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';

@Controller('property')
export class PropertyController {
    @Get()
    findAll(){
        return "All Properties"
    }

    @Get("/:id/:slug")
    FindOne(@Param() id:string){
        return id
    }
    
    
    @Post()
    @UsePipes(new ValidationPipe({whitelist:true,forbidNonWhitelisted:true}))
    create(@Body() body: CreatePropertyDto ) {
        return body
    }

   @Patch(":id")
   update(@Body(new ValidationPipe({whitelist:true,forbidNonWhitelisted:true,groups:['update'],always:true})) Body:CreatePropertyDto){
    return Body;
   }



}
