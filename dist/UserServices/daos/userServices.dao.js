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
class UserServicesDao {
    constructor() {
        this.Schema = mongoose_service_1.default.getMongoose().Schema;
        this.UserServicesSchema = new this.Schema({
            user_id: { type: this.Schema.Types.ObjectId, ref: 'users' },
            service_id: { type: this.Schema.Types.ObjectId, ref: 'ourservices' },
            // service_id: { type: String, defaul: '' }
            purchased_on: { type: Date, default: '' },
            completed_on: { type: Date, default: '' },
            // status: string;
        });
        this.UserServices = mongoose_service_1.default.getMongoose().models.UserServices ||
            mongoose_service_1.default
                .getMongoose()
                .model('UserServices', this.UserServicesSchema);
        log('create new instance in document');
    }
    createProfile(UserServicesFields, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const UserServices = new this.UserServices(Object.assign(Object.assign({}, UserServicesFields), { user_id: userId }));
            yield UserServices.save();
            return UserServices;
        });
    }
    getAll(limit = 25, page = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.UserServices.find()
                .limit(limit)
                .skip(limit * page)
                .exec();
        });
    }
    getUserServiceById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.UserServices.findOne({ _id: id }).exec();
        });
    }
    // async getServiceTitleName(document_name: string) {
    //   return this.UserServices.findOne({ document_name }).exec();
    // }
    // async updateUserById(userId: string, userFields: PatchUserDto | PutUserDto) {
    //   const existingUser = await this.OurServicesSection.findOneAndUpdate(
    //     { _id: userId },
    //     { $set: userFields },
    //     { new: true }
    //   ).exec();
    //   return existingUser;
    // }
    removeUserServicesById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.UserServices.deleteOne({ id }).exec();
        });
    }
    UserServiceById(id, UserServiceFields) {
        return __awaiter(this, void 0, void 0, function* () {
            const existingUser = yield this.UserServices.findOneAndUpdate({ _id: id }, { $set: UserServiceFields }, { new: true }).exec();
            return existingUser;
        });
    }
}
exports.default = new UserServicesDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlclNlcnZpY2VzLmRhby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Vc2VyU2VydmljZXMvZGFvcy91c2VyU2VydmljZXMuZGFvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOEZBQXFFO0FBRXJFLGtEQUEwQjtBQUUxQixNQUFNLEdBQUcsR0FBb0IsSUFBQSxlQUFLLEVBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUV4RCxNQUFNLGVBQWU7SUFpQm5CO1FBaEJBLFdBQU0sR0FBRywwQkFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUM5Qyx1QkFBa0IsR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDbkMsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFO1lBQzNELFVBQVUsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRTtZQUNwRSwyQ0FBMkM7WUFDM0MsWUFBWSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQ3pDLFlBQVksRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUN6QyxrQkFBa0I7U0FDbkIsQ0FBQyxDQUFDO1FBRUgsaUJBQVksR0FDViwwQkFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxZQUFZO1lBQ2pELDBCQUFlO2lCQUNaLFdBQVcsRUFBRTtpQkFDYixLQUFLLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBR2xELEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFSyxhQUFhLENBQUMsa0JBQTZCLEVBQUUsTUFBYzs7WUFDL0QsTUFBTSxZQUFZLEdBQUcsSUFBSSxJQUFJLENBQUMsWUFBWSxpQ0FDckMsa0JBQWtCLEtBQ3JCLE9BQU8sRUFBRSxNQUFNLElBQ2YsQ0FBQztZQUNILE1BQU0sWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzFCLE9BQU8sWUFBWSxDQUFDO1FBQ3RCLENBQUM7S0FBQTtJQUVLLE1BQU0sQ0FBQyxLQUFLLEdBQUcsRUFBRSxFQUFFLElBQUksR0FBRyxDQUFDOztZQUMvQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFO2lCQUM1QixLQUFLLENBQUMsS0FBSyxDQUFDO2lCQUNaLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2lCQUNsQixJQUFJLEVBQUUsQ0FBQztRQUNaLENBQUM7S0FBQTtJQUdLLGtCQUFrQixDQUFDLEVBQVU7O1lBQ2pDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN2RCxDQUFDO0tBQUE7SUFHRCxxREFBcUQ7SUFDckQsZ0VBQWdFO0lBQ2hFLElBQUk7SUFHSixnRkFBZ0Y7SUFDaEYseUVBQXlFO0lBQ3pFLHVCQUF1QjtJQUN2Qiw0QkFBNEI7SUFDNUIsb0JBQW9CO0lBQ3BCLGNBQWM7SUFFZCx5QkFBeUI7SUFDekIsSUFBSTtJQUVFLHNCQUFzQixDQUFDLEVBQVU7O1lBQ3JDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3BELENBQUM7S0FBQTtJQUdLLGVBQWUsQ0FBQyxFQUFVLEVBQUUsaUJBQTRCOztZQUM1RCxNQUFNLFlBQVksR0FBRyxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQzNELEVBQUUsR0FBRyxFQUFDLEVBQUUsRUFBRSxFQUNWLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFLEVBQzNCLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUNkLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFVCxPQUFPLFlBQVksQ0FBQztRQUN0QixDQUFDO0tBQUE7Q0FHRjtBQUVELGtCQUFlLElBQUksZUFBZSxFQUFFLENBQUMifQ==