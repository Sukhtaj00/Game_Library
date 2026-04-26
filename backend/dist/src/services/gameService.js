"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameService = void 0;
const prisma_1 = __importDefault(require("../prisma"));
exports.gameService = {
    async getAllGames() {
        return prisma_1.default.game.findMany();
    },
    async getGameById(id) {
        return prisma_1.default.game.findUnique({
            where: { id },
        });
    },
    async createGame(title, completion) {
        return prisma_1.default.game.create({
            data: { title, completion },
        });
    },
    async updateGame(id, title, completion) {
        return prisma_1.default.game.update({
            where: { id },
            data: { title, completion },
        });
    },
    async deleteGame(id) {
        return prisma_1.default.game.delete({
            where: { id },
        });
    },
};
