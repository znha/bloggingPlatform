import {prisma} from "client.js"

async function seed() {
    await prisma.user.createMany(
        {
            data: [
                {name: 'Zinah' , email: 'zinah32564@example.com', password:'1234567'},
                {name: 'ali' , email: 'alissdfs@example.com',password:'1234567'}
            ]
        }
    )
}

seed().catch((e) => {
        console.error(e);
        process.exit(1);
      })
      .finally(async () => {
        await prisma.$disconnect();
      });