import config from "../config/env";
import kafka from "../config/kafka";

interface IKafkaConsumer {
  run(topic: string, fromBeginning: boolean): void;
}

class KafkaConsumer implements IKafkaConsumer {
  private readonly _consumer: any;

  constructor() {
    this._consumer = kafka.consumer({
      groupId: config.KAFKA_CONSUMER_GROUP_ID,
    });
  }

  async run(topic: string, fromBeginning: boolean = true) {
    try {
      console.log("Connecting consumer...");
      await this._consumer.connect();
      console.log("Subscribing consumer to topic...");
      await this._consumer.subscribe({ topic, fromBeginning });
      console.log("Running consumer...");
      await this._consumer.run({
        eachMessage: async ({ partition, message }: any) => {
          console.log({
            partition,
            offset: message.offset,
            value: message.value.toString(),
          });
        },
      });
    } catch (err) {
      console.error(err);
    }
  }
}

export default KafkaConsumer;
