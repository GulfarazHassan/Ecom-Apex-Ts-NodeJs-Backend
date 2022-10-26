"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OurServicesSectionRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const ourServicesSection_controller_1 = __importDefault(require("./controllers/ourServicesSection.controller"));
const body_validation_middleware_1 = __importDefault(require("../common/middleware/body.validation.middleware"));
const ourServicesSection_middleware_1 = __importDefault(require("./middleware/ourServicesSection.middleware"));
const jwt_middleware_1 = __importDefault(require("../auth/middleware/jwt.middleware"));
class OurServicesSectionRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'OurServicesSectionRoutes');
    }
    configureRoutes() {
        this.app
            .route(`/our_services`)
            .get(jwt_middleware_1.default.validJWTNeeded, ourServicesSection_controller_1.default.listUsers)
            .post(jwt_middleware_1.default.validJWTNeeded, body_validation_middleware_1.default.verifyBodyFieldsErrors, ourServicesSection_middleware_1.default.validateRequiredOurServiceBodyFields, ourServicesSection_middleware_1.default.validateSameServiceTitleDoesntExist, ourServicesSection_controller_1.default.createOurService);
        this.app
            .route(`/our_services/:serviceId`)
            .all(ourServicesSection_middleware_1.default.validateUserExists, jwt_middleware_1.default.validJWTNeeded)
            .get(ourServicesSection_controller_1.default.getUserById)
            .delete(ourServicesSection_controller_1.default.removeUser);
        this.app.param(`serviceId`, ourServicesSection_middleware_1.default.validateUserExists);
        this.app.put(`/our_services/:serviceId`, [
            body_validation_middleware_1.default.verifyBodyFieldsErrors,
            ourServicesSection_middleware_1.default.validateRequiredOurServiceBodyFields,
            ourServicesSection_controller_1.default.put,
        ]);
        // this.app.patch(`/users/:userId`, [
        //   body('email').isEmail().optional(),
        //   body('password')
        //     .isLength({ min: 5 })
        //     .withMessage('Password must be 5+ characters')
        //     .optional(),
        //   body('firstName').isString().optional(),
        //   body('lastName').isString().optional(),
        //   body('permissionFlags').isInt().optional(),
        //   BodyValidationMiddleware.verifyBodyFieldsErrors,
        //   UsersMiddleware.validatePatchEmail,
        //   UsersController.patch,
        // ]);
        return this.app;
    }
}
exports.OurServicesSectionRoutes = OurServicesSectionRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3VyU2VydmljZXNTZWN0aW9uLnJvdXRlcy5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvT3VyU2VydmljZXNTZWN0aW9uL291clNlcnZpY2VzU2VjdGlvbi5yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLHlFQUFvRTtBQUNwRSxnSEFBd0Y7QUFDeEYsaUhBQXVGO0FBQ3ZGLCtHQUFzRjtBQUN0Rix1RkFBOEQ7QUFFOUQsTUFBYSx3QkFBeUIsU0FBUSx5Q0FBa0I7SUFDOUQsWUFBWSxHQUF3QjtRQUNsQyxLQUFLLENBQUMsR0FBRyxFQUFFLDBCQUEwQixDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsR0FBRzthQUNMLEtBQUssQ0FBQyxlQUFlLENBQUM7YUFDdEIsR0FBRyxDQUNGLHdCQUFhLENBQUMsY0FBYyxFQUFDLHVDQUE2QixDQUFDLFNBQVMsQ0FBQzthQUN0RSxJQUFJLENBQ0gsd0JBQWEsQ0FBQyxjQUFjLEVBQzVCLG9DQUF3QixDQUFDLHNCQUFzQixFQUMvQyx1Q0FBNEIsQ0FBQyxvQ0FBb0MsRUFDakUsdUNBQTRCLENBQUMsbUNBQW1DLEVBQ2hFLHVDQUE2QixDQUFDLGdCQUFnQixDQUMvQyxDQUFDO1FBRUYsSUFBSSxDQUFDLEdBQUc7YUFDTCxLQUFLLENBQUMsMEJBQTBCLENBQUM7YUFDakMsR0FBRyxDQUFDLHVDQUE0QixDQUFDLGtCQUFrQixFQUFFLHdCQUFhLENBQUMsY0FBYyxDQUFDO2FBQ2xGLEdBQUcsQ0FBQyx1Q0FBNkIsQ0FBQyxXQUFXLENBQUM7YUFDOUMsTUFBTSxDQUFDLHVDQUE2QixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRXBELElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSx1Q0FBNEIsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQzdFLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLDBCQUEwQixFQUFFO1lBQ3ZDLG9DQUF3QixDQUFDLHNCQUFzQjtZQUMvQyx1Q0FBNEIsQ0FBQyxvQ0FBb0M7WUFDakUsdUNBQTZCLENBQUMsR0FBRztTQUNsQyxDQUFDLENBQUM7UUFFSCxxQ0FBcUM7UUFDckMsd0NBQXdDO1FBQ3hDLHFCQUFxQjtRQUNyQiw0QkFBNEI7UUFDNUIscURBQXFEO1FBQ3JELG1CQUFtQjtRQUNuQiw2Q0FBNkM7UUFDN0MsNENBQTRDO1FBQzVDLGdEQUFnRDtRQUNoRCxxREFBcUQ7UUFDckQsd0NBQXdDO1FBQ3hDLDJCQUEyQjtRQUMzQixNQUFNO1FBRVIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2xCLENBQUM7Q0FDRjtBQS9DRCw0REErQ0MifQ==