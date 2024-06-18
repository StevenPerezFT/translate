import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { TranslateService } from "./trasnlate.service";
import { TranslateDto } from "src/common/dto/translate";

@Controller('translate')
export class TranslateController {
    constructor(private readonly trasnlateService: TranslateService,) { }

    @HttpCode(HttpStatus.OK)
    @Post()
    translate(@Body() { text, fromLanguage, toLanguage }: TranslateDto) {
        if (text.length === 0 || toLanguage === '') return
        return this.trasnlateService.translate({ text, toLanguage, fromLanguage })
    }

}
