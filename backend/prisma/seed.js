import {prisma} from "client.js"

async function seed() {
    await prisma.user.createMany(
        {
            data: [
                {name: 'Zinah' , email: 'zinah@example.com'},
                {name: 'ali' , email: 'ali@example.com'}
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