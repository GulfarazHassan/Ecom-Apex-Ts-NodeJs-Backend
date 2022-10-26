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
const documentsSection_service_1 = __importDefault(require("../services/documentsSection.service"));
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)('app:ourService-controller');
class DocumentSectionsMiddleware {
    validateDocumentsBodyFields(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            if (req.body && req.body.document_name && req.body.document_path) {
                next();
            }
            else {
                res.status(400).send({
                    error: `Missing required fields document_name and document_path`,
                });
            }
        });
    }
    validateSameDocumentTitleDoesntExist(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const title = yield documentsSection_service_1.default.getDocumenTitleByName(req.body.document_name);
            if (title) {
                res.status(400).send({ error: `document Name already exists` });
            }
            else {
                next();
            }
        });
    }
    validateUserExists(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield documentsSection_service_1.default.readById(req.params.documentId);
            if (user) {
                // res.locals.user = user;
                next();
            }
            else {
                res.status(404).send({
                    error: `documents ${req.params.userId} not found`,
                });
            }
        });
    }
    extractDocumentId(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const doc = (yield documentsSection_service_1.default.readById(req.params.documentId));
            if (doc) {
                next();
            }
            else {
                res.status(404).send({
                    error: `documents ${req.params.userId} not found`,
                });
            }
        });
    }
}
exports.default = new DocumentSectionsMiddleware();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnRzU2VjdGlvbi5taWRkbGV3YXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL0RvY3VtZW50c1NlY3Rpb24vbWlkZGxld2FyZS9kb2N1bWVudHNTZWN0aW9uLm1pZGRsZXdhcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSxvR0FBNkU7QUFDN0Usa0RBQTBCO0FBRTFCLE1BQU0sR0FBRyxHQUFvQixJQUFBLGVBQUssRUFBQywyQkFBMkIsQ0FBQyxDQUFDO0FBQ2hFLE1BQU0sMEJBQTBCO0lBQ3hCLDJCQUEyQixDQUMvQixHQUFvQixFQUNwQixHQUFxQixFQUNyQixJQUEwQjs7WUFFMUIsSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO2dCQUNoRSxJQUFJLEVBQUUsQ0FBQzthQUNSO2lCQUFNO2dCQUNMLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUNuQixLQUFLLEVBQUUseURBQXlEO2lCQUNqRSxDQUFDLENBQUM7YUFDSjtRQUNILENBQUM7S0FBQTtJQUVLLG9DQUFvQyxDQUN4QyxHQUFvQixFQUNwQixHQUFxQixFQUNyQixJQUEwQjs7WUFFMUIsTUFBTSxLQUFLLEdBQUcsTUFBTSxrQ0FBeUIsQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzVGLElBQUksS0FBSyxFQUFFO2dCQUNULEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLDhCQUE4QixFQUFFLENBQUMsQ0FBQzthQUNqRTtpQkFBTTtnQkFDTCxJQUFJLEVBQUUsQ0FBQzthQUNSO1FBQ0gsQ0FBQztLQUFBO0lBSUssa0JBQWtCLENBQ3RCLEdBQW9CLEVBQ3BCLEdBQXFCLEVBQ3JCLElBQTBCOztZQUUxQixNQUFNLElBQUksR0FBRyxNQUFNLGtDQUF5QixDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzdFLElBQUksSUFBSSxFQUFFO2dCQUNSLDBCQUEwQjtnQkFDMUIsSUFBSSxFQUFFLENBQUM7YUFDUjtpQkFBTTtnQkFDTCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDbkIsS0FBSyxFQUFFLGFBQWEsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLFlBQVk7aUJBQ2xELENBQUMsQ0FBQzthQUNKO1FBQ0gsQ0FBQztLQUFBO0lBRUssaUJBQWlCLENBQ3JCLEdBQW9CLEVBQ3BCLEdBQXFCLEVBQ3JCLElBQTBCOztZQUUxQixNQUFNLEdBQUcsR0FBRyxDQUFFLE1BQU0sa0NBQXlCLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUMvRSxJQUFJLEdBQUcsRUFBRTtnQkFDUCxJQUFJLEVBQUUsQ0FBQTthQUNQO2lCQUNJO2dCQUNILEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUNuQixLQUFLLEVBQUUsYUFBYSxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sWUFBWTtpQkFDbEQsQ0FBQyxDQUFDO2FBQ0o7UUFDSCxDQUFDO0tBQUE7Q0FHRjtBQUVELGtCQUFlLElBQUksMEJBQTBCLEVBQUUsQ0FBQyJ9