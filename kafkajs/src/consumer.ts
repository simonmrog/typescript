import KafkaConsumer from "./services/kafkaConsumer";

const consumer = new KafkaConsumer();
consumer.run("test", false);
