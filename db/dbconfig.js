import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient({
    log:["query", 'info', 'warn', 'error'],
    datasources: {
        db: {
          url: process.env.DATABASE_URL,
        },
    },
});

prisma.$connect()
  .then(() => {
    console.log('Connected to PostgreSQL database');
  })
  .catch((error) => {
    console.error('Error connecting to PostgreSQL database', error);
  });

export default prisma;
