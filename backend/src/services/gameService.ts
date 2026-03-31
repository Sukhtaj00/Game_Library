import prisma from "../prisma";

export const gameService = {
  async getAllGames() {
    return prisma.game.findMany();
  },

  async getGameById(id: number) {
    return prisma.game.findUnique({
      where: { id },
    });
  },

  async createGame(title: string, completion: number) {
    return prisma.game.create({
      data: { title, completion },
    });
  },

  async updateGame(id: number, title: string, completion: number) {
    return prisma.game.update({
      where: { id },
      data: { title, completion },
    });
  },

  async deleteGame(id: number) {
    return prisma.game.delete({
      where: { id },
    });
  },
};