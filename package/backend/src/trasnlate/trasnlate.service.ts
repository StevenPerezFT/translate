import { Injectable } from "@nestjs/common";
import { TranslateDto } from "src/common/dto/translate";
import { translate } from '@vitalets/google-translate-api';

@Injectable()
export class TranslateService {
    async translate({ text, toLanguage, fromLanguage }: TranslateDto) {
        console.log({ text, fromLanguage, toLanguage })
        const result = await translate(text, { from: fromLanguage, to: toLanguage });
        console.log(result.text)
        return result
    }
}
