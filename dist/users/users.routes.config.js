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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91c2Vycy91c2Vycy5yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHlFQUFvRTtBQUNwRSxzRkFBNkQ7QUFDN0QscUZBQTREO0FBRTVELHlEQUF5QztBQUN6QyxpSEFBdUY7QUFDdkYsdUZBQThEO0FBRTlELE1BQWEsV0FBWSxTQUFRLHlDQUFrQjtJQUNqRCxZQUFZLEdBQXdCO1FBQ2xDLEtBQUssQ0FBQyxHQUFHLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsR0FBRzthQUNMLEtBQUssQ0FBQyxRQUFRLENBQUM7YUFDZixHQUFHLENBQUMsd0JBQWEsQ0FBQyxjQUFjLEVBQUUsMEJBQWUsQ0FBQyxTQUFTLENBQUM7YUFDNUQsSUFBSSxDQUNILElBQUEsd0JBQUksRUFBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFDdkIsSUFBQSx3QkFBSSxFQUFDLFVBQVUsQ0FBQzthQUNiLFFBQVEsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQzthQUNwQixXQUFXLENBQUMsdUNBQXVDLENBQUMsRUFDdkQsb0NBQXdCLENBQUMsc0JBQXNCLEVBQy9DLDBCQUFlLENBQUMsNEJBQTRCLEVBQzVDLDBCQUFlLENBQUMsVUFBVSxDQUMzQixDQUFDO1FBRUosSUFBSSxDQUFDLEdBQUc7YUFDTCxLQUFLLENBQUMsbUJBQW1CLENBQUM7YUFDMUIsR0FBRyxDQUFDLHdCQUFhLENBQUMsY0FBYyxFQUFFLDBCQUFlLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFbEUsMkJBQTJCO1FBQzNCLHFEQUFxRDtRQUNyRCx1REFBdUQ7UUFDdkQseUJBQXlCO1FBQ3pCLE1BQU07UUFFTixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUU7WUFDdkIsd0JBQWEsQ0FBQyxjQUFjO1lBQzVCLDBCQUFlLENBQUMsNEJBQTRCO1lBQzVDLDBCQUFlLENBQUMsS0FBSztTQUN0QixDQUFDLENBQUM7UUFFSCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDbEIsQ0FBQztDQUNGO0FBckNELGtDQXFDQyJ9