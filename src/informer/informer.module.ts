import { Module } from "@nestjs/common";
import { INFORMER } from "./constant/services";
import { InformerController } from "./informer.controller";
import { InformerService } from "./informer.service";
import { InformerMicroserviceModule } from "./microservices/informerMs.module";

@Module({
    imports: [ 
        InformerMicroserviceModule.register({
        name: INFORMER
    })],
    controllers:[InformerController],
    providers:[InformerService]
})
export class InformerModule{}