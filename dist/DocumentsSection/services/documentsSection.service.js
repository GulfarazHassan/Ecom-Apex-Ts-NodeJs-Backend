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
const documentsSection_dao_1 = __importDefault(require("../daos/documentsSection.dao"));
class DocumentsSectionService {
    create(resource, service_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return documentsSection_dao_1.default.createProfile(resource, service_id);
        });
    }
    list(limit, page) {
        return __awaiter(this, void 0, void 0, function* () {
            return documentsSection_dao_1.default.getAll(limit, page);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return documentsSection_dao_1.default.removeDocumentById(id);
        });
    }
    readById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return documentsSection_dao_1.default.getDocumentById(id);
        });
    }
    getDocumenTitleByName(document_name) {
        return __awaiter(this, void 0, void 0, function* () {
            return documentsSection_dao_1.default.getServiceTitleName(document_name);
        });
    }
    putById(id, resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return documentsSection_dao_1.default.updateDocumentById(id, resource);
        });
    }
}
exports.default = new DocumentsSectionService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnRzU2VjdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL0RvY3VtZW50c1NlY3Rpb24vc2VydmljZXMvZG9jdW1lbnRzU2VjdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0ZBQWlFO0FBSWpFLE1BQU0sdUJBQXVCO0lBQ3JCLE1BQU0sQ0FBQyxRQUFtQixFQUFFLFVBQWtCOztZQUNsRCxPQUFPLDhCQUFxQixDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDbkUsQ0FBQztLQUFBO0lBRUssSUFBSSxDQUFDLEtBQWEsRUFBRSxJQUFZOztZQUNwQyxPQUFPLDhCQUFxQixDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkQsQ0FBQztLQUFBO0lBSUssVUFBVSxDQUFDLEVBQVU7O1lBQ3pCLE9BQU8sOEJBQXFCLENBQUMsa0JBQWtCLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdEQsQ0FBQztLQUFBO0lBRUssUUFBUSxDQUFDLEVBQVU7O1lBQ3ZCLE9BQU8sOEJBQXFCLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ25ELENBQUM7S0FBQTtJQUVLLHFCQUFxQixDQUFDLGFBQXFCOztZQUMvQyxPQUFPLDhCQUFxQixDQUFDLG1CQUFtQixDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2xFLENBQUM7S0FBQTtJQUVLLE9BQU8sQ0FBQyxFQUFVLEVBQUUsUUFBbUI7O1lBQzNDLE9BQU8sOEJBQXFCLENBQUMsa0JBQWtCLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ2hFLENBQUM7S0FBQTtDQUNGO0FBRUQsa0JBQWUsSUFBSSx1QkFBdUIsRUFBRSxDQUFDIn0=