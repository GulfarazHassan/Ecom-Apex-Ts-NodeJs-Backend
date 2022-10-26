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
const cartSection_dao_1 = __importDefault(require("../daos/cartSection.dao"));
class CartSectionService {
    create(resource, service_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return cartSection_dao_1.default.createProfile(resource, service_id);
        });
    }
    list(limit, page) {
        return __awaiter(this, void 0, void 0, function* () {
            return cartSection_dao_1.default.getAll(limit, page);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return cartSection_dao_1.default.removeCartById(id);
        });
    }
    readById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return cartSection_dao_1.default.getCartById(id);
        });
    }
    // async getDocumenTitleByName(document_name: string) {
    //   return CartSectionDao.getCartTitleName(document_name);
    // }
    putById(id, resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return cartSection_dao_1.default.updateCartById(id, resource);
        });
    }
}
exports.default = new CartSectionService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydFNlY3Rpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9DYXJ0U2VjdGlvbi9zZXJ2aWNlcy9jYXJ0U2VjdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOEVBQXFEO0FBSXJELE1BQU0sa0JBQWtCO0lBQ2hCLE1BQU0sQ0FBQyxRQUFtQixFQUFFLFVBQWtCOztZQUNsRCxPQUFPLHlCQUFjLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUM1RCxDQUFDO0tBQUE7SUFFSyxJQUFJLENBQUMsS0FBYSxFQUFFLElBQVk7O1lBQ3BDLE9BQU8seUJBQWMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVDLENBQUM7S0FBQTtJQUlLLFVBQVUsQ0FBQyxFQUFVOztZQUN6QixPQUFPLHlCQUFjLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzNDLENBQUM7S0FBQTtJQUVLLFFBQVEsQ0FBQyxFQUFVOztZQUN2QixPQUFPLHlCQUFjLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7S0FBQTtJQUVELHVEQUF1RDtJQUN2RCwyREFBMkQ7SUFDM0QsSUFBSTtJQUVFLE9BQU8sQ0FBQyxFQUFVLEVBQUUsUUFBbUI7O1lBQzNDLE9BQU8seUJBQWMsQ0FBQyxjQUFjLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3JELENBQUM7S0FBQTtDQUNGO0FBRUQsa0JBQWUsSUFBSSxrQkFBa0IsRUFBRSxDQUFDIn0=