export default () => ({
    app:{
        port: process.env.APP_PORT,
        name: process.env.APP_NAME || "NestJs default APP",
    },
    rbmq:{
        user: process.env.RABBITMQ_USER,
        pass: process.env.RABBITMQ_PASSWORD,
        host: process.env.RABBITMQ_HOST,
        url: process.env.RABBITMQ_URL,
        queues:{
            informer: process.env.INFORMER_QUEUE,
        }


    }
})