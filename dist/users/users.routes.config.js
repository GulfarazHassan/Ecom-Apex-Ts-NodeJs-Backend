"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const users_controller_1 = __importDefault(require("./controllers/users.controller"));
const users_middleware_1 = __importDefault(require("./middleware/users.middleware"));
const express_validator_1 = require("express-validator");
const body_validation_middleware_1 = __importDefault(require("../common/middleware/body.validation.middleware"));
const jwt_middleware_1 = __importDefault(require("../auth/middleware/jwt.middleware"));
class UsersRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'UsersRoutes');
    }
    configureRoutes() {
        this.app
            .route(`/users`)
            .get(jwt_middleware_1.default.validJWTNeeded, users_controller_1.default.listUsers)
            .post((0, express_validator_1.body)('email').isEmail(), (0, express_validator_1.body)('password')
            .isLength({ min: 5 })
            .withMessage('Must include password (5+ characters)'), body_validation_middleware_1.default.verifyBodyFieldsErrors, users_middleware_1.default.validateSameEmailDoesntExist, users_controller_1.default.createUser);
        this.app
            .route(`/users/my_profile`)
            .get(jwt_middleware_1.default.validJWTNeeded, users_controller_1.default.getUserById);
        // this.app.put(`/users`, [
        //   BodyValidationMiddleware.verifyBodyFieldsErrors,
        //   UsersMiddleware.validateSameEmailBelongToSameUser,
        //   UsersController.put,
        // ]);
        this.app.patch(`/users`, [
            jwt_middleware_1.default.validJWTNeeded,
            users_middleware_1.default.validateSameEmailDoesntExist,
            users_controller_1.default.patch,
        ]);
        return this.app;
    }
}
exports.UsersRoutes = UsersRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3VzZXJzL3VzZXJzLnJvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEseUVBQW9FO0FBQ3BFLHNGQUE2RDtBQUM3RCxxRkFBNEQ7QUFFNUQseURBQXlDO0FBQ3pDLGlIQUF1RjtBQUN2Rix1RkFBOEQ7QUFFOUQsTUFBYSxXQUFZLFNBQVEseUNBQWtCO0lBQ2pELFlBQVksR0FBd0I7UUFDbEMsS0FBSyxDQUFDLEdBQUcsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxHQUFHO2FBQ0wsS0FBSyxDQUFDLFFBQVEsQ0FBQzthQUNmLEdBQUcsQ0FBQyx3QkFBYSxDQUFDLGNBQWMsRUFBRSwwQkFBZSxDQUFDLFNBQVMsQ0FBQzthQUM1RCxJQUFJLENBQ0gsSUFBQSx3QkFBSSxFQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUN2QixJQUFBLHdCQUFJLEVBQUMsVUFBVSxDQUFDO2FBQ2IsUUFBUSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDO2FBQ3BCLFdBQVcsQ0FBQyx1Q0FBdUMsQ0FBQyxFQUN2RCxvQ0FBd0IsQ0FBQyxzQkFBc0IsRUFDL0MsMEJBQWUsQ0FBQyw0QkFBNEIsRUFDNUMsMEJBQWUsQ0FBQyxVQUFVLENBQzNCLENBQUM7UUFFSixJQUFJLENBQUMsR0FBRzthQUNMLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQzthQUMxQixHQUFHLENBQUMsd0JBQWEsQ0FBQyxjQUFjLEVBQUUsMEJBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUVsRSwyQkFBMkI7UUFDM0IscURBQXFEO1FBQ3JELHVEQUF1RDtRQUN2RCx5QkFBeUI7UUFDekIsTUFBTTtRQUVOLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRTtZQUN2Qix3QkFBYSxDQUFDLGNBQWM7WUFDNUIsMEJBQWUsQ0FBQyw0QkFBNEI7WUFDNUMsMEJBQWUsQ0FBQyxLQUFLO1NBQ3RCLENBQUMsQ0FBQztRQUVILE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNsQixDQUFDO0NBQ0Y7QUFyQ0Qsa0NBcUNDIn0=