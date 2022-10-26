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
const userServices_service_1 = __importDefault(require("../services/userServices.service"));
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)('app:UserServices-controller');
class UserServicesMiddleware {
    validateDocumentsBodyFields(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            if (req.body && req.body.service_id) {
                next();
            }
            else {
                res.status(400).send({
                    error: `Missing required fields service_name`,
                });
            }
        });
    }
    validateUserExists(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield userServices_service_1.default.readById(req.params.user_service_id);
            if (user) {
                // res.locals.user = user;
                next();
            }
            else {
                res.status(404).send({
                    error: `User Services  ${req.params.user_service_id} not found`,
                });
            }
        });
    }
    extractDocumentId(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const user_service = (yield userServices_service_1.default.readById(req.params.user_service_id));
            if (user_service) {
                next();
            }
            else {
                res.status(404).send({
                    error: `User Service ${req.params.user_service_id} not found`,
                });
            }
        });
    }
}
exports.default = new UserServicesMiddleware();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlclNlcnZpY2VzLm1pZGRsZXdhcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvVXNlclNlcnZpY2VzL21pZGRsZXdhcmUvdXNlclNlcnZpY2VzLm1pZGRsZXdhcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSw0RkFBbUU7QUFDbkUsa0RBQTBCO0FBRTFCLE1BQU0sR0FBRyxHQUFvQixJQUFBLGVBQUssRUFBQyw2QkFBNkIsQ0FBQyxDQUFDO0FBQ2xFLE1BQU0sc0JBQXNCO0lBQ3BCLDJCQUEyQixDQUMvQixHQUFvQixFQUNwQixHQUFxQixFQUNyQixJQUEwQjs7WUFFMUIsSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNuQyxJQUFJLEVBQUUsQ0FBQzthQUNSO2lCQUFNO2dCQUNMLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUNuQixLQUFLLEVBQUUsc0NBQXNDO2lCQUM5QyxDQUFDLENBQUM7YUFDSjtRQUNILENBQUM7S0FBQTtJQU1LLGtCQUFrQixDQUN0QixHQUFvQixFQUNwQixHQUFxQixFQUNyQixJQUEwQjs7WUFFMUIsTUFBTSxJQUFJLEdBQUcsTUFBTSw4QkFBbUIsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUM1RSxJQUFJLElBQUksRUFBRTtnQkFDUiwwQkFBMEI7Z0JBQzFCLElBQUksRUFBRSxDQUFDO2FBQ1I7aUJBQU07Z0JBQ0wsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQ25CLEtBQUssRUFBRSxrQkFBa0IsR0FBRyxDQUFDLE1BQU0sQ0FBQyxlQUFlLFlBQVk7aUJBQ2hFLENBQUMsQ0FBQzthQUNKO1FBQ0gsQ0FBQztLQUFBO0lBRUssaUJBQWlCLENBQ3JCLEdBQW9CLEVBQ3BCLEdBQXFCLEVBQ3JCLElBQTBCOztZQUUxQixNQUFNLFlBQVksR0FBRyxDQUFFLE1BQU0sOEJBQW1CLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztZQUN2RixJQUFJLFlBQVksRUFBRTtnQkFDaEIsSUFBSSxFQUFFLENBQUE7YUFDUDtpQkFDSTtnQkFDSCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDbkIsS0FBSyxFQUFFLGdCQUFnQixHQUFHLENBQUMsTUFBTSxDQUFDLGVBQWUsWUFBWTtpQkFDOUQsQ0FBQyxDQUFDO2FBQ0o7UUFDSCxDQUFDO0tBQUE7Q0FHRjtBQUVELGtCQUFlLElBQUksc0JBQXNCLEVBQUUsQ0FBQyJ9