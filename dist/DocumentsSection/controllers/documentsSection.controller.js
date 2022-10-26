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
const documentsSection_service_1 = __importDefault(require("../services/documentsSection.service"));
const log = (0, debug_1.default)('app:docs-controller');
class DocumentsSectionsController {
    constructor() { }
    createdocs(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // this is worong///
            const service_id = '6339a240eb4ec1705e17a471';
            const doc = yield documentsSection_service_1.default.create(req.body, service_id);
            res.status(201).send(doc['_id']);
        });
    }
    listDocs(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const docs = yield documentsSection_service_1.default.list(100, 0);
            res.status(200).send(docs);
        });
    }
    getdocById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const doc = yield documentsSection_service_1.default.readById(req.params.documentId);
            res.status(200).send(doc);
        });
    }
    removedoc(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const doc = log(yield documentsSection_service_1.default.deleteById(req.params.documentId));
            res.status(200).send({
                message: "Document Deleted",
                doc
            });
        });
    }
    put(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // this is worong///
            const updateData = yield documentsSection_service_1.default.putById(req.params.documentId, req.body);
            res.status(200).send({
                message: 'Service Updated',
                data: updateData,
            });
        });
    }
}
exports.default = new DocumentsSectionsController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnRzU2VjdGlvbi5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL0RvY3VtZW50c1NlY3Rpb24vY29udHJvbGxlcnMvZG9jdW1lbnRzU2VjdGlvbi5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esa0RBQTBCO0FBQzFCLG9HQUEwRTtBQUUxRSxNQUFNLEdBQUcsR0FBb0IsSUFBQSxlQUFLLEVBQUMscUJBQXFCLENBQUMsQ0FBQztBQUMxRCxNQUFNLDJCQUEyQjtJQUMvQixnQkFBZSxDQUFDO0lBRVYsVUFBVSxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQzFELG9CQUFvQjtZQUNwQixNQUFRLFVBQVUsR0FBSSwwQkFBMEIsQ0FBQztZQUVqRCxNQUFNLEdBQUcsR0FBRyxNQUFNLGtDQUFzQixDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQ3RFLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBRSxDQUFDO1FBQ3JDLENBQUM7S0FBQTtJQUVLLFFBQVEsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUN4RCxNQUFNLElBQUksR0FBRyxNQUFNLGtDQUFzQixDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDdkQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsQ0FBQztLQUFBO0lBRUssVUFBVSxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQzFELE1BQU0sR0FBRyxHQUFHLE1BQU0sa0NBQXNCLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDekUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUIsQ0FBQztLQUFBO0lBTUssU0FBUyxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQzFELE1BQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLGtDQUFzQixDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDL0UsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ25CLE9BQU8sRUFBRSxrQkFBa0I7Z0JBQzNCLEdBQUc7YUFHTixDQUFDLENBQUM7UUFDSCxDQUFDO0tBQUE7SUFFSyxHQUFHLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDbkQsb0JBQW9CO1lBRXBCLE1BQU0sVUFBVSxHQUFHLE1BQU0sa0NBQXNCLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6RixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FDbEI7Z0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtnQkFDMUIsSUFBSSxFQUFFLFVBQVU7YUFDakIsQ0FDRixDQUFDO1FBQ0osQ0FBQztLQUFBO0NBQ0Y7QUFFRCxrQkFBZSxJQUFJLDJCQUEyQixFQUFFLENBQUMifQ==