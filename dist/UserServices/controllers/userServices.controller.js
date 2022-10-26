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
const userServices_service_1 = __importDefault(require("../services/userServices.service"));
const log = (0, debug_1.default)('app:docs-controller');
class UserServicesController {
    constructor() { }
    createUserServices(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { user_id } = res.locals.jwt;
            const userServices = yield userServices_service_1.default.create(req.body, user_id);
            res.status(201).send(userServices['_id']);
        });
    }
    listUserServices(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userServices = yield userServices_service_1.default.list(100, 0);
            res.status(200).send(userServices);
        });
    }
    getUserServicesById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const doc = yield userServices_service_1.default.readById(req.params.user_service_id);
            res.status(200).send(doc);
        });
    }
    removeUserServices(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userServices = log(yield userServices_service_1.default.deleteById(req.params.user_service_id));
            res.status(200).send({
                message: "User Services Deleted",
                userServices
            });
        });
    }
    put(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const updateData = yield userServices_service_1.default.putById(req.params.user_service_id, req.body);
            res.status(200).send({
                message: 'Service Updated',
                data: updateData,
            });
        });
    }
}
exports.default = new UserServicesController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlclNlcnZpY2VzLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvVXNlclNlcnZpY2VzL2NvbnRyb2xsZXJzL3VzZXJTZXJ2aWNlcy5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esa0RBQTBCO0FBQzFCLDRGQUFtRTtBQUVuRSxNQUFNLEdBQUcsR0FBb0IsSUFBQSxlQUFLLEVBQUMscUJBQXFCLENBQUMsQ0FBQztBQUMxRCxNQUFNLHNCQUFzQjtJQUMxQixnQkFBZSxDQUFDO0lBRVYsa0JBQWtCLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDbEUsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO1lBQ25DLE1BQU0sWUFBWSxHQUFHLE1BQU0sOEJBQW1CLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDekUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUUsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFFLENBQUM7UUFDOUMsQ0FBQztLQUFBO0lBRUssZ0JBQWdCLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDaEUsTUFBTSxZQUFZLEdBQUcsTUFBTSw4QkFBbUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzVELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3JDLENBQUM7S0FBQTtJQUVLLG1CQUFtQixDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQ25FLE1BQU0sR0FBRyxHQUFHLE1BQU0sOEJBQW1CLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDM0UsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUIsQ0FBQztLQUFBO0lBTUssa0JBQWtCLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDbkUsTUFBTSxZQUFZLEdBQUcsR0FBRyxDQUFDLE1BQU0sOEJBQW1CLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztZQUMxRixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDbkIsT0FBTyxFQUFFLHVCQUF1QjtnQkFDaEMsWUFBWTthQUdmLENBQUMsQ0FBQztRQUNILENBQUM7S0FBQTtJQUVLLEdBQUcsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUluRCxNQUFNLFVBQVUsR0FBRyxNQUFNLDhCQUFtQixDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0YsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQ2xCO2dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7Z0JBQzFCLElBQUksRUFBRSxVQUFVO2FBQ2pCLENBQ0YsQ0FBQztRQUNKLENBQUM7S0FBQTtDQUNGO0FBRUQsa0JBQWUsSUFBSSxzQkFBc0IsRUFBRSxDQUFDIn0=