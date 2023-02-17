import config from "../config/env";
import kafka from "../config/kafka";

export interface IKafkaProducer {
  connect(): Promise<void>;
  run(topic: string, message: string): Promise<void>;
  disconnect(): Promise<void>;
}

class KafkaProducer implements IKafkaProducer {
  private readonly _producer: any;

  constructor() {
    this._producer = kafka.producer();
  }

  async connect() {
    try {
      await this._producer.connect();
    } catch (err: any) {
      console.error("error in producer.connect", err.stack || err);
    }
  }

  async run(topic: string, message: string) {
    try {
      await this.connect();
      await this._producer.send({
        topic,
        acks: config.KAFKA_PRODUCER_ACKS,
        messages: [{ value: message }],
      });
    } catch (err: any) {
      console.error("error in producer.run", err.stack || err);
      await this.disconnect();
    }
  }

  async disconnect() {
    try {
      await this._producer.disconnect();
    } catch (err: any) {
      console.error("error in producer.disconnect", err.stack || err);
    }
  }
}

export default KafkaProducer;
