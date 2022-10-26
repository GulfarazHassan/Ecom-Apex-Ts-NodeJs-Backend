"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServicesRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const userServices_controller_1 = __importDefault(require("./controllers/userServices.controller"));
const body_validation_middleware_1 = __importDefault(require("../common/middleware/body.validation.middleware"));
const userServices_middleware_1 = __importDefault(require("./middleware/userServices.middleware"));
const jwt_middleware_1 = __importDefault(require("../auth/middleware/jwt.middleware"));
class UserServicesRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'UserServicesRoutes');
    }
    configureRoutes() {
        this.app
            .route(`/user_services`)
            .get(jwt_middleware_1.default.validJWTNeeded, userServices_controller_1.default.listUserServices)
            .post(jwt_middleware_1.default.validJWTNeeded, body_validation_middleware_1.default.verifyBodyFieldsErrors, userServices_middleware_1.default.validateDocumentsBodyFields, 
        // UserServicesMiddleware.validateSameDocumentTitleDoesntExist,
        userServices_controller_1.default.createUserServices);
        // this.app.param(`user_service_id`, documentsSectionMiddleware.extractuser_service_id);
        this.app
            .route(`/user_services/:user_service_id`)
            .all(userServices_middleware_1.default.validateUserExists, jwt_middleware_1.default.validJWTNeeded)
            .get(userServices_controller_1.default.getUserServicesById)
            .delete(userServices_middleware_1.default.validateUserExists, userServices_controller_1.default.removeUserServices);
        this.app.param(`user_service_id`, userServices_middleware_1.default.validateUserExists);
        this.app.put(`/user_services/:user_service_id`, [
            body_validation_middleware_1.default.verifyBodyFieldsErrors,
            userServices_middleware_1.default.validateDocumentsBodyFields,
            userServices_controller_1.default.put,
        ]);
        return this.app;
    }
}
exports.UserServicesRoutes = UserServicesRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlclNlcnZpY2VzLnJvdXRlcy5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvVXNlclNlcnZpY2VzL3VzZXJTZXJ2aWNlcy5yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLHlFQUFvRTtBQUNwRSxvR0FBMkU7QUFDM0UsaUhBQXVGO0FBQ3ZGLG1HQUEwRTtBQUMxRSx1RkFBOEQ7QUFFOUQsTUFBYSxrQkFBbUIsU0FBUSx5Q0FBa0I7SUFDeEQsWUFBWSxHQUF3QjtRQUNsQyxLQUFLLENBQUMsR0FBRyxFQUFFLG9CQUFvQixDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsR0FBRzthQUNQLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQzthQUN2QixHQUFHLENBQ0Ysd0JBQWEsQ0FBQyxjQUFjLEVBQUMsaUNBQXNCLENBQUMsZ0JBQWdCLENBQUM7YUFDdEUsSUFBSSxDQUNILHdCQUFhLENBQUMsY0FBYyxFQUM1QixvQ0FBd0IsQ0FBQyxzQkFBc0IsRUFDL0MsaUNBQXNCLENBQUMsMkJBQTJCO1FBQ2xELCtEQUErRDtRQUMvRCxpQ0FBc0IsQ0FBQyxrQkFBa0IsQ0FDMUMsQ0FBQztRQUVGLHdGQUF3RjtRQUN4RixJQUFJLENBQUMsR0FBRzthQUNMLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQzthQUN4QyxHQUFHLENBQUMsaUNBQXNCLENBQUMsa0JBQWtCLEVBQUUsd0JBQWEsQ0FBQyxjQUFjLENBQUM7YUFDNUUsR0FBRyxDQUFDLGlDQUFzQixDQUFDLG1CQUFtQixDQUFDO2FBQy9DLE1BQU0sQ0FBQyxpQ0FBc0IsQ0FBQyxrQkFBa0IsRUFDL0MsaUNBQXNCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUUvQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxpQ0FBc0IsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQzdFLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxFQUFFO1lBQzlDLG9DQUF3QixDQUFDLHNCQUFzQjtZQUMvQyxpQ0FBc0IsQ0FBQywyQkFBMkI7WUFDbEQsaUNBQXNCLENBQUMsR0FBRztTQUMzQixDQUFDLENBQUM7UUFHSCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDbEIsQ0FBQztDQUNGO0FBcENELGdEQW9DQyJ9