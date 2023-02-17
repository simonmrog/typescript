import kafka from "../config/kafka";

export interface IKafkaProducer {
  run(topic: string, message: string): void;
}

class KafkaProducer implements IKafkaProducer {
  private readonly _producer: any;

  constructor() {
    this._producer = kafka.producer();
  }

  async run(topic: string, message: string) {
    try {
      await this._producer.connect();
      await this._producer.send({
        topic,
        messages: [{ value: message }],
      });
    } catch (err: any) {
      console.error(err);
      await this._producer.disconnect();
    }
  }
}

export default KafkaProducer;
