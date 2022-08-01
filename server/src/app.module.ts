import { Module } from '@nestjs/common';
import { DatabaseModule } from './app/database/database.module';
import { UsersModule } from './app/users/users.module';

@Module({
  imports: [DatabaseModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
