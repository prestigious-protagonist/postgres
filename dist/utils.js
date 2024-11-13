"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClient = void 0;
const pg_1 = require("pg");
const getClient = () => __awaiter(void 0, void 0, void 0, function* () {
    const client = new pg_1.Client('postgresql://neondb_owner:NXfhZk6MelP1@ep-sweet-recipe-a5twohws.us-east-2.aws.neon.tech/neondb?sslmode=require');
    yield client.connect();
    return client;
});
exports.getClient = getClient;
