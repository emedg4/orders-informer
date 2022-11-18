import { Controller } from "@nestjs/common";
import { Ctx, EventPattern, Payload, RmqContext } from "@nestjs/microservices";
import { INFORMER } from "./constant/services";
import { LoggingMessage } from "./dto/loggingMessage";
import { InformerService } from "./informer.service";
import { InformerMicroserviceService } from "./microservices/informerMs.service";

@Controller()
export class InformerController {
    constructor( private informerService: InformerService,
                 private informerMs: InformerMicroserviceService){}

    @EventPattern(INFORMER)
    async listenToLoggerInformationFromMicroservices(@Payload() data:LoggingMessage, @Ctx() context: RmqContext){
        this.informerService.logInformation(data);
        this.informerMs.ack(context);
    }
}