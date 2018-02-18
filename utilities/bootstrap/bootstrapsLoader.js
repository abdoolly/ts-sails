"use strict";
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
var glob = require("glob");
var bluebird = require("bluebird");
var bootstrapsLoader = (function () {
    function bootstrapsLoader() {
    }
    bootstrapsLoader.loadBootsrappers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var self;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = new this();
                        return [4, self.runBootstrap()];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    bootstrapsLoader.prototype.runBootstrap = function () {
        return __awaiter(this, void 0, void 0, function () {
            var globAsync, files, returnObject, _i, files_1, boostrapperPath, path, bootstrapperName, bootstrapperModule, _a, _b, err_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 6, , 7]);
                        globAsync = bluebird.promisify(glob);
                        return [4, globAsync("utilities/bootstrap/*.ts")];
                    case 1:
                        files = _c.sent();
                        returnObject = {};
                        _i = 0, files_1 = files;
                        _c.label = 2;
                    case 2:
                        if (!(_i < files_1.length)) return [3, 5];
                        boostrapperPath = files_1[_i];
                        path = boostrapperPath.split('/');
                        bootstrapperName = (path[path.length - 1]).slice(0, (path[path.length - 1].length - 3));
                        if (bootstrapperName == 'bootstrapsLoader')
                            return [3, 4];
                        bootstrapperModule = require("./" + bootstrapperName);
                        _a = returnObject;
                        _b = bootstrapperName;
                        return [4, bootstrapperModule[bootstrapperName].loadBootsrappers()];
                    case 3:
                        _a[_b] = _c.sent();
                        _c.label = 4;
                    case 4:
                        _i++;
                        return [3, 2];
                    case 5: return [2, returnObject];
                    case 6:
                        err_1 = _c.sent();
                        console.log(err_1);
                        return [3, 7];
                    case 7: return [2];
                }
            });
        });
    };
    return bootstrapsLoader;
}());
exports.bootstrapsLoader = bootstrapsLoader;
//# sourceMappingURL=bootstrapsLoader.js.map