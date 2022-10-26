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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const debug_1 = __importDefault(require("debug"));
const cartSection_service_1 = __importDefault(require("../services/cartSection.service"));
const log = (0, debug_1.default)('app:carts-controller');
class CartSectionsController {
    constructor() { }
    createCart(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // this is worong///
            const { service_id } = res.locals.jwt;
            const doc = yield cartSection_service_1.default.create(req.body, service_id);
            res.status(201).send(doc['_id']);
        });
    }
    listCart(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const cart = yield cartSection_service_1.default.list(100, 0);
            res.status(200).send(cart);
        });
    }
    getCartById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const cart = yield cartSection_service_1.default.readById(req.body.id);
            res.status(200).send(cart);
        });
    }
    removeCart(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const cart = log(yield cartSection_service_1.default.deleteById(req.body.id));
            res.status(200).send({
                message: "Document Deleted",
                cart
            });
        });
    }
    put(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // this is worong///
            const { cartId } = res.locals.jwt;
            const updateData = yield cartSection_service_1.default.putById(cartId, req.body);
            res.status(200).send({
                message: 'Service Updated',
                data: updateData,
            });
        });
    }
}
exports.default = new CartSectionsController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydFNlY3Rpb24uY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9DYXJ0U2VjdGlvbi9jb250cm9sbGVycy9jYXJ0U2VjdGlvbi5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esa0RBQTBCO0FBQzFCLDBGQUFpRTtBQUVqRSxNQUFNLEdBQUcsR0FBb0IsSUFBQSxlQUFLLEVBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUMzRCxNQUFNLHNCQUFzQjtJQUMxQixnQkFBZSxDQUFDO0lBRVYsVUFBVSxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQzFELG9CQUFvQjtZQUNwQixNQUFNLEVBQUcsVUFBVSxFQUFFLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFFdkMsTUFBTSxHQUFHLEdBQUcsTUFBTSw2QkFBa0IsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQztZQUNsRSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUUsQ0FBQztRQUNyQyxDQUFDO0tBQUE7SUFFSyxRQUFRLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDeEQsTUFBTSxJQUFJLEdBQUcsTUFBTSw2QkFBa0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ25ELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLENBQUM7S0FBQTtJQUVLLFdBQVcsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUMzRCxNQUFNLElBQUksR0FBRyxNQUFNLDZCQUFrQixDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzVELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLENBQUM7S0FBQTtJQU1LLFVBQVUsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUMzRCxNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsTUFBTSw2QkFBa0IsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2xFLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNuQixPQUFPLEVBQUUsa0JBQWtCO2dCQUMzQixJQUFJO2FBR1AsQ0FBQyxDQUFDO1FBQ0gsQ0FBQztLQUFBO0lBRUssR0FBRyxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQ25ELG9CQUFvQjtZQUNwQixNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDbEMsTUFBTSxVQUFVLEdBQUcsTUFBTSw2QkFBa0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0RSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FDbEI7Z0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtnQkFDMUIsSUFBSSxFQUFFLFVBQVU7YUFDakIsQ0FDRixDQUFDO1FBQ0osQ0FBQztLQUFBO0NBQ0Y7QUFFRCxrQkFBZSxJQUFJLHNCQUFzQixFQUFFLENBQUMifQ==