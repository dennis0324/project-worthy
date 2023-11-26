import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ComponentsModule } from './components/components.module';
import { ApolloDriver } from '@nestjs/apollo';
@Module({
  imports: [ConfigModule.forRoot(),DatabaseModule, GraphQLModule.forRoot({
    playground: process.env.NNODE_ENV !== 'production',
    debug: process.env.NNODE_ENV !== 'production',
    driver: ApolloDriver,
    autoSchemaFile:true
  }),
  ComponentsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
