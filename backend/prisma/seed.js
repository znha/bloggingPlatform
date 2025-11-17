import {prisma} from "./client.js"

async function seed() {
    // await prisma.user.createMany(
    //     {
    //         data: [
    //             {name: 'Zinah' , email: 'zinah32564@example.com', password:'1234567'},
    //             {name: 'ali' , email: 'alissdfs@example.com',password:'1234567'}
    //         ]
    //     }
    // );

       await prisma.post.createMany({
    data: [
      {
        title: 'Understanding Prisma Relations',
        content: 'Learn how to model and query relational data using Prisma in a fullstack app.',
        authorId: 13,
      },
      {
        title: 'Next.js App Router Best Practices',
        content: 'Explore the new App Router in Next.js 13+ and how to structure scalable projects.',
        authorId: 14,
      },
      {
        title: 'Tailwind CSS for Blog Layouts',
        content: 'Design beautiful, responsive blog pages using Tailwind utility classes.',
        authorId: 13,
      },
      {
        title: 'Testing Redux Logic with Jest',
        content: 'Write unit and integration tests for Redux slices using Jest and React Testing Library.',
        authorId: 14,
      },
    ],
  });


}

seed().catch((e) => {
        console.error(e);
        process.exit(1);
      })
      .finally(async () => {
        await prisma.$disconnect();
      });