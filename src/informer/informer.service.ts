import { Injectable, Logger } from "@nestjs/common";
import { LoggingMessage } from "./dto/loggingMessage";

@Injectable()
export class InformerService {
    private logger: Logger;
    constructor(){
        this.logger = new Logger(InformerService.name);

    }

    public logInformation(data: LoggingMessage){
        this.logger.log(`Pedido: ---${data.pedido}--- fue: ---${data.accion}--- por el microservicio: ---${data.microservicioOrigen}`);
        if(data.data !== null)
            this.logger.log(data.data);

        return
    }
}