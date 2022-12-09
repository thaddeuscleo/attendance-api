import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AdminsService } from './admins.service';
import { Admin } from './entities/admin.entity';
import { CreateAdminInput } from './dto/create-admin.input';
import { UpdateAdminInput } from './dto/update-admin.input';
import { LoginAdminInput } from './dto/login-admin.input';
import { AuthService } from './../auth/auth.service';


@Resolver(() => Admin)
export class AdminsResolver {
  constructor(private readonly adminsService: AdminsService, private readonly authService: AuthService) {}

  @Mutation(() => Admin)
  createAdmin(@Args('createAdminInput') createAdminInput: CreateAdminInput) {
    return this.adminsService.create(createAdminInput);
  }

  @Query(() => [Admin], { name: 'admins' })
  findAll() {
    return this.adminsService.findAll();
  }

  @Query(() => Admin, { name: 'admin' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.adminsService.findOne(id);
  }

  @Mutation(() => Admin)
  updateAdmin(@Args('updateAdminInput') updateAdminInput: UpdateAdminInput) {
    return this.adminsService.update(updateAdminInput.id, updateAdminInput);
  }

  @Mutation(() => Admin)
  removeAdmin(@Args('id', { type: () => Int }) id: number) {
    return this.adminsService.remove(id);
  }

  @Mutation(() => String)
  login(@Args('loginAdminInput') loginAdminInput: LoginAdminInput) {
    return this.authService.login(loginAdminInput);
  }
}
