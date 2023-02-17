import dotenv from "dotenv";

dotenv.config();

const getConfig = () => ({
  KAFKA_CLIENT_ID: "kafka-client-id",
  KAFKA_BROKERS: process.env.KAFKA_BROKERS || "localhost:9092",
  KAFKA_CONSUMER_GROUP_ID:
    process.env.KAFKA_CONSUMER_GROUP_ID || "consumer-group-id",
});

export default getConfig();
