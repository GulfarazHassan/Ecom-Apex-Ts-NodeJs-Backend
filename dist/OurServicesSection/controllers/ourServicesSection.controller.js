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
const ourServicesSection_service_1 = __importDefault(require("../services/ourServicesSection.service"));
const log = (0, debug_1.default)('app:users-controller');
class OurServicesSectionsController {
    constructor() { }
    createOurService(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { user_id } = res.locals.jwt;
            const user = yield ourServicesSection_service_1.default.create(req.body, user_id);
            res.status(201).send(user['_id']);
        });
    }
    listUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield ourServicesSection_service_1.default.list(100, 0);
            res.status(200).send(users);
        });
    }
    getUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield ourServicesSection_service_1.default.readById(req.params.serviceId);
            res.status(200).send(user);
        });
    }
    removeUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            log(yield ourServicesSection_service_1.default.deleteById(req.params.serviceId));
            res.status(204).send({ message: "Data Deleted" });
        });
    }
    put(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const serviceId = req.params.serviceId;
            const updateData = yield ourServicesSection_service_1.default.putById(serviceId, req.body);
            res.status(200).send({
                message: 'Service Updated',
                data: updateData,
            });
        });
    }
}
exports.default = new OurServicesSectionsController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3VyU2VydmljZXNTZWN0aW9uLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvT3VyU2VydmljZXNTZWN0aW9uL2NvbnRyb2xsZXJzL291clNlcnZpY2VzU2VjdGlvbi5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esa0RBQTBCO0FBQzFCLHdHQUErRTtBQUUvRSxNQUFNLEdBQUcsR0FBb0IsSUFBQSxlQUFLLEVBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUMzRCxNQUFNLDZCQUE2QjtJQUNqQyxnQkFBZSxDQUFDO0lBRVYsZ0JBQWdCLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDaEUsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO1lBRW5DLE1BQU0sSUFBSSxHQUFHLE1BQU0sb0NBQXlCLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDdkUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFFLENBQUM7UUFDdEMsQ0FBQztLQUFBO0lBRUssU0FBUyxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQ3pELE1BQU0sS0FBSyxHQUFHLE1BQU0sb0NBQXlCLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMzRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QixDQUFDO0tBQUE7SUFFSyxXQUFXLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDM0QsTUFBTSxJQUFJLEdBQUcsTUFBTSxvQ0FBeUIsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM1RSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixDQUFDO0tBQUE7SUFNSyxVQUFVLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDMUQsR0FBRyxDQUFDLE1BQU0sb0NBQXlCLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUN0RSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLE9BQU8sRUFBRSxjQUFjLEVBQUMsQ0FBQyxDQUFDO1FBQ2xELENBQUM7S0FBQTtJQUVLLEdBQUcsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUNuRCxNQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztZQUN2QyxNQUFNLFVBQVUsR0FBRyxNQUFNLG9DQUF5QixDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hGLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUNsQjtnQkFDRSxPQUFPLEVBQUUsaUJBQWlCO2dCQUMxQixJQUFJLEVBQUUsVUFBVTthQUNqQixDQUNGLENBQUM7UUFDSixDQUFDO0tBQUE7Q0FDRjtBQUVELGtCQUFlLElBQUksNkJBQTZCLEVBQUUsQ0FBQyJ9