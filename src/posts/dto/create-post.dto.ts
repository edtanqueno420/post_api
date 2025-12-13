import { IsString, IsUUID, IsNotEmpty } from 'class-validator';

export class CreatePostDto {
  @IsString()
  title: string;

  @IsString()
  content: string;

  @IsUUID()
  @IsNotEmpty()
  categoryId: string;
}
