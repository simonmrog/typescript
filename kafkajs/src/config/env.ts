import dotenv from "dotenv";

dotenv.config();

interface IEnvConfig {
  NODENV: string;
  HOSTNAME: string | undefined;
  PORT: number;
  LOG_LEVEL: string;
  KAFKA_CLIENT_ID: string | undefined;
  KAFKA_BROKERS: string;
  KAFKA_CONSUMER_TOPIC: string;
  KAFKA_CONSUMER_FROM_BEGINNING: boolean;
  KAFKA_CONSUMER_GROUP_ID: string;
  KAFKA_PRODUCER_ACKS: number;
  KAFKA_PRODUCER_TOPIC: string;
}

const getConfig = (): IEnvConfig => ({
  NODENV: process.env.NODENV || "dev",
  HOSTNAME: process.env.HOSTNAME,
  PORT: process.env.PORT ? parseInt(process.env.PORT, 10) : 3000,
  LOG_LEVEL: process.env.LOG_LEVEL || "INFO",
  KAFKA_CLIENT_ID: process.env.KAFKA_CLIENT_ID,
  KAFKA_BROKERS: process.env.KAFKA_BROKERS || "localhost:9092",
  KAFKA_CONSUMER_TOPIC: process.env.KAFKA_CONSUMER_TOPIC || "test",
  KAFKA_CONSUMER_FROM_BEGINNING:
    process.env.KAFKA_CONSUMER_FROM_BEGINNING === "true" || false,
  KAFKA_CONSUMER_GROUP_ID:
    process.env.KAFKA_CONSUMER_GROUP_ID || "consumer-group",
  KAFKA_PRODUCER_ACKS: process.env.KAFKA_PRODUCER_ACKS
    ? parseInt(process.env.KAFKA_PRODUCER_ACKS, 10)
    : 1,
  KAFKA_PRODUCER_TOPIC: process.env.KAFKA_PRODUCER_TOPIC || "test",
});

export default getConfig();
