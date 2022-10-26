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
class CartSectionDao {
    constructor() {
        this.Schema = mongoose_service_1.default.getMongoose().Schema;
        this.CartSectionSchema = new this.Schema({
            service: {
                type: [
                    {
                        type: {
                            serbice_id: { type: String, default: '' },
                        },
                    }
                ], default: [],
            },
            subtotal: { type: Number, default: '' },
            tax: { type: Number, default: '' },
            total: { type: Number, default: '' },
        });
        this.CartSection = mongoose_service_1.default.getMongoose().models.Cart ||
            mongoose_service_1.default
                .getMongoose()
                .model('Cart', this.CartSectionSchema);
        log('create new instance in document');
    }
    createProfile(CartSectionFields, service_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const CartSection = new this.CartSection(Object.assign(Object.assign({}, CartSectionFields), { 
                // this wrong
                service_id }));
            yield CartSection.save();
            return CartSection;
        });
    }
    getAll(limit = 25, page = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.CartSection.find()
                .limit(limit)
                .skip(limit * page)
                .exec();
        });
    }
    getCartById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.CartSection.findOne({ id: id }).exec();
        });
    }
    // async getCartTitleName(document_name: string) {
    //   return this.CartSection.findOne({ document_name }).exec();
    // }
    // async updateUserById(userId: string, userFields: PatchUserDto | PutUserDto) {
    //   const existingUser = await this.OurServicesSection.findOneAndUpdate(
    //     { _id: userId },
    //     { $set: userFields },
    //     { new: true }
    //   ).exec();
    //   return existingUser;
    // }
    removeCartById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.CartSection.deleteOne({ id }).exec();
        });
    }
    updateCartById(service_id, cartFields) {
        return __awaiter(this, void 0, void 0, function* () {
            const existingUser = yield this.CartSection.findOneAndUpdate({ service_id }, { $set: cartFields }, { new: true }).exec();
            return existingUser;
        });
    }
}
exports.default = new CartSectionDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydFNlY3Rpb24uZGFvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL0NhcnRTZWN0aW9uL2Rhb3MvY2FydFNlY3Rpb24uZGFvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOEZBQXFFO0FBRXJFLGtEQUEwQjtBQUUxQixNQUFNLEdBQUcsR0FBb0IsSUFBQSxlQUFLLEVBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUV4RCxNQUFNLGNBQWM7SUF1QmxCO1FBdEJBLFdBQU0sR0FBRywwQkFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUM5QyxzQkFBaUIsR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDbEMsT0FBTyxFQUFFO2dCQUNQLElBQUksRUFBRTtvQkFDSjt3QkFDRSxJQUFJLEVBQUU7NEJBQ0osVUFBVSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO3lCQUMxQztxQkFDRjtpQkFDRixFQUFFLE9BQU8sRUFBRSxFQUFFO2FBQ2Y7WUFDRCxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDdkMsR0FBRyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQ2xDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtTQUNyQyxDQUFDLENBQUM7UUFFSCxnQkFBVyxHQUNULDBCQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUk7WUFDekMsMEJBQWU7aUJBQ1osV0FBVyxFQUFFO2lCQUNiLEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFHekMsR0FBRyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVLLGFBQWEsQ0FBQyxpQkFBNEIsRUFBRSxVQUFrQjs7WUFDbEUsTUFBTSxXQUFXLEdBQUcsSUFBSSxJQUFJLENBQUMsV0FBVyxpQ0FDbkMsaUJBQWlCO2dCQUNwQixhQUFhO2dCQUNiLFVBQVUsSUFDVixDQUFDO1lBQ0gsTUFBTSxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDekIsT0FBTyxXQUFXLENBQUM7UUFDckIsQ0FBQztLQUFBO0lBRUssTUFBTSxDQUFDLEtBQUssR0FBRyxFQUFFLEVBQUUsSUFBSSxHQUFHLENBQUM7O1lBQy9CLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUU7aUJBQzNCLEtBQUssQ0FBQyxLQUFLLENBQUM7aUJBQ1osSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7aUJBQ2xCLElBQUksRUFBRSxDQUFDO1FBQ1osQ0FBQztLQUFBO0lBR0ssV0FBVyxDQUFDLEVBQVU7O1lBQzFCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyRCxDQUFDO0tBQUE7SUFHRCxrREFBa0Q7SUFDbEQsK0RBQStEO0lBQy9ELElBQUk7SUFHSixnRkFBZ0Y7SUFDaEYseUVBQXlFO0lBQ3pFLHVCQUF1QjtJQUN2Qiw0QkFBNEI7SUFDNUIsb0JBQW9CO0lBQ3BCLGNBQWM7SUFFZCx5QkFBeUI7SUFDekIsSUFBSTtJQUVFLGNBQWMsQ0FBQyxFQUFVOztZQUM3QixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNuRCxDQUFDO0tBQUE7SUFHSyxjQUFjLENBQUMsVUFBa0IsRUFBRSxVQUFxQjs7WUFDNUQsTUFBTSxZQUFZLEdBQUcsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUMxRCxFQUFFLFVBQVUsRUFBRSxFQUNkLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxFQUNwQixFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FDZCxDQUFDLElBQUksRUFBRSxDQUFDO1lBRVQsT0FBTyxZQUFZLENBQUM7UUFDdEIsQ0FBQztLQUFBO0NBR0Y7QUFFRCxrQkFBZSxJQUFJLGNBQWMsRUFBRSxDQUFDIn0=