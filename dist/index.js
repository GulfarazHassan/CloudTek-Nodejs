"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const db_1 = __importDefault(require("./config/db"));
db_1.default();
const PORT = process.env.PORT || 8080;
app_1.default.listen(PORT, () => {
    console.log('app is running on port ', PORT);
});
//# sourceMappingURL=index.js.map