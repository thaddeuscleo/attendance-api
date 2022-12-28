import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AdminsService } from './admins.service';
import { Admin } from './entities/admin.entity';
import { CreateAdminInput } from './dto/create-admin.input';
import { UpdateAdminInput } from './dto/update-admin.input';
import { LoginAdminInput } from './dto/login-admin.input';
import { AuthService } from './../auth/auth.service';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/gql-auth-guard.guard';

@Resolver(() => Admin)
export class AdminsResolver {
  constructor(
    private readonly adminsService: AdminsService,
    private readonly authService: AuthService,
  ) {}

  @Mutation(() => Admin)
  @UseGuards(GqlAuthGuard)
  createAdmin(@Args('createAdminInput') createAdminInput: CreateAdminInput) {
    return this.adminsService.create(createAdminInput);
  }

  @Query(() => [Admin], { name: 'admins' })
  @UseGuards(GqlAuthGuard)
  findAll() {
    return this.adminsService.findAll();
  }

  @Query(() => Admin, { name: 'admin' })
  @UseGuards(GqlAuthGuard)
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.adminsService.findOne(id);
  }

  @Mutation(() => Admin)
  @UseGuards(GqlAuthGuard)
  updateAdmin(@Args('updateAdminInput') updateAdminInput: UpdateAdminInput) {
    return this.adminsService.update(updateAdminInput);
  }

  @Mutation(() => Admin)
  @UseGuards(GqlAuthGuard)
  removeAdmin(@Args('id', { type: () => String }) id: string) {
    return this.adminsService.remove(id);
  }

  @Mutation(() => String)
  login(@Args('loginAdminInput') loginAdminInput: LoginAdminInput) {
    return this.authService.login(loginAdminInput);
  }
}
