import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { EventsModule } from './../events/events.module';
import { CategoriesModule } from './../categories/categories.module';
import { ChildrensModule } from './../childrens/childrens.module';
import { AdminsModule } from './../admins/admins.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      cors: {
        origin: '*',
        credential: true,
      },
      playground: false,
      introspection: false,
    }),
    ChildrensModule,
    CategoriesModule,
    EventsModule,
    AdminsModule,
  ],
})
export class AppModule {}
