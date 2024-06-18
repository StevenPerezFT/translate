import { Module } from '@nestjs/common';
import { TranslateModule } from './trasnlate/trasnlate.module';

@Module({
  imports: [
    TranslateModule
  ],
})
export class AppModule {}
