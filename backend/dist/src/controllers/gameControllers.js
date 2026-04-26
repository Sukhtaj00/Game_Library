"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteGame = exports.updateGame = exports.createGame = exports.getGameById = exports.getGames = void 0;
const prisma_1 = __importDefault(require("../prisma"));
// Get all games
const getGames = async (req, res) => {
    try {
        const games = await prisma_1.default.game.findMany();
        res.json(games);
    }
    catch {
        res.status(500).json({ message: "Failed to fetch games" });
    }
};
exports.getGames = getGames;
// Get single game
const getGameById = async (req, res) => {
    const id = Number(req.params.id);
    try {
        const game = await prisma_1.default.game.findUnique({
            where: { id },
        });
        if (!game) {
            return res.status(404).json({ message: "Game not found" });
        }
        res.json(game);
    }
    catch {
        res.status(500).json({ message: "Failed to fetch game" });
    }
};
exports.getGameById = getGameById;
// Create game
const createGame = async (req, res) => {
    const { title, completion } = req.body;
    try {
        const newGame = await prisma_1.default.game.create({
            data: {
                title,
                completion: completion !== null && completion !== void 0 ? completion : 0,
            },
        });
        res.status(201).json(newGame);
    }
    catch {
        res.status(400).json({ message: "Failed to create game" });
    }
};
exports.createGame = createGame;
// Update game (supports partial updates)
const updateGame = async (req, res) => {
    const id = Number(req.params.id);
    const { title, completion } = req.body;
    try {
        const updatedGame = await prisma_1.default.game.update({
            where: { id },
            data: {
                ...(title !== undefined && { title }),
                ...(completion !== undefined && { completion }),
            },
        });
        res.json(updatedGame);
    }
    catch {
        res.status(404).json({ message: "Game not found" });
    }
};
exports.updateGame = updateGame;
// Delete game
const deleteGame = async (req, res) => {
    const id = Number(req.params.id);
    try {
        await prisma_1.default.game.delete({
            where: { id },
        });
        res.json({ message: "Game deleted" });
    }
    catch {
        res.status(404).json({ message: "Game not found" });
    }
};
exports.deleteGame = deleteGame;
