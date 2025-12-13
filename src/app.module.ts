import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BasicModule } from './basic/basic.module';
import { UsersModule } from './users/users.module';
import { CategoriesModule } from './categories/categories.module';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';
import { MailModule } from './mail/mail.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CursosModule } from './cursos/cursos.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI || ''),
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.DB_PORT || 5432),
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASS || 'postgres',
      database: process.env.DB_NAME || 'blog',
      autoLoadEntities: true,
      synchronize: true,
    }),
    BasicModule,
    UsersModule,
    CategoriesModule,
    PostsModule,
    AuthModule,
    MailModule,
    CursosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
