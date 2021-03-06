"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParticipantesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ParticipantesService = class ParticipantesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        var _a;
        const filmes = (_a = data.filmes) === null || _a === void 0 ? void 0 : _a.map((filme) => ({
            id: filme,
        }));
        return this.prisma.participante.create({
            data: Object.assign(Object.assign({}, data), { filmes: {
                    connect: filmes,
                } }),
        });
    }
    async findAll() {
        return this.prisma.participante.findMany();
    }
    async findOne(participanteId) {
        return this.prisma.participante.findUnique({
            where: {
                id: participanteId,
            },
            include: {
                filmes: true,
            },
        });
    }
    async update(id, data) {
        var _a;
        const filmes = (_a = data.filmes) === null || _a === void 0 ? void 0 : _a.map((filme) => ({
            id: filme,
        }));
        return await this.prisma.participante.update({
            data: Object.assign(Object.assign({}, data), { filmes: {
                    connect: filmes,
                } }),
            where: { id },
        });
    }
    async deleteOne(where) {
        return this.prisma.participante.delete({ where });
    }
    async deleteAll() {
        return this.prisma.participante.deleteMany();
    }
};
ParticipantesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ParticipantesService);
exports.ParticipantesService = ParticipantesService;
//# sourceMappingURL=participantes.service.js.map