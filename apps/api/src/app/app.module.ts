import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule} from '@nestjs/typeorm';
import { typeormOptions } from '../config/typeorm.config';
import { CoreModule } from './core/core.module';

@Module({
  imports: [
    CoreModule,
    TypeOrmModule.forRoot(typeormOptions),
   
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
