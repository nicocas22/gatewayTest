/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices'
import { RabbitMQ } from '../constants'

@Injectable()
export class ClientProxyUsers {
    constructor(private readonly config: ConfigService) { }

    clientProxyUsuario(): ClientProxy {
        return ClientProxyFactory.create({
            transport: Transport.RMQ,
            options: {
                urls: [`${this.config.get('AMQP_URL')}`],
                queue: RabbitMQ.UserQueue,
                queueOptions: {
                    durable: true, //persistent
                },
            }
        })
    }

    clientProxyEstate(): ClientProxy {
        return ClientProxyFactory.create({
            transport: Transport.RMQ,
            options: {
                urls: [`${this.config.get('AMQP_URL')}`],
                queue: RabbitMQ.EstateQueue,
                queueOptions: {
                    durable: true, //persistent
                },
            }
        })
    }
}