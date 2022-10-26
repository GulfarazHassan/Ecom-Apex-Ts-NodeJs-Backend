"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentsSectionRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const documentsSection_controller_1 = __importDefault(require("./controllers/documentsSection.controller"));
const body_validation_middleware_1 = __importDefault(require("../common/middleware/body.validation.middleware"));
const documentsSection_middleware_1 = __importDefault(require("./middleware/documentsSection.middleware"));
const jwt_middleware_1 = __importDefault(require("../auth/middleware/jwt.middleware"));
class DocumentsSectionRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'DocumentsSectionRoutes');
    }
    configureRoutes() {
        this.app
            .route(`/documents`)
            .get(jwt_middleware_1.default.validJWTNeeded, documentsSection_controller_1.default.listDocs)
            .post(jwt_middleware_1.default.validJWTNeeded, body_validation_middleware_1.default.verifyBodyFieldsErrors, documentsSection_middleware_1.default.validateDocumentsBodyFields, documentsSection_middleware_1.default.validateSameDocumentTitleDoesntExist, documentsSection_controller_1.default.createdocs);
        // this.app.param(`documentId`, documentsSectionMiddleware.extractDocumentId);
        this.app
            .route(`/documents/:documentId`)
            .all(documentsSection_middleware_1.default.validateUserExists, jwt_middleware_1.default.validJWTNeeded)
            .get(documentsSection_controller_1.default.getdocById)
            .delete(documentsSection_middleware_1.default.validateUserExists, documentsSection_controller_1.default.removedoc);
        this.app.param(`documentId`, documentsSection_middleware_1.default.validateUserExists);
        this.app.put(`/documents/:documentId`, [
            body_validation_middleware_1.default.verifyBodyFieldsErrors,
            documentsSection_middleware_1.default.validateDocumentsBodyFields,
            documentsSection_controller_1.default.put,
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
exports.DocumentsSectionRoutes = DocumentsSectionRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnRzU2VjdGlvbi5yb3V0ZXMuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0RvY3VtZW50c1NlY3Rpb24vZG9jdW1lbnRzU2VjdGlvbi5yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLHlFQUFvRTtBQUNwRSw0R0FBbUY7QUFDbkYsaUhBQXVGO0FBQ3ZGLDJHQUFrRjtBQUNsRix1RkFBOEQ7QUFFOUQsTUFBYSxzQkFBdUIsU0FBUSx5Q0FBa0I7SUFDNUQsWUFBWSxHQUF3QjtRQUNsQyxLQUFLLENBQUMsR0FBRyxFQUFFLHdCQUF3QixDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsR0FBRzthQUNQLEtBQUssQ0FBQyxZQUFZLENBQUM7YUFDbkIsR0FBRyxDQUNGLHdCQUFhLENBQUMsY0FBYyxFQUFDLHFDQUEwQixDQUFDLFFBQVEsQ0FBQzthQUNsRSxJQUFJLENBQ0gsd0JBQWEsQ0FBQyxjQUFjLEVBQzVCLG9DQUF3QixDQUFDLHNCQUFzQixFQUMvQyxxQ0FBMEIsQ0FBQywyQkFBMkIsRUFDdEQscUNBQTBCLENBQUMsb0NBQW9DLEVBQy9ELHFDQUEwQixDQUFDLFVBQVUsQ0FDdEMsQ0FBQztRQUVGLDhFQUE4RTtRQUM5RSxJQUFJLENBQUMsR0FBRzthQUNMLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQzthQUMvQixHQUFHLENBQUMscUNBQTBCLENBQUMsa0JBQWtCLEVBQUUsd0JBQWEsQ0FBQyxjQUFjLENBQUM7YUFDaEYsR0FBRyxDQUFDLHFDQUEwQixDQUFDLFVBQVUsQ0FBQzthQUMxQyxNQUFNLENBQUMscUNBQTBCLENBQUMsa0JBQWtCLEVBQ25ELHFDQUEwQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRTFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxxQ0FBMEIsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLHdCQUF3QixFQUFFO1lBQ3JDLG9DQUF3QixDQUFDLHNCQUFzQjtZQUMvQyxxQ0FBMEIsQ0FBQywyQkFBMkI7WUFDdEQscUNBQTBCLENBQUMsR0FBRztTQUMvQixDQUFDLENBQUM7UUFFRCxxQ0FBcUM7UUFDckMsd0NBQXdDO1FBQ3hDLHFCQUFxQjtRQUNyQiw0QkFBNEI7UUFDNUIscURBQXFEO1FBQ3JELG1CQUFtQjtRQUNuQiw2Q0FBNkM7UUFDN0MsNENBQTRDO1FBQzVDLGdEQUFnRDtRQUNoRCxxREFBcUQ7UUFDckQsd0NBQXdDO1FBQ3hDLDJCQUEyQjtRQUMzQixNQUFNO1FBRVIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2xCLENBQUM7Q0FDRjtBQWpERCx3REFpREMifQ==