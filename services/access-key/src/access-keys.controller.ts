import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from "@nestjs/microservices";
import { AccessKeyService } from './access-keys.service';
import { UpdateUserDto, CreateUserDto, DeleteKeyUserDto } from "@app/common/dtos/index";

@Controller()
export class AccessKeyController {
  constructor(private readonly accessKeyService: AccessKeyService) {}

  @MessagePattern({ cmd: 'createUser' })
  createUser(@Payload() data: CreateUserDto){
    return this.accessKeyService.createUser(data);
  }

  @MessagePattern({ cmd: 'getAllUsers' })
  getAllUsers(){
    return this.accessKeyService.getAllUsers();
  }
  
  @MessagePattern({ cmd: 'getUserById' })
  getUserById(@Payload() data: string){
    return this.accessKeyService.getUserById(data);
  }

  @MessagePattern({ cmd: 'updateUser' })
  updateUser(@Payload() data: UpdateUserDto){
    return this.accessKeyService.updateUser(data);
  }

  @MessagePattern({ cmd: 'deleteUser' })
  deleteUser(@Payload() data: DeleteKeyUserDto){
    return this.accessKeyService.deleteUser(data);
  }

  @MessagePattern({ cmd: 'deactivateKeyByUser' })
  deactivateKeyByUser(@Payload() data: DeleteKeyUserDto){
    return this.accessKeyService.deactivateKeyByUser(data);
  }

  @MessagePattern({ cmd: 'activateKeyByUser' })
  activateKeyByUser(@Payload() data: DeleteKeyUserDto){
    return this.accessKeyService.activateKeyByUser(data);
  }
}