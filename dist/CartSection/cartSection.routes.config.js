"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartSectionRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const cartSection_controller_1 = __importDefault(require("./controllers/cartSection.controller"));
const body_validation_middleware_1 = __importDefault(require("../common/middleware/body.validation.middleware"));
const cartSection_middleware_1 = __importDefault(require("./middleware/cartSection.middleware"));
const jwt_middleware_1 = __importDefault(require("../auth/middleware/jwt.middleware"));
class CartSectionRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'CartSectionRoutes');
    }
    configureRoutes() {
        this.app
            .route(`/cart`)
            .get(jwt_middleware_1.default.validJWTNeeded, cartSection_controller_1.default.listCart)
            .post(jwt_middleware_1.default.validJWTNeeded, body_validation_middleware_1.default.verifyBodyFieldsErrors, 
        // CartSectionsMiddleware.validateCartBodyFields,
        cartSection_controller_1.default.createCart);
        this.app.param(`cartId`, cartSection_middleware_1.default.extractCartId);
        this.app
            .route(`/cart/:id`)
            .all(cartSection_middleware_1.default.validateCartExists, jwt_middleware_1.default.validJWTNeeded)
            .get(cartSection_controller_1.default.getCartById)
            .delete(cartSection_middleware_1.default.extractCartId, cartSection_controller_1.default.removeCart);
        this.app.param(`cartId`, cartSection_middleware_1.default.extractCartId);
        this.app.put(`/carts/:id`, [
            body_validation_middleware_1.default.verifyBodyFieldsErrors,
            // CartSectionsMiddleware.validateCartBodyFields,
            cartSection_controller_1.default.put,
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
exports.CartSectionRoutes = CartSectionRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydFNlY3Rpb24ucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9DYXJ0U2VjdGlvbi9jYXJ0U2VjdGlvbi5yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLHlFQUFvRTtBQUNwRSxrR0FBMEU7QUFDMUUsaUhBQXVGO0FBQ3ZGLGlHQUF5RTtBQUN6RSx1RkFBOEQ7QUFFOUQsTUFBYSxpQkFBa0IsU0FBUSx5Q0FBa0I7SUFDdkQsWUFBWSxHQUF3QjtRQUNsQyxLQUFLLENBQUMsR0FBRyxFQUFFLG1CQUFtQixDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsR0FBRzthQUNQLEtBQUssQ0FBQyxPQUFPLENBQUM7YUFDZCxHQUFHLENBQ0Ysd0JBQWEsQ0FBQyxjQUFjLEVBQUMsZ0NBQXNCLENBQUMsUUFBUSxDQUFDO2FBQzlELElBQUksQ0FDSCx3QkFBYSxDQUFDLGNBQWMsRUFDNUIsb0NBQXdCLENBQUMsc0JBQXNCO1FBQy9DLGlEQUFpRDtRQUNqRCxnQ0FBc0IsQ0FBQyxVQUFVLENBQ2xDLENBQUM7UUFFRixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsZ0NBQXNCLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLEdBQUc7YUFDTCxLQUFLLENBQUMsV0FBVyxDQUFDO2FBQ2xCLEdBQUcsQ0FBQyxnQ0FBc0IsQ0FBQyxrQkFBa0IsRUFBRSx3QkFBYSxDQUFDLGNBQWMsQ0FBQzthQUM1RSxHQUFHLENBQUMsZ0NBQXNCLENBQUMsV0FBVyxDQUFDO2FBQ3ZDLE1BQU0sQ0FBQyxnQ0FBc0IsQ0FBQyxhQUFhLEVBQzFDLGdDQUFzQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRXZDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxnQ0FBc0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUU7WUFDekIsb0NBQXdCLENBQUMsc0JBQXNCO1lBQy9DLGlEQUFpRDtZQUNqRCxnQ0FBc0IsQ0FBQyxHQUFHO1NBQzNCLENBQUMsQ0FBQztRQUVELHFDQUFxQztRQUNyQyx3Q0FBd0M7UUFDeEMscUJBQXFCO1FBQ3JCLDRCQUE0QjtRQUM1QixxREFBcUQ7UUFDckQsbUJBQW1CO1FBQ25CLDZDQUE2QztRQUM3Qyw0Q0FBNEM7UUFDNUMsZ0RBQWdEO1FBQ2hELHFEQUFxRDtRQUNyRCx3Q0FBd0M7UUFDeEMsMkJBQTJCO1FBQzNCLE1BQU07UUFFUixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDbEIsQ0FBQztDQUNGO0FBaERELDhDQWdEQyJ9