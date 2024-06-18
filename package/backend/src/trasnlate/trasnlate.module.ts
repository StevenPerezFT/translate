import { Module } from "@nestjs/common"
import { TranslateController } from "./trasnlate.controller"
import { TranslateService } from "./trasnlate.service"


@Module({
    imports: [],
    controllers: [TranslateController],
    providers: [TranslateService],
})
export class TranslateModule { }