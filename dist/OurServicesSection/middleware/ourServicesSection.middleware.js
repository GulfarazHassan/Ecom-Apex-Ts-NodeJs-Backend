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
const ourServicesSection_service_1 = __importDefault(require("../services/ourServicesSection.service"));
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)('app:ourService-controller');
class OurServiceMiddleware {
    validateRequiredOurServiceBodyFields(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            if (req.body && req.body.title && req.body.subtitle) {
                next();
            }
            else {
                res.status(400).send({
                    error: `Missing required fields title and subtile`,
                });
            }
        });
    }
    validateSameServiceTitleDoesntExist(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const title = yield ourServicesSection_service_1.default.getServiceTitleByName(req.body.title);
            if (title) {
                res.status(400).send({ error: `title already exists` });
            }
            else {
                next();
            }
        });
    }
    validateUserExists(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const service = yield ourServicesSection_service_1.default.readById(req.params.serviceId);
            if (service) {
                res.locals.serviceId = service;
                // console.log('service middleware', service);
                next();
            }
            else {
                res.status(404).send({
                    error: `Service having ${req.params.serviceId} is not found`,
                });
            }
        });
    }
    extractServiceId(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            log(yield ourServicesSection_service_1.default.readById(req.params.serviceId));
            next();
        });
    }
}
exports.default = new OurServiceMiddleware();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3VyU2VydmljZXNTZWN0aW9uLm1pZGRsZXdhcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvT3VyU2VydmljZXNTZWN0aW9uL21pZGRsZXdhcmUvb3VyU2VydmljZXNTZWN0aW9uLm1pZGRsZXdhcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSx3R0FBK0U7QUFDL0Usa0RBQTBCO0FBRTFCLE1BQU0sR0FBRyxHQUFvQixJQUFBLGVBQUssRUFBQywyQkFBMkIsQ0FBQyxDQUFDO0FBQ2hFLE1BQU0sb0JBQW9CO0lBQ2xCLG9DQUFvQyxDQUN4QyxHQUFvQixFQUNwQixHQUFxQixFQUNyQixJQUEwQjs7WUFFMUIsSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNuRCxJQUFJLEVBQUUsQ0FBQzthQUNSO2lCQUFNO2dCQUNMLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUNuQixLQUFLLEVBQUUsMkNBQTJDO2lCQUNuRCxDQUFDLENBQUM7YUFDSjtRQUNILENBQUM7S0FBQTtJQUVLLG1DQUFtQyxDQUN2QyxHQUFvQixFQUNwQixHQUFxQixFQUNyQixJQUEwQjs7WUFFMUIsTUFBTSxLQUFLLEdBQUcsTUFBTSxvQ0FBeUIsQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3BGLElBQUksS0FBSyxFQUFFO2dCQUNULEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLHNCQUFzQixFQUFFLENBQUMsQ0FBQzthQUN6RDtpQkFBTTtnQkFDTCxJQUFJLEVBQUUsQ0FBQzthQUNSO1FBQ0gsQ0FBQztLQUFBO0lBSUssa0JBQWtCLENBQ3RCLEdBQW9CLEVBQ3BCLEdBQXFCLEVBQ3JCLElBQTBCOztZQUUxQixNQUFNLE9BQU8sR0FBRyxNQUFNLG9DQUF5QixDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBRS9FLElBQUksT0FBTyxFQUFFO2dCQUNYLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztnQkFDakMsOENBQThDO2dCQUU1QyxJQUFJLEVBQUUsQ0FBQzthQUNSO2lCQUFNO2dCQUNMLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUNuQixLQUFLLEVBQUUsa0JBQWtCLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxlQUFlO2lCQUM3RCxDQUFDLENBQUM7YUFDSjtRQUNILENBQUM7S0FBQTtJQUVLLGdCQUFnQixDQUNwQixHQUFvQixFQUNwQixHQUFxQixFQUNyQixJQUEwQjs7WUFFM0IsR0FBRyxDQUFFLE1BQU0sb0NBQXlCLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNwRSxJQUFJLEVBQUUsQ0FBQztRQUNULENBQUM7S0FBQTtDQWtCRjtBQUVELGtCQUFlLElBQUksb0JBQW9CLEVBQUUsQ0FBQyJ9