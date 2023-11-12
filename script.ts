import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {

const post = await prisma.post.create({
    data: {
        title: "Prisma makes databases easy",
        averageRating: 4.0,
        author: {
            connectOrCreate: {
                where: {
                    email: "ronjacob@gmail.com",
                },
                create: {
                    email: "ronjacob@gmail.com",
                    name: "Ron Jacob",
                    age: 22,
                    isAdmin: true,

            }
        }
    },

    },
    include: {
        author: true,
    },
})

console.log(post)
}

main()
    .catch(e => {
        console.error(e.message)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })