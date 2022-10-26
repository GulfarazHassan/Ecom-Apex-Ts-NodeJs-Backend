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
const userServices_dao_1 = __importDefault(require("../daos/userServices.dao"));
class UserServicesService {
    create(resource, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return userServices_dao_1.default.createProfile(resource, userId);
        });
    }
    list(limit, page) {
        return __awaiter(this, void 0, void 0, function* () {
            return userServices_dao_1.default.getAll(limit, page);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return userServices_dao_1.default.removeUserServicesById(id);
        });
    }
    readById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return userServices_dao_1.default.getUserServiceById(id);
        });
    }
    // async getDocumenTitleByName(document_name: string) {
    //   return UserServicesDao.getServiceTitleName(document_name);
    // }
    putById(id, resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return userServices_dao_1.default.UserServiceById(id, resource);
        });
    }
}
exports.default = new UserServicesService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlclNlcnZpY2VzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvVXNlclNlcnZpY2VzL3NlcnZpY2VzL3VzZXJTZXJ2aWNlcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0ZBQXVEO0FBSXZELE1BQU0sbUJBQW1CO0lBQ2pCLE1BQU0sQ0FBQyxRQUFtQixFQUFFLE1BQWM7O1lBQzlDLE9BQU8sMEJBQWUsQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3pELENBQUM7S0FBQTtJQUVLLElBQUksQ0FBQyxLQUFhLEVBQUUsSUFBWTs7WUFDcEMsT0FBTywwQkFBZSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDN0MsQ0FBQztLQUFBO0lBSUssVUFBVSxDQUFDLEVBQVU7O1lBQ3pCLE9BQU8sMEJBQWUsQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNwRCxDQUFDO0tBQUE7SUFFSyxRQUFRLENBQUMsRUFBVTs7WUFDdkIsT0FBTywwQkFBZSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2hELENBQUM7S0FBQTtJQUVELHVEQUF1RDtJQUN2RCwrREFBK0Q7SUFDL0QsSUFBSTtJQUVFLE9BQU8sQ0FBQyxFQUFVLEVBQUUsUUFBbUI7O1lBQzNDLE9BQU8sMEJBQWUsQ0FBQyxlQUFlLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZELENBQUM7S0FBQTtDQUNGO0FBRUQsa0JBQWUsSUFBSSxtQkFBbUIsRUFBRSxDQUFDIn0=