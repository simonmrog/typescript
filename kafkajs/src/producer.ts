import { generateAnimal } from "./utils/animals";
import KafkaProducer from "./services/kakfaProducer";

async function produceMessage(): Promise<string | undefined> {
  try {
    const animal = generateAnimal();
    await producer.run("test", animal);
    return animal;
  } catch (err: any) {
    console.error(err);
  }
}

let counter = 0;
const producer = new KafkaProducer();

const interval = setInterval(async () => {
  const animal = await produceMessage();
  console.log("generating new animal...", animal);
  counter++;
  if (counter === 100) {
    clearInterval(interval);
    console.log("Process completed successfully");
  }
}, 1000);
