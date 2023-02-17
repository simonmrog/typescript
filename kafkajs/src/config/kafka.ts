import { Kafka, KafkaConfig } from "kafkajs";

import config from "../config/env";

const kafkaConfig: KafkaConfig = {
  clientId: config.KAFKA_CLIENT_ID,
  brokers: config.KAFKA_BROKERS.split(","),
};
const kafka = new Kafka(kafkaConfig);

export default kafka;
