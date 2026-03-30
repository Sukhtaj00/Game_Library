import prisma from "../src/prisma";

async function main() {
  console.log("Seeding database...");

  await prisma.game.createMany({
    data: [
      { title: "The Legend of Zelda: Breath of the Wild", completion: 75 },
      { title: "Elden Ring", completion: 40 },
      { title: "Red Dead Redemption 2", completion: 60 },
      { title: "Cyberpunk 2077", completion: 30 },
      { title: "God of War Ragnarok", completion: 90 },
      { title: "FIFA 24", completion: 50 },
      { title: "Call of Duty: Modern Warfare III", completion: 20 },
      { title: "Minecraft", completion: 100 },
      { title: "Grand Theft Auto V", completion: 85 },
      { title: "Assassin's Creed Valhalla", completion: 45 },
    ],
  });

  console.log("Seeding complete.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });