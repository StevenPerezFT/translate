import {
    IsString,
    IsNotEmpty
} from 'class-validator';

export class TranslateDto {

    @IsString()
    @IsNotEmpty()
    toLanguage: string

    @IsString()
    @IsNotEmpty()
    fromLanguage: string

    @IsNotEmpty()
    @IsString()
    text: string
}
