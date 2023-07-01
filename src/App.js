"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var react_1 = __importStar(require("react"));
var Table = function () {
    var numberRefs1 = [(0, react_1.useRef)(null), (0, react_1.useRef)(null), (0, react_1.useRef)(null)];
    var numberRefs2 = [(0, react_1.useRef)(null), (0, react_1.useRef)(null), (0, react_1.useRef)(null)];
    var numberRefs3 = [(0, react_1.useRef)(null), (0, react_1.useRef)(null), (0, react_1.useRef)(null)];
    var numberRefs4 = [(0, react_1.useRef)(null), (0, react_1.useRef)(null), (0, react_1.useRef)(null)];
    var numberRefs5 = [(0, react_1.useRef)(null), (0, react_1.useRef)(null), (0, react_1.useRef)(null)];
    var numberRefs6 = [(0, react_1.useRef)(null), (0, react_1.useRef)(null), (0, react_1.useRef)(null)];
    var colorMinNumber = function (refw) {
        var _a, _b, _c;
        var numbers = [
            ((_a = refw[0].current) === null || _a === void 0 ? void 0 : _a.innerText) || "0",
            ((_b = refw[1].current) === null || _b === void 0 ? void 0 : _b.innerText) || "0",
            ((_c = refw[2].current) === null || _c === void 0 ? void 0 : _c.innerText) || "0"
        ];
        var minValue = numbers.reduce(function (min, num) { return (num < min ? num : min); });
        refw.forEach(function (ref) {
            if (ref.current) {
                // console.log(ref.current.innerText);
                // console.log(minValue);
                if (ref.current.innerText === minValue) {
                    ref.current.classList.add('color');
                }
                else {
                    ref.current.classList.remove('color');
                }
            }
        });
    };
    var fetchData = function () { return __awaiter(void 0, void 0, void 0, function () {
        var requests, responses, index, response, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 7, , 8]);
                    requests = [
                        fetch('http://localhost:3000/api/v1/first'),
                        fetch('http://localhost:3000/api/v1/second'),
                        fetch('http://localhost:3000/api/v1/third')
                    ];
                    return [4 /*yield*/, Promise.all(requests)];
                case 1:
                    responses = _a.sent();
                    index = 0;
                    _a.label = 2;
                case 2:
                    if (!(index < responses.length)) return [3 /*break*/, 6];
                    response = responses[index];
                    if (!response.ok) return [3 /*break*/, 4];
                    return [4 /*yield*/, response.json()];
                case 3:
                    data = _a.sent();
                    numberRefs1[index].current.innerText = data.rates.RUB;
                    numberRefs2[index].current.innerText = data.rates.USD;
                    numberRefs3[index].current.innerText = data.rates.EUR;
                    numberRefs4[index].current.innerText = String(data.rates.RUB / data.rates.USD);
                    numberRefs5[index].current.innerText = String(data.rates.RUB / data.rates.EUR);
                    numberRefs6[index].current.innerText = String(data.rates.EUR / data.rates.USD);
                    return [3 /*break*/, 5];
                case 4:
                    console.error("Ошибка получения данных c индексом");
                    _a.label = 5;
                case 5:
                    index++;
                    return [3 /*break*/, 2];
                case 6:
                    colorMinNumber(numberRefs1);
                    colorMinNumber(numberRefs2);
                    colorMinNumber(numberRefs3);
                    colorMinNumber(numberRefs4);
                    colorMinNumber(numberRefs5);
                    colorMinNumber(numberRefs6);
                    return [3 /*break*/, 8];
                case 7:
                    error_1 = _a.sent();
                    console.error('Ошибка получения данных:', error_1);
                    return [3 /*break*/, 8];
                case 8: return [2 /*return*/];
            }
        });
    }); };
    var pollData = function () { return __awaiter(void 0, void 0, void 0, function () {
        var requests, responses, index, response, data, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 7, , 8]);
                    requests = [
                        fetch('http://localhost:3000/api/v1/first/poll'),
                        fetch('http://localhost:3000/api/v1/second/poll'),
                        fetch('http://localhost:3000/api/v1/third/poll')
                    ];
                    return [4 /*yield*/, Promise.all(requests)];
                case 1:
                    responses = _a.sent();
                    index = 0;
                    _a.label = 2;
                case 2:
                    if (!(index < responses.length)) return [3 /*break*/, 6];
                    response = responses[index];
                    if (!response.ok) return [3 /*break*/, 4];
                    return [4 /*yield*/, response.json()];
                case 3:
                    data = _a.sent();
                    console.log(data);
                    numberRefs1[index].current.innerText = data.rates.RUB;
                    numberRefs2[index].current.innerText = data.rates.USD;
                    numberRefs3[index].current.innerText = data.rates.EUR;
                    numberRefs4[index].current.innerText = String(data.rates.RUB / data.rates.USD);
                    numberRefs5[index].current.innerText = String(data.rates.RUB / data.rates.EUR);
                    numberRefs6[index].current.innerText = String(data.rates.EUR / data.rates.USD);
                    return [3 /*break*/, 5];
                case 4:
                    console.error("Ошибка получения данных c индексом");
                    _a.label = 5;
                case 5:
                    index++;
                    return [3 /*break*/, 2];
                case 6:
                    colorMinNumber(numberRefs1);
                    colorMinNumber(numberRefs2);
                    colorMinNumber(numberRefs3);
                    colorMinNumber(numberRefs4);
                    colorMinNumber(numberRefs5);
                    colorMinNumber(numberRefs6);
                    pollData();
                    return [3 /*break*/, 8];
                case 7:
                    error_2 = _a.sent();
                    console.error('Ошибка получения данных:', error_2);
                    pollData();
                    return [3 /*break*/, 8];
                case 8: return [2 /*return*/];
            }
        });
    }); };
    (0, react_1.useEffect)(function () {
        fetchData();
        pollData();
    }, []);
    return (react_1.default.createElement("table", null,
        react_1.default.createElement("thead", null,
            react_1.default.createElement("tr", null,
                react_1.default.createElement("th", null, "Pair name/market"),
                react_1.default.createElement("th", null, "First"),
                react_1.default.createElement("th", null, "Second"),
                react_1.default.createElement("th", null, "Third"))),
        react_1.default.createElement("tbody", null,
            react_1.default.createElement("tr", null,
                react_1.default.createElement("th", null, "RUB/CUPCAKE"),
                react_1.default.createElement("td", { ref: numberRefs1[0] }, "1"),
                react_1.default.createElement("td", { ref: numberRefs1[1] }, "1"),
                react_1.default.createElement("td", { ref: numberRefs1[2] }, "1")),
            react_1.default.createElement("tr", null,
                react_1.default.createElement("th", null, "USD/CUPCAKE"),
                react_1.default.createElement("td", { ref: numberRefs2[0] }, "1"),
                react_1.default.createElement("td", { ref: numberRefs2[1] }, "1"),
                react_1.default.createElement("td", { ref: numberRefs2[2] }, "1")),
            react_1.default.createElement("tr", null,
                react_1.default.createElement("th", null, "EUR/CUPCAKE"),
                react_1.default.createElement("td", { ref: numberRefs3[0] }, "1"),
                react_1.default.createElement("td", { ref: numberRefs3[1] }, "1"),
                react_1.default.createElement("td", { ref: numberRefs3[2] }, "1")),
            react_1.default.createElement("tr", null,
                react_1.default.createElement("th", null, "RUB/USD"),
                react_1.default.createElement("td", { ref: numberRefs4[0] }, "1"),
                react_1.default.createElement("td", { ref: numberRefs4[1] }, "1"),
                react_1.default.createElement("td", { ref: numberRefs4[2] }, "1")),
            react_1.default.createElement("tr", null,
                react_1.default.createElement("th", null, "RUB/EUR"),
                react_1.default.createElement("td", { ref: numberRefs5[0] }, "1"),
                react_1.default.createElement("td", { ref: numberRefs5[1] }, "1"),
                react_1.default.createElement("td", { ref: numberRefs5[2] }, "1")),
            react_1.default.createElement("tr", null,
                react_1.default.createElement("th", null, "EUR/USD"),
                react_1.default.createElement("td", { ref: numberRefs6[0] }, "1"),
                react_1.default.createElement("td", { ref: numberRefs6[1] }, "1"),
                react_1.default.createElement("td", { ref: numberRefs6[2] }, "1")))));
};
function App() {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(Table, null)));
}
;
exports.default = App;
