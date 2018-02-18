"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var bootstrapsLoader_1 = require("./bootstrapsLoader");
var Sequelize = require('sequelize');
var env = process.env.NODE_ENV || 'development';
var config = require('../../config/connection.json')[env];
var Op = Sequelize.Op;
var ts_sequelize_models_1 = require("ts-sequelize-models");
var modelConfig = require('../../config/models')['models'];
var modelsBootstrapper = (function (_super) {
    __extends(modelsBootstrapper, _super);
    function modelsBootstrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    modelsBootstrapper.prototype.runBootstrap = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, sequelize, models;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.initializeSequilize();
                        return [4, ts_sequelize_models_1.sequelizeInit(this.sequelize, './api/models/', {
                                exposeGlobal: true,
                                sync: {
                                    alter: modelConfig.alter,
                                    force: modelConfig.force
                                }
                            })];
                    case 1:
                        _a = _b.sent(), sequelize = _a.sequelize, models = _a.models;
                        return [2, sequelize];
                }
            });
        });
    };
    modelsBootstrapper.prototype.initializeSequilize = function () {
        var localConnection = null;
        var log = false;
        try {
            localConnection = require('../../config/local.js').connection;
            log = require('../../config/local.js').log;
        }
        catch (err) {
        }
        if (env === 'development' && localConnection)
            config = localConnection;
        var sequelize = null;
        if (config.use_env_variable) {
            config['logging'] = log;
            config['operatorsAliases'] = Op;
            this.sequelize = new Sequelize(process.env[config.use_env_variable], config);
        }
        else {
            config['logging'] = log;
            config['operatorsAliases'] = Op;
            this.sequelize = new Sequelize(config.database, config.username, config.password, config);
        }
        return sequelize;
    };
    return modelsBootstrapper;
}(bootstrapsLoader_1.bootstrapsLoader));
exports.modelsBootstrapper = modelsBootstrapper;
//# sourceMappingURL=modelsBootstrapper.js.map