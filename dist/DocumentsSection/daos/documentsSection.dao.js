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
const mongoose_service_1 = __importDefault(require("../../common/services/mongoose.service"));
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)('app:in-memory-dao');
class DocumentsSectionDao {
    constructor() {
        this.Schema = mongoose_service_1.default.getMongoose().Schema;
        this.DocumentSectionSchema = new this.Schema({
            service_id: { type: this.Schema.Types.ObjectId, ref: 'ourservices' },
            document_name: { type: String, default: '' },
            document_path: { type: String, default: '' },
        });
        this.DocumentsSection = mongoose_service_1.default.getMongoose().models.DocumentSection ||
            mongoose_service_1.default
                .getMongoose()
                .model('DocumentSection', this.DocumentSectionSchema);
        log('create new instance in document');
    }
    createProfile(DocumentsSectionFields, service_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const DocumentsSection = new this.DocumentsSection(Object.assign(Object.assign({}, DocumentsSectionFields), { service_id }));
            yield DocumentsSection.save();
            return DocumentsSection;
        });
    }
    getAll(limit = 25, page = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.DocumentsSection.find()
                .limit(limit)
                .skip(limit * page)
                .exec();
        });
    }
    getDocumentById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.DocumentsSection.findOne({ _id: id }).exec();
        });
    }
    getServiceTitleName(document_name) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.DocumentsSection.findOne({ document_name }).exec();
        });
    }
    // async updateUserById(userId: string, userFields: PatchUserDto | PutUserDto) {
    //   const existingUser = await this.OurServicesSection.findOneAndUpdate(
    //     { _id: userId },
    //     { $set: userFields },
    //     { new: true }
    //   ).exec();
    //   return existingUser;
    // }
    removeDocumentById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.DocumentsSection.deleteOne({ id }).exec();
        });
    }
    updateDocumentById(service_id, documentsFields) {
        return __awaiter(this, void 0, void 0, function* () {
            const existingUser = yield this.DocumentsSection.findOneAndUpdate({ _id: service_id }, { $set: documentsFields }, { new: true }).exec();
            return existingUser;
        });
    }
}
exports.default = new DocumentsSectionDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnRzU2VjdGlvbi5kYW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvRG9jdW1lbnRzU2VjdGlvbi9kYW9zL2RvY3VtZW50c1NlY3Rpb24uZGFvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOEZBQXFFO0FBRXJFLGtEQUEwQjtBQUUxQixNQUFNLEdBQUcsR0FBb0IsSUFBQSxlQUFLLEVBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUV4RCxNQUFNLG1CQUFtQjtJQWN2QjtRQWJBLFdBQU0sR0FBRywwQkFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUM5QywwQkFBcUIsR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDdEMsVUFBVSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsYUFBYSxFQUFFO1lBQ3BFLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUM3QyxhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7U0FDOUMsQ0FBQyxDQUFDO1FBRUgscUJBQWdCLEdBQ2QsMEJBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUMsZUFBZTtZQUNwRCwwQkFBZTtpQkFDWixXQUFXLEVBQUU7aUJBQ2IsS0FBSyxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBR3hELEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFSyxhQUFhLENBQUMsc0JBQWlDLEVBQUUsVUFBa0I7O1lBQ3ZFLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLGlDQUM3QyxzQkFBc0IsS0FDekIsVUFBVSxJQUNWLENBQUM7WUFDSCxNQUFNLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO1lBQzlCLE9BQU8sZ0JBQWdCLENBQUM7UUFDMUIsQ0FBQztLQUFBO0lBRUssTUFBTSxDQUFDLEtBQUssR0FBRyxFQUFFLEVBQUUsSUFBSSxHQUFHLENBQUM7O1lBQy9CLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRTtpQkFDaEMsS0FBSyxDQUFDLEtBQUssQ0FBQztpQkFDWixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztpQkFDbEIsSUFBSSxFQUFFLENBQUM7UUFDWixDQUFDO0tBQUE7SUFHSyxlQUFlLENBQUMsRUFBVTs7WUFDOUIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDM0QsQ0FBQztLQUFBO0lBR0ssbUJBQW1CLENBQUMsYUFBcUI7O1lBQzdDLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxFQUFFLGFBQWEsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDakUsQ0FBQztLQUFBO0lBR0QsZ0ZBQWdGO0lBQ2hGLHlFQUF5RTtJQUN6RSx1QkFBdUI7SUFDdkIsNEJBQTRCO0lBQzVCLG9CQUFvQjtJQUNwQixjQUFjO0lBRWQseUJBQXlCO0lBQ3pCLElBQUk7SUFFRSxrQkFBa0IsQ0FBQyxFQUFVOztZQUNqQyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsRUFBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3ZELENBQUM7S0FBQTtJQUdLLGtCQUFrQixDQUFDLFVBQWtCLEVBQUUsZUFBMEI7O1lBQ3JFLE1BQU0sWUFBWSxHQUFHLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixDQUMvRCxFQUFFLEdBQUcsRUFBQyxVQUFVLEVBQUUsRUFDbEIsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLEVBQ3pCLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUNkLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFVCxPQUFPLFlBQVksQ0FBQztRQUN0QixDQUFDO0tBQUE7Q0FHRjtBQUVELGtCQUFlLElBQUksbUJBQW1CLEVBQUUsQ0FBQyJ9