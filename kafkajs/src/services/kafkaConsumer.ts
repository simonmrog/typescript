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

  async connect() {
    try {
      await this._consumer.connect();
      await this._consumer.subscribe({
        topic: config.KAFKA_CONSUMER_TOPIC,
        fromBeginning: config.KAFKA_CONSUMER_FROM_BEGINNING,
      });
    } catch (err: any) {
      console.error("error in consumer.connect", err.stack || err);
    }
  }

  async run(topic: string, fromBeginning: boolean = true) {
    try {
      await this.connect();
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
      await this.disconnect();
    }
  }

  async disconnect() {
    try {
      await this._consumer.disconnect();
    } catch (err: any) {
      console.error("error in consumer.disconnect", err.stack || err);
    }
  }
}

export default KafkaConsumer;
