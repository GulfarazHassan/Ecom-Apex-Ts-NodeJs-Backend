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
const ourServicesSection_dao_1 = __importDefault(require("../daos/ourServicesSection.dao"));
class OurServiceSectionService {
    create(resource, user_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return ourServicesSection_dao_1.default.createProfile(resource, user_id);
        });
    }
    list(limit, page) {
        return __awaiter(this, void 0, void 0, function* () {
            return ourServicesSection_dao_1.default.getAll(limit, page);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return ourServicesSection_dao_1.default.removeServiceById(id);
        });
    }
    readById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return ourServicesSection_dao_1.default.getServiceById(id);
        });
    }
    getServiceTitleByName(title) {
        return __awaiter(this, void 0, void 0, function* () {
            return ourServicesSection_dao_1.default.getServiceTitleName(title);
        });
    }
    putById(id, resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return ourServicesSection_dao_1.default.updateUserById(id, resource);
        });
    }
}
exports.default = new OurServiceSectionService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3VyU2VydmljZXNTZWN0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvT3VyU2VydmljZXNTZWN0aW9uL3NlcnZpY2VzL291clNlcnZpY2VzU2VjdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNEZBQW1FO0FBSW5FLE1BQU0sd0JBQXdCO0lBQ3RCLE1BQU0sQ0FBQyxRQUFtQixFQUFFLE9BQWU7O1lBQy9DLE9BQU8sZ0NBQXFCLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNoRSxDQUFDO0tBQUE7SUFFSyxJQUFJLENBQUMsS0FBYSxFQUFFLElBQVk7O1lBQ3BDLE9BQU8sZ0NBQXFCLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNuRCxDQUFDO0tBQUE7SUFJSyxVQUFVLENBQUMsRUFBVTs7WUFDekIsT0FBTyxnQ0FBcUIsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNyRCxDQUFDO0tBQUE7SUFFSyxRQUFRLENBQUMsRUFBVTs7WUFDdkIsT0FBTyxnQ0FBcUIsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbEQsQ0FBQztLQUFBO0lBRUsscUJBQXFCLENBQUMsS0FBYTs7WUFDdkMsT0FBTyxnQ0FBcUIsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxRCxDQUFDO0tBQUE7SUFFSyxPQUFPLENBQUMsRUFBVSxFQUFFLFFBQW1COztZQUMzQyxPQUFPLGdDQUFxQixDQUFDLGNBQWMsQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDNUQsQ0FBQztLQUFBO0NBQ0Y7QUFFRCxrQkFBZSxJQUFJLHdCQUF3QixFQUFFLENBQUMifQ==