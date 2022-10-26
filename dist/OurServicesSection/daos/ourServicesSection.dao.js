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
class OurServicesSectionsDao {
    constructor() {
        this.Schema = mongoose_service_1.default.getMongoose().Schema;
        this.OurServicesSectionSchema = new this.Schema({
            user_id: { type: this.Schema.Types.ObjectId, ref: 'Users' },
            title: { type: String, default: '' },
            subtitle: { type: String, default: '' },
            service_image: { type: String, default: '' },
            options: {
                type: [
                    {
                        type: {
                            option_1: { type: String, default: '' },
                            option_2: { type: String, default: '' },
                            option_3: { type: String, default: '' },
                            option_4: { type: String, default: '' },
                            option_5: { type: String, default: '' },
                        },
                    }
                ], default: [],
            },
            document_checklist: {
                type: [
                    {
                        type: {
                            title: { type: String, default: '' },
                            options: {
                                type: [
                                    {
                                        type: {
                                            option_1: { type: String, default: '' },
                                            option_2: { type: String, default: '' },
                                            option_3: { type: String, default: '' },
                                            option_4: { type: String, default: '' },
                                            option_5: { type: String, default: '' },
                                        },
                                    }
                                ], default: [],
                            },
                        },
                    }
                ]
            }
        });
        this.OurServicesSection = mongoose_service_1.default.getMongoose().models.OurServices ||
            mongoose_service_1.default
                .getMongoose()
                .model('OurServices', this.OurServicesSectionSchema);
        log('create new instance in Profile');
    }
    createProfile(ourServicesSectionsFields, user_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const OurServicesSection = new this.OurServicesSection(Object.assign(Object.assign({}, ourServicesSectionsFields), { user_id }));
            yield OurServicesSection.save();
            return OurServicesSection;
        });
    }
    getAll(limit = 25, page = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.OurServicesSection.find()
                .limit(limit)
                .skip(limit * page)
                .exec();
        });
    }
    getServiceById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.OurServicesSection.findOne({ _id: id }).exec();
        });
    }
    getServiceTitleName(title) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.OurServicesSection.findOne({ title: title }).exec();
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
    removeServiceById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.OurServicesSection.deleteOne({ _id: id }).exec();
        });
    }
    updateUserById(id, userFields) {
        return __awaiter(this, void 0, void 0, function* () {
            const existingUser = yield this.OurServicesSection.findOneAndUpdate({ _id: id }, { $set: userFields }, { new: true }).exec();
            return existingUser;
        });
    }
}
exports.default = new OurServicesSectionsDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3VyU2VydmljZXNTZWN0aW9uLmRhby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9PdXJTZXJ2aWNlc1NlY3Rpb24vZGFvcy9vdXJTZXJ2aWNlc1NlY3Rpb24uZGFvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOEZBQXFFO0FBRXJFLGtEQUEwQjtBQUUxQixNQUFNLEdBQUcsR0FBb0IsSUFBQSxlQUFLLEVBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUV4RCxNQUFNLHNCQUFzQjtJQWtEMUI7UUFqREEsV0FBTSxHQUFHLDBCQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDO1FBQzlDLDZCQUF3QixHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUN6QyxPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUU7WUFDM0QsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQ3BDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUN2QyxhQUFhLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDNUMsT0FBTyxFQUFFO2dCQUNQLElBQUksRUFBRTtvQkFDSjt3QkFDRSxJQUFJLEVBQUU7NEJBQ0osUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFOzRCQUN2QyxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7NEJBQ3ZDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTs0QkFDdkMsUUFB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