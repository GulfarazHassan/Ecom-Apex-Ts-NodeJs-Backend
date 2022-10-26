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
const cartSection_service_1 = __importDefault(require("../services/cartSection.service"));
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)('app:ourService-controller');
class CartSectionsMiddleware {
    // async validateCartBodyFields(
    //   req: express.Request,
    //   res: express.Response,
    //   next: express.NextFunction
    // ) {
    //   if (req.body && req.body.document_name && req.body.document_path) {
    //     next();
    //   } else {
    //     res.status(400).send({
    //       error: `Missing required fields title and subtile`,
    //     });
    //   }
    // }
    // async validateSameDocumentTitleDoesntExist(
    //   req: express.Request,
    //   res: express.Response,
    //   next: express.NextFunction
    // ) {
    //   const title = await ourServicesSectionService.getDocumenTitleByName(req.body.document_name);
    //   if (title) {
    //     res.status(400).send({ error: `document Name already exists` });
    //   } else {
    //     next();
    //   }
    // }
    validateCartExists(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const cart = yield cartSection_service_1.default.readById(req.params.serviceId);
            if (cart) {
                res.locals.cart = cart;
                next();
            }
            else {
                res.status(404).send({
                    error: `cart ${req.params.cartId} not found`,
                });
            }
        });
    }
    extractCartId(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            req.body.id = req.params.cartId;
            next();
        });
    }
}
exports.default = new CartSectionsMiddleware();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydFNlY3Rpb24ubWlkZGxld2FyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9DYXJ0U2VjdGlvbi9taWRkbGV3YXJlL2NhcnRTZWN0aW9uLm1pZGRsZXdhcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSwwRkFBd0U7QUFDeEUsa0RBQTBCO0FBRTFCLE1BQU0sR0FBRyxHQUFvQixJQUFBLGVBQUssRUFBQywyQkFBMkIsQ0FBQyxDQUFDO0FBQ2hFLE1BQU0sc0JBQXNCO0lBQzFCLGdDQUFnQztJQUNoQywwQkFBMEI7SUFDMUIsMkJBQTJCO0lBQzNCLCtCQUErQjtJQUMvQixNQUFNO0lBQ04sd0VBQXdFO0lBQ3hFLGNBQWM7SUFDZCxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLDREQUE0RDtJQUM1RCxVQUFVO0lBQ1YsTUFBTTtJQUNOLElBQUk7SUFFSiw4Q0FBOEM7SUFDOUMsMEJBQTBCO0lBQzFCLDJCQUEyQjtJQUMzQiwrQkFBK0I7SUFDL0IsTUFBTTtJQUNOLGlHQUFpRztJQUNqRyxpQkFBaUI7SUFDakIsdUVBQXVFO0lBQ3ZFLGFBQWE7SUFDYixjQUFjO0lBQ2QsTUFBTTtJQUNOLElBQUk7SUFJRSxrQkFBa0IsQ0FDdEIsR0FBb0IsRUFDcEIsR0FBcUIsRUFDckIsSUFBMEI7O1lBRTFCLE1BQU0sSUFBSSxHQUFHLE1BQU0sNkJBQXlCLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDNUUsSUFBSSxJQUFJLEVBQUU7Z0JBQ1IsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2dCQUN2QixJQUFJLEVBQUUsQ0FBQzthQUNSO2lCQUFNO2dCQUNMLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUNuQixLQUFLLEVBQUUsUUFBUSxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sWUFBWTtpQkFDN0MsQ0FBQyxDQUFDO2FBQ0o7UUFDSCxDQUFDO0tBQUE7SUFFSyxhQUFhLENBQ2pCLEdBQW9CLEVBQ3BCLEdBQXFCLEVBQ3JCLElBQTBCOztZQUUxQixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUNoQyxJQUFJLEVBQUUsQ0FBQztRQUNULENBQUM7S0FBQTtDQUdGO0FBRUQsa0JBQWUsSUFBSSxzQkFBc0IsRUFBRSxDQUFDIn0=