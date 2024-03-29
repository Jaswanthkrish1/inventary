/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const typeorm_1 = __webpack_require__(5);
const core_module_1 = __webpack_require__(6);
const graphql_1 = __webpack_require__(10);
const apollo_1 = __webpack_require__(37);
const config_1 = __webpack_require__(25);
const config_2 = __webpack_require__(38);
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            core_module_1.CoreModule,
            config_1.ConfigModule.forRoot(config_2.config),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: async (config) => config.get('typeorm'),
            }),
            graphql_1.GraphQLModule.forRootAsync({
                driver: apollo_1.ApolloDriver,
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: async (config) => config.get('graphql'),
            }),
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),
/* 5 */
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CoreModule = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const user_module_1 = __webpack_require__(7);
const item_module_1 = __webpack_require__(17);
const foodcategory_module_1 = __webpack_require__(20);
const query_graphql_1 = __webpack_require__(9);
const query_typeorm_1 = __webpack_require__(23);
const user_entity_1 = __webpack_require__(8);
const jwt_1 = __webpack_require__(24);
const config_1 = __webpack_require__(25);
const user_input_1 = __webpack_require__(26);
const authenticate_controller_1 = __webpack_require__(28);
const authenticate_entity_1 = __webpack_require__(12);
const authenticate_service_1 = __webpack_require__(30);
const item_entity_1 = __webpack_require__(13);
const foodcategory_entity_1 = __webpack_require__(14);
const item_input_1 = __webpack_require__(31);
const foodcategory_input_1 = __webpack_require__(32);
const combo_entity_1 = __webpack_require__(35);
const combo_input_1 = __webpack_require__(36);
const foodtype_entity_1 = __webpack_require__(15);
const foodtype_input_1 = __webpack_require__(33);
const foodsize_entity_1 = __webpack_require__(16);
const foodsize_input_1 = __webpack_require__(34);
//test
let CoreModule = class CoreModule {
};
CoreModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            user_module_1.UserModule,
            item_module_1.ItemModule,
            foodcategory_module_1.FoodCategoryModule,
            jwt_1.JwtModule.registerAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: async (config) => config.get('jwt'),
            }),
            query_graphql_1.NestjsQueryGraphQLModule.forFeature({
                imports: [
                    query_typeorm_1.NestjsQueryTypeOrmModule.forFeature([
                        user_entity_1.User,
                        authenticate_entity_1.Authenticate,
                        item_entity_1.ItemEntity,
                        foodcategory_entity_1.FoodCategory,
                        foodtype_entity_1.FoodType,
                        foodsize_entity_1.FoodSize,
                        combo_entity_1.Offer
                    ]),
                ],
                resolvers: [
                    {
                        DTOClass: user_entity_1.User,
                        EntityClass: user_entity_1.User,
                        CreateDTOClass: user_input_1.CreateUserInput,
                        UpdateDTOClass: user_input_1.UpdateUserInput,
                        // enableTotalCount: true,
                        pagingStrategy: query_graphql_1.PagingStrategies.NONE,
                        create: { many: { disabled: true }, one: { disabled: false } },
                        update: { many: { disabled: true }, one: { disabled: false } },
                        delete: { many: { disabled: true }, one: { disabled: true } },
                        read: { many: { disabled: false }, one: { disabled: false } },
                    },
                    {
                        DTOClass: item_entity_1.ItemEntity,
                        EntityClass: item_entity_1.ItemEntity,
                        CreateDTOClass: item_input_1.CreateItemInput,
                        UpdateDTOClass: item_input_1.UpdateItemInput,
                        // enableTotalCount: true,
                        pagingStrategy: query_graphql_1.PagingStrategies.NONE,
                        create: { many: { disabled: false }, one: { disabled: false } },
                        update: { many: { disabled: false }, one: { disabled: false } },
                        delete: { many: { disabled: false }, one: { disabled: false } },
                        read: { many: { disabled: false }, one: { disabled: false } },
                    },
                    {
                        DTOClass: foodcategory_entity_1.FoodCategory,
                        EntityClass: foodcategory_entity_1.FoodCategory,
                        CreateDTOClass: foodcategory_input_1.CreateFoodCategoryInput,
                        UpdateDTOClass: foodcategory_input_1.UpdateFoodCategoryInput,
                        // enableTotalCount: true,
                        pagingStrategy: query_graphql_1.PagingStrategies.NONE,
                        create: { many: { disabled: true }, one: { disabled: false } },
                        update: { many: { disabled: true }, one: { disabled: false } },
                        delete: { many: { disabled: true }, one: { disabled: false } },
                        read: { many: { disabled: false }, one: { disabled: false } },
                    },
                    {
                        DTOClass: foodsize_entity_1.FoodSize,
                        EntityClass: foodsize_entity_1.FoodSize,
                        CreateDTOClass: foodsize_input_1.CreateFoodSizeInput,
                        UpdateDTOClass: foodsize_input_1.UpdateFoodSizeInput,
                        // enableTotalCount: true,
                        pagingStrategy: query_graphql_1.PagingStrategies.NONE,
                        create: { many: { disabled: true }, one: { disabled: false } },
                        update: { many: { disabled: true }, one: { disabled: false } },
                        delete: { many: { disabled: true }, one: { disabled: true } },
                        read: { many: { disabled: false }, one: { disabled: false } },
                    },
                    {
                        DTOClass: foodtype_entity_1.FoodType,
                        EntityClass: foodtype_entity_1.FoodType,
                        CreateDTOClass: foodtype_input_1.CreateFoodTypeInput,
                        UpdateDTOClass: foodtype_input_1.UpdateFoodTypeInput,
                        // enableTotalCount: true,
                        pagingStrategy: query_graphql_1.PagingStrategies.NONE,
                        create: { many: { disabled: true }, one: { disabled: false } },
                        update: { many: { disabled: true }, one: { disabled: false } },
                        delete: { many: { disabled: true }, one: { disabled: false } },
                        read: { many: { disabled: false }, one: { disabled: false } },
                    },
                    {
                        DTOClass: combo_entity_1.Offer,
                        EntityClass: combo_entity_1.Offer,
                        CreateDTOClass: combo_input_1.CreateOfferInput,
                        UpdateDTOClass: combo_input_1.UpdateOfferInput,
                        // enableTotalCount: true,
                        pagingStrategy: query_graphql_1.PagingStrategies.NONE,
                        create: { many: { disabled: false }, one: { disabled: false } },
                        update: { many: { disabled: false }, one: { disabled: false } },
                        delete: { many: { disabled: false }, one: { disabled: false } },
                        read: { many: { disabled: false }, one: { disabled: false } },
                    },
                ],
            }),
        ],
        controllers: [authenticate_controller_1.AuthController],
        providers: [authenticate_service_1.AuthenticateService],
    })
], CoreModule);
exports.CoreModule = CoreModule;


/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserModule = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const typeorm_1 = __webpack_require__(5);
const user_entity_1 = __webpack_require__(8);
const authenticate_entity_1 = __webpack_require__(12);
let UserModule = class UserModule {
};
UserModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_entity_1.User, authenticate_entity_1.Authenticate])],
        controllers: [],
        providers: [],
        exports: []
    })
], UserModule);
exports.UserModule = UserModule;


/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.User = void 0;
const tslib_1 = __webpack_require__(1);
const query_graphql_1 = __webpack_require__(9);
const graphql_1 = __webpack_require__(10);
const typeorm_1 = __webpack_require__(11);
const authenticate_entity_1 = __webpack_require__(12);
const item_entity_1 = __webpack_require__(13);
let User = class User {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, query_graphql_1.FilterableField)(),
    tslib_1.__metadata("design:type", Number)
], User.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, query_graphql_1.FilterableField)(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "role", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'mediumtext', nullable: true }),
    (0, graphql_1.Field)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "profile_img", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "name", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ default: true }),
    (0, query_graphql_1.FilterableField)(),
    tslib_1.__metadata("design:type", Boolean)
], User.prototype, "status", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToOne)(() => authenticate_entity_1.Authenticate, { cascade: true, eager: true }),
    (0, typeorm_1.JoinColumn)(),
    tslib_1.__metadata("design:type", typeof (_a = typeof authenticate_entity_1.Authenticate !== "undefined" && authenticate_entity_1.Authenticate) === "function" ? _a : Object)
], User.prototype, "auth", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToMany)(() => item_entity_1.ItemEntity, (item) => item.createdby),
    tslib_1.__metadata("design:type", Array)
], User.prototype, "items", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "createdBy", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "updatedBy", void 0);
tslib_1.__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    tslib_1.__metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], User.prototype, "createdAt", void 0);
tslib_1.__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    tslib_1.__metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], User.prototype, "updatedAt", void 0);
User = tslib_1.__decorate([
    (0, typeorm_1.Entity)('core_user'),
    (0, graphql_1.ObjectType)()
], User);
exports.User = User;


/***/ }),
/* 9 */
/***/ ((module) => {

module.exports = require("@nestjs-query/query-graphql");

/***/ }),
/* 10 */
/***/ ((module) => {

module.exports = require("@nestjs/graphql");

/***/ }),
/* 11 */
/***/ ((module) => {

module.exports = require("typeorm");

/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Authenticate = void 0;
const tslib_1 = __webpack_require__(1);
// auth.entity.ts
const typeorm_1 = __webpack_require__(11);
let Authenticate = class Authenticate {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], Authenticate.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    tslib_1.__metadata("design:type", String)
], Authenticate.prototype, "username", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Authenticate.prototype, "password", void 0);
Authenticate = tslib_1.__decorate([
    (0, typeorm_1.Entity)('core_auth')
], Authenticate);
exports.Authenticate = Authenticate;


/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ItemEntity = void 0;
const tslib_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(11);
const user_entity_1 = __webpack_require__(8);
const foodcategory_entity_1 = __webpack_require__(14);
const graphql_1 = __webpack_require__(10);
const query_graphql_1 = __webpack_require__(9);
const foodtype_entity_1 = __webpack_require__(15);
const foodsize_entity_1 = __webpack_require__(16);
let ItemEntity = class ItemEntity {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, query_graphql_1.FilterableField)(),
    (0, graphql_1.Field)(),
    tslib_1.__metadata("design:type", Number)
], ItemEntity.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, query_graphql_1.FilterableField)(),
    (0, graphql_1.Field)(),
    tslib_1.__metadata("design:type", String)
], ItemEntity.prototype, "name", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'mediumtext', nullable: true }),
    (0, graphql_1.Field)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], ItemEntity.prototype, "image_data", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], ItemEntity.prototype, "image_", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => foodcategory_entity_1.FoodCategory, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'category' }),
    (0, graphql_1.Field)(() => foodcategory_entity_1.FoodCategory, { nullable: true }),
    tslib_1.__metadata("design:type", typeof (_a = typeof foodcategory_entity_1.FoodCategory !== "undefined" && foodcategory_entity_1.FoodCategory) === "function" ? _a : Object)
], ItemEntity.prototype, "category", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => foodtype_entity_1.FoodType, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'foodtype' }),
    (0, graphql_1.Field)(() => foodtype_entity_1.FoodType, { nullable: true }),
    tslib_1.__metadata("design:type", typeof (_b = typeof foodtype_entity_1.FoodType !== "undefined" && foodtype_entity_1.FoodType) === "function" ? _b : Object)
], ItemEntity.prototype, "foodtype", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => foodsize_entity_1.FoodSize, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'foodsize' }),
    (0, graphql_1.Field)(() => foodsize_entity_1.FoodSize, { nullable: true }),
    tslib_1.__metadata("design:type", typeof (_c = typeof foodsize_entity_1.FoodSize !== "undefined" && foodsize_entity_1.FoodSize) === "function" ? _c : Object)
], ItemEntity.prototype, "foodsize", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ default: true }),
    (0, query_graphql_1.FilterableField)(),
    (0, graphql_1.Field)(),
    tslib_1.__metadata("design:type", Boolean)
], ItemEntity.prototype, "status", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ default: true }),
    (0, query_graphql_1.FilterableField)(),
    (0, graphql_1.Field)(),
    tslib_1.__metadata("design:type", Boolean)
], ItemEntity.prototype, "type", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 2, nullable: true }),
    (0, graphql_1.Field)(),
    tslib_1.__metadata("design:type", Number)
], ItemEntity.prototype, "price", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: 0 }),
    (0, query_graphql_1.FilterableField)(),
    (0, graphql_1.Field)(),
    tslib_1.__metadata("design:type", String)
], ItemEntity.prototype, "offer", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'createdby' }),
    (0, graphql_1.Field)(() => user_entity_1.User, { nullable: true }),
    tslib_1.__metadata("design:type", typeof (_d = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _d : Object)
], ItemEntity.prototype, "createdby", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'updatedby' }),
    (0, graphql_1.Field)(() => user_entity_1.User, { nullable: true }),
    tslib_1.__metadata("design:type", typeof (_e = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _e : Object)
], ItemEntity.prototype, "updatedby", void 0);
tslib_1.__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    tslib_1.__metadata("design:type", typeof (_f = typeof Date !== "undefined" && Date) === "function" ? _f : Object)
], ItemEntity.prototype, "createddate", void 0);
tslib_1.__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    tslib_1.__metadata("design:type", typeof (_g = typeof Date !== "undefined" && Date) === "function" ? _g : Object)
], ItemEntity.prototype, "updateddate", void 0);
ItemEntity = tslib_1.__decorate([
    (0, query_graphql_1.FilterableRelation)('createdby', () => user_entity_1.User, {
        nullable: true,
        disableRemove: true,
        disableUpdate: true,
    }),
    (0, query_graphql_1.FilterableRelation)('updatedby', () => user_entity_1.User, {
        nullable: true,
        disableRemove: true,
        disableUpdate: true,
    }),
    (0, query_graphql_1.FilterableRelation)('category', () => foodcategory_entity_1.FoodCategory, {
        nullable: true,
        disableRemove: true,
        disableUpdate: true,
        allowFiltering: true
    }),
    (0, query_graphql_1.FilterableRelation)('foodtype', () => foodtype_entity_1.FoodType, {
        nullable: true,
        disableRemove: true,
        disableUpdate: true,
    }),
    (0, query_graphql_1.FilterableRelation)('foodsize', () => foodsize_entity_1.FoodSize, {
        nullable: true,
        disableRemove: true,
        disableUpdate: true,
    }),
    (0, typeorm_1.Entity)('item_entity'),
    (0, graphql_1.ObjectType)()
], ItemEntity);
exports.ItemEntity = ItemEntity;


/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FoodCategory = void 0;
const tslib_1 = __webpack_require__(1);
const query_graphql_1 = __webpack_require__(9);
const graphql_1 = __webpack_require__(10);
const typeorm_1 = __webpack_require__(11);
const item_entity_1 = __webpack_require__(13);
let FoodCategory = class FoodCategory {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, query_graphql_1.FilterableField)(),
    (0, graphql_1.Field)(),
    tslib_1.__metadata("design:type", Number)
], FoodCategory.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    (0, query_graphql_1.FilterableField)(),
    (0, typeorm_1.Index)({ unique: true }),
    (0, graphql_1.Field)(),
    tslib_1.__metadata("design:type", String)
], FoodCategory.prototype, "name", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'mediumtext', nullable: true }),
    (0, graphql_1.Field)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], FoodCategory.prototype, "category_image", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToMany)(() => item_entity_1.ItemEntity, (items) => items.category),
    (0, typeorm_1.JoinColumn)({ name: 'items' }),
    (0, graphql_1.Field)(() => item_entity_1.ItemEntity, { nullable: true }),
    tslib_1.__metadata("design:type", Array)
], FoodCategory.prototype, "items", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ default: false }),
    (0, graphql_1.Field)(),
    (0, query_graphql_1.FilterableField)(),
    tslib_1.__metadata("design:type", Boolean)
], FoodCategory.prototype, "clientView", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ default: true }),
    (0, graphql_1.Field)(),
    (0, query_graphql_1.FilterableField)(),
    tslib_1.__metadata("design:type", Boolean)
], FoodCategory.prototype, "isActive", void 0);
FoodCategory = tslib_1.__decorate([
    (0, typeorm_1.Entity)(),
    (0, graphql_1.ObjectType)(),
    (0, query_graphql_1.FilterableRelation)('items', () => item_entity_1.ItemEntity, {
        nullable: true,
        disableRemove: true,
        disableUpdate: true,
        allowFiltering: true
    })
], FoodCategory);
exports.FoodCategory = FoodCategory;


/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FoodType = void 0;
const tslib_1 = __webpack_require__(1);
const query_graphql_1 = __webpack_require__(9);
const graphql_1 = __webpack_require__(10);
const typeorm_1 = __webpack_require__(11);
const item_entity_1 = __webpack_require__(13);
let FoodType = class FoodType {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, query_graphql_1.FilterableField)(),
    (0, graphql_1.Field)(),
    tslib_1.__metadata("design:type", Number)
], FoodType.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    (0, query_graphql_1.FilterableField)(),
    (0, typeorm_1.Index)({ unique: true }),
    (0, graphql_1.Field)(),
    tslib_1.__metadata("design:type", String)
], FoodType.prototype, "name", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToMany)(() => item_entity_1.ItemEntity, (items) => items.foodtype),
    tslib_1.__metadata("design:type", Array)
], FoodType.prototype, "items", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ default: true }),
    (0, graphql_1.Field)(),
    (0, query_graphql_1.FilterableField)(),
    tslib_1.__metadata("design:type", Boolean)
], FoodType.prototype, "isActive", void 0);
FoodType = tslib_1.__decorate([
    (0, typeorm_1.Entity)(),
    (0, graphql_1.ObjectType)()
], FoodType);
exports.FoodType = FoodType;


/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FoodSize = void 0;
const tslib_1 = __webpack_require__(1);
const query_graphql_1 = __webpack_require__(9);
const graphql_1 = __webpack_require__(10);
const typeorm_1 = __webpack_require__(11);
const item_entity_1 = __webpack_require__(13);
let FoodSize = class FoodSize {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, query_graphql_1.FilterableField)(),
    (0, graphql_1.Field)(),
    tslib_1.__metadata("design:type", Number)
], FoodSize.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    (0, query_graphql_1.FilterableField)(),
    (0, typeorm_1.Index)({ unique: true }),
    (0, graphql_1.Field)(),
    tslib_1.__metadata("design:type", String)
], FoodSize.prototype, "name", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToMany)(() => item_entity_1.ItemEntity, (items) => items.foodsize),
    tslib_1.__metadata("design:type", Array)
], FoodSize.prototype, "items", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ default: true }),
    (0, graphql_1.Field)(),
    (0, query_graphql_1.FilterableField)(),
    tslib_1.__metadata("design:type", Boolean)
], FoodSize.prototype, "isActive", void 0);
FoodSize = tslib_1.__decorate([
    (0, typeorm_1.Entity)(),
    (0, graphql_1.ObjectType)()
], FoodSize);
exports.FoodSize = FoodSize;


/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ItemModule = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const typeorm_1 = __webpack_require__(5);
const item_entity_1 = __webpack_require__(13);
const item_resolver_1 = __webpack_require__(18);
const item_service_1 = __webpack_require__(19);
let ItemModule = class ItemModule {
};
ItemModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([item_entity_1.ItemEntity,])],
        controllers: [],
        providers: [item_resolver_1.ItemResolver, item_service_1.ItemService],
        exports: []
    })
], ItemModule);
exports.ItemModule = ItemModule;


/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ItemResolver = void 0;
const tslib_1 = __webpack_require__(1);
const graphql_1 = __webpack_require__(10);
const item_service_1 = __webpack_require__(19);
const item_entity_1 = __webpack_require__(13);
let ItemResolver = class ItemResolver {
    constructor(itemServ) {
        this.itemServ = itemServ;
    }
    getItems() {
        return this.itemServ.getAllItems();
    }
};
tslib_1.__decorate([
    (0, graphql_1.Query)(() => [item_entity_1.ItemEntity]),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], ItemResolver.prototype, "getItems", null);
ItemResolver = tslib_1.__decorate([
    (0, graphql_1.Resolver)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof item_service_1.ItemService !== "undefined" && item_service_1.ItemService) === "function" ? _a : Object])
], ItemResolver);
exports.ItemResolver = ItemResolver;


/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ItemService = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const typeorm_1 = __webpack_require__(5);
const typeorm_2 = __webpack_require__(11);
const item_entity_1 = __webpack_require__(13);
const foodcategory_entity_1 = __webpack_require__(14);
const user_entity_1 = __webpack_require__(8);
let ItemService = class ItemService {
    constructor(ItemRepository) {
        this.ItemRepository = ItemRepository;
    }
    async getAllItems() {
        return await this.ItemRepository.find({ relations: ['createdby', 'updatedby', 'category', 'foodtype', 'foodsize'] });
    }
    async createUser(img) {
        debugger;
        const item = new item_entity_1.ItemEntity();
        item.image_data = img;
        item.name = 'dragonchiken'; // Set the name
        item.category = new foodcategory_entity_1.FoodCategory(); // Create and set a new category
        item.category.name = 'starters'; // Set the category name
        item.createdby = new user_entity_1.User(); // Create and set a new user
        item.createdby.id = 1; // Set the user ID
        return await this.ItemRepository.save(item);
    }
    async getUserById(id) {
        const options = {
            where: { id: (0, typeorm_2.Equal)(id) },
        };
        return this.ItemRepository.findOne(options);
    }
    async updateUser(id, email, name) {
        const user = await this.ItemRepository.findOne({
            where: { id: (0, typeorm_2.Equal)(id) },
        });
        return this.ItemRepository.save(user);
    }
    async deleteUser(id) {
        // const idAvailable = await this.taskRepository.findOne({
        //   where: { assignedToUser: Equal(id) },
        // });
        this.ItemRepository.delete(id);
    }
};
ItemService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(item_entity_1.ItemEntity)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], ItemService);
exports.ItemService = ItemService;


/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FoodCategoryModule = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const typeorm_1 = __webpack_require__(5);
const foodcategory_entity_1 = __webpack_require__(14);
const foodcategory_controller_1 = __webpack_require__(21);
const foodcategory_service_1 = __webpack_require__(22);
let FoodCategoryModule = class FoodCategoryModule {
};
FoodCategoryModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([foodcategory_entity_1.FoodCategory])],
        controllers: [foodcategory_controller_1.FoodCategoryController],
        providers: [foodcategory_service_1.FoodCategoryService],
        exports: [foodcategory_service_1.FoodCategoryService]
    })
], FoodCategoryModule);
exports.FoodCategoryModule = FoodCategoryModule;


/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FoodCategoryController = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const foodcategory_service_1 = __webpack_require__(22);
let FoodCategoryController = class FoodCategoryController {
    constructor(userService) {
        this.userService = userService;
    }
    async getAllUsers() {
        return this.userService.getAllUsers();
    }
    async createUser() {
        return this.userService.createUser();
    }
    async getUserById(id) {
        return this.userService.getUserById(id);
    }
    async updateUser(id, email, name) {
        return this.userService.updateUser(id, email, name);
    }
    async deleteUser(id) {
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], FoodCategoryController.prototype, "getAllUsers", null);
tslib_1.__decorate([
    (0, common_1.Post)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], FoodCategoryController.prototype, "createUser", null);
tslib_1.__decorate([
    (0, common_1.Get)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], FoodCategoryController.prototype, "getUserById", null);
tslib_1.__decorate([
    (0, common_1.Put)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Body)('email')),
    tslib_1.__param(2, (0, common_1.Body)('name')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, String, String]),
    tslib_1.__metadata("design:returntype", Promise)
], FoodCategoryController.prototype, "updateUser", null);
tslib_1.__decorate([
    (0, common_1.Delete)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], FoodCategoryController.prototype, "deleteUser", null);
FoodCategoryController = tslib_1.__decorate([
    (0, common_1.Controller)('cetegory'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof foodcategory_service_1.FoodCategoryService !== "undefined" && foodcategory_service_1.FoodCategoryService) === "function" ? _a : Object])
], FoodCategoryController);
exports.FoodCategoryController = FoodCategoryController;


/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FoodCategoryService = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const typeorm_1 = __webpack_require__(5);
const typeorm_2 = __webpack_require__(11);
const foodcategory_entity_1 = __webpack_require__(14);
let FoodCategoryService = class FoodCategoryService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async getAllUsers() {
        return this.userRepository.find();
    }
    async createUser() {
        const user = new foodcategory_entity_1.FoodCategory();
        user.name = 'staters';
        return this.userRepository.save(user);
    }
    async getUserById(id) {
        const options = {
            where: { id: (0, typeorm_2.Equal)(id) },
        };
        return this.userRepository.findOne(options);
    }
    async updateUser(id, email, name) {
        const user = await this.userRepository.findOne({
            where: { id: (0, typeorm_2.Equal)(id) },
        });
        return this.userRepository.save(user);
    }
    async deleteUser(id) {
        // const idAvailable = await this.taskRepository.findOne({
        //   where: { assignedToUser: Equal(id) },
        // });
        this.userRepository.delete(id);
    }
};
FoodCategoryService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(foodcategory_entity_1.FoodCategory)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], FoodCategoryService);
exports.FoodCategoryService = FoodCategoryService;


/***/ }),
/* 23 */
/***/ ((module) => {

module.exports = require("@nestjs-query/query-typeorm");

/***/ }),
/* 24 */
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),
/* 25 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateUserInput = exports.CreateUserInput = exports.UserInput = void 0;
const tslib_1 = __webpack_require__(1);
const graphql_1 = __webpack_require__(10);
const class_validator_1 = __webpack_require__(27);
let UserInput = class UserInput {
};
tslib_1.__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", Number)
], UserInput.prototype, "id", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], UserInput.prototype, "role", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], UserInput.prototype, "profile_img", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], UserInput.prototype, "name", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], UserInput.prototype, "createdBy", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], UserInput.prototype, "updatedBy", void 0);
UserInput = tslib_1.__decorate([
    (0, graphql_1.InputType)({ isAbstract: true })
], UserInput);
exports.UserInput = UserInput;
let CreateUserInput = class CreateUserInput extends UserInput {
};
CreateUserInput = tslib_1.__decorate([
    (0, graphql_1.InputType)()
], CreateUserInput);
exports.CreateUserInput = CreateUserInput;
let UpdateUserInput = class UpdateUserInput extends UserInput {
};
tslib_1.__decorate([
    (0, graphql_1.Field)({ defaultValue: true }),
    (0, class_validator_1.IsBoolean)(),
    tslib_1.__metadata("design:type", Boolean)
], UpdateUserInput.prototype, "status", void 0);
UpdateUserInput = tslib_1.__decorate([
    (0, graphql_1.InputType)()
], UpdateUserInput);
exports.UpdateUserInput = UpdateUserInput;


/***/ }),
/* 27 */
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),
/* 28 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const tslib_1 = __webpack_require__(1);
// auth.controller.ts
const common_1 = __webpack_require__(2);
const auth_dto_1 = __webpack_require__(29);
const authenticate_service_1 = __webpack_require__(30);
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async login(loginDTO) {
        const { username, password } = loginDTO;
        const Secret = await this.authService.login(username, password);
        if (Secret) {
            return { Secret };
        }
        else {
            return 'im not done';
        }
    }
    async registerUser(userRegistrationDto, response) {
        try {
            const { username, password, role } = userRegistrationDto;
            await this.authService.registerUser(username, password, role);
            return response.status(common_1.HttpStatus.CREATED).json({ message: 'User registered successfully' });
        }
        catch (error) {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({ message: error.message });
        }
    }
    async validateLogin(token) {
        return await this.authService.isTokenValid(token.token);
    }
};
tslib_1.__decorate([
    (0, common_1.Post)('login'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof auth_dto_1.AuthDTO !== "undefined" && auth_dto_1.AuthDTO) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
tslib_1.__decorate([
    (0, common_1.Post)('register'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__param(1, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_c = typeof auth_dto_1.UserRegistrationDto !== "undefined" && auth_dto_1.UserRegistrationDto) === "function" ? _c : Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "registerUser", null);
tslib_1.__decorate([
    (0, common_1.Post)('validateToken'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], AuthController.prototype, "validateLogin", null);
AuthController = tslib_1.__decorate([
    (0, common_1.Controller)('auth'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof authenticate_service_1.AuthenticateService !== "undefined" && authenticate_service_1.AuthenticateService) === "function" ? _a : Object])
], AuthController);
exports.AuthController = AuthController;


/***/ }),
/* 29 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserRegistrationDto = exports.AuthDTO = void 0;
const tslib_1 = __webpack_require__(1);
const class_validator_1 = __webpack_require__(27);
class AuthDTO {
}
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], AuthDTO.prototype, "username", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], AuthDTO.prototype, "password", void 0);
exports.AuthDTO = AuthDTO;
class UserRegistrationDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], UserRegistrationDto.prototype, "username", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], UserRegistrationDto.prototype, "password", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsIn)(['admin', 'user', 'server']),
    tslib_1.__metadata("design:type", String)
], UserRegistrationDto.prototype, "role", void 0);
exports.UserRegistrationDto = UserRegistrationDto;


/***/ }),
/* 30 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthenticateService = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const typeorm_1 = __webpack_require__(5);
const typeorm_2 = __webpack_require__(11);
const authenticate_entity_1 = __webpack_require__(12);
const jwt_1 = __webpack_require__(24);
const user_entity_1 = __webpack_require__(8);
let AuthenticateService = class AuthenticateService {
    constructor(jwtService, userRepository, authRepository) {
        this.jwtService = jwtService;
        this.userRepository = userRepository;
        this.authRepository = authRepository;
    }
    async login(username, password) {
        // Find the user by username
        const auth = await this.authRepository.findOne({ where: { username } });
        if (auth && auth.password === password) {
            // Password is correct
            const authId = auth.id;
            const user = await this.userRepository.findOne({ where: { auth: { id: authId } } });
            console.log(user);
            const payload = { username: auth.username, id: user.id, role: user.role, status: user.status, name: user.name, profile_img: user?.profile_img };
            // Generate and return a JWT token
            const token = await this.jwtService.signAsync(payload);
            const userobject = { payload, token };
            return userobject;
        }
        // Invalid credentials
        return null;
    }
    async registerUser(username, password, role) {
        // Check if the username is already taken
        const existingAuth = await this.authRepository.findOne({ where: { username } });
        if (existingAuth) {
            throw new Error('Username is already taken.');
        }
        // Create the Auth entity
        const auth = this.authRepository.create({ username, password });
        await this.authRepository.save(auth);
        // Create the User entity with role
        const user = this.userRepository.create({ status: true, role, auth });
        await this.userRepository.save(user);
        return user;
    }
    async isTokenValid(token) {
        try {
            await this.jwtService.verifyAsync(token);
            return true;
        }
        catch (error) {
            return false;
        }
    }
};
AuthenticateService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    tslib_1.__param(2, (0, typeorm_1.InjectRepository)(authenticate_entity_1.Authenticate)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _c : Object])
], AuthenticateService);
exports.AuthenticateService = AuthenticateService;


/***/ }),
/* 31 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateItemInput = exports.CreateItemInput = exports.ItemInput = void 0;
const tslib_1 = __webpack_require__(1);
const graphql_1 = __webpack_require__(10);
const class_validator_1 = __webpack_require__(27);
const foodcategory_input_1 = __webpack_require__(32);
const user_input_1 = __webpack_require__(26);
const foodtype_input_1 = __webpack_require__(33);
const foodsize_input_1 = __webpack_require__(34);
let ItemInput = class ItemInput {
};
tslib_1.__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], ItemInput.prototype, "name", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], ItemInput.prototype, "image_data", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)(() => foodcategory_input_1.FoodCategoryInput, { nullable: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", typeof (_a = typeof foodcategory_input_1.FoodCategoryInput !== "undefined" && foodcategory_input_1.FoodCategoryInput) === "function" ? _a : Object)
], ItemInput.prototype, "category", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", Number)
], ItemInput.prototype, "price", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], ItemInput.prototype, "offer", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsBoolean)(),
    tslib_1.__metadata("design:type", Boolean)
], ItemInput.prototype, "type", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)(() => foodtype_input_1.FoodTypeInput, { nullable: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", typeof (_b = typeof foodtype_input_1.FoodTypeInput !== "undefined" && foodtype_input_1.FoodTypeInput) === "function" ? _b : Object)
], ItemInput.prototype, "foodtype", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)(() => foodsize_input_1.FoodSizeInput, { nullable: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", typeof (_c = typeof foodsize_input_1.FoodSizeInput !== "undefined" && foodsize_input_1.FoodSizeInput) === "function" ? _c : Object)
], ItemInput.prototype, "foodsize", void 0);
ItemInput = tslib_1.__decorate([
    (0, graphql_1.InputType)({ isAbstract: true })
], ItemInput);
exports.ItemInput = ItemInput;
let CreateItemInput = class CreateItemInput extends ItemInput {
};
tslib_1.__decorate([
    (0, graphql_1.Field)(() => user_input_1.UserInput, { nullable: true }),
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", typeof (_d = typeof user_input_1.UserInput !== "undefined" && user_input_1.UserInput) === "function" ? _d : Object)
], CreateItemInput.prototype, "createdby", void 0);
CreateItemInput = tslib_1.__decorate([
    (0, graphql_1.InputType)()
], CreateItemInput);
exports.CreateItemInput = CreateItemInput;
let UpdateItemInput = class UpdateItemInput extends ItemInput {
};
tslib_1.__decorate([
    (0, graphql_1.Field)(() => user_input_1.UserInput, { nullable: true }),
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", typeof (_e = typeof user_input_1.UserInput !== "undefined" && user_input_1.UserInput) === "function" ? _e : Object)
], UpdateItemInput.prototype, "updatedby", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsBoolean)(),
    tslib_1.__metadata("design:type", Boolean)
], UpdateItemInput.prototype, "status", void 0);
UpdateItemInput = tslib_1.__decorate([
    (0, graphql_1.InputType)()
], UpdateItemInput);
exports.UpdateItemInput = UpdateItemInput;


/***/ }),
/* 32 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateFoodCategoryInput = exports.CreateFoodCategoryInput = exports.FoodCategoryInput = void 0;
const tslib_1 = __webpack_require__(1);
const graphql_1 = __webpack_require__(10);
const class_validator_1 = __webpack_require__(27);
let FoodCategoryInput = class FoodCategoryInput {
};
tslib_1.__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], FoodCategoryInput.prototype, "name", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", Number)
], FoodCategoryInput.prototype, "id", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", String)
], FoodCategoryInput.prototype, "category_image", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsBoolean)(),
    tslib_1.__metadata("design:type", Boolean)
], FoodCategoryInput.prototype, "isActive", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsBoolean)(),
    tslib_1.__metadata("design:type", Boolean)
], FoodCategoryInput.prototype, "clientView", void 0);
FoodCategoryInput = tslib_1.__decorate([
    (0, graphql_1.InputType)()
], FoodCategoryInput);
exports.FoodCategoryInput = FoodCategoryInput;
let CreateFoodCategoryInput = class CreateFoodCategoryInput extends FoodCategoryInput {
};
CreateFoodCategoryInput = tslib_1.__decorate([
    (0, graphql_1.InputType)()
], CreateFoodCategoryInput);
exports.CreateFoodCategoryInput = CreateFoodCategoryInput;
let UpdateFoodCategoryInput = class UpdateFoodCategoryInput extends FoodCategoryInput {
};
UpdateFoodCategoryInput = tslib_1.__decorate([
    (0, graphql_1.InputType)()
], UpdateFoodCategoryInput);
exports.UpdateFoodCategoryInput = UpdateFoodCategoryInput;


/***/ }),
/* 33 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateFoodTypeInput = exports.CreateFoodTypeInput = exports.FoodTypeInput = void 0;
const tslib_1 = __webpack_require__(1);
const graphql_1 = __webpack_require__(10);
const class_validator_1 = __webpack_require__(27);
let FoodTypeInput = class FoodTypeInput {
};
tslib_1.__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], FoodTypeInput.prototype, "name", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", Number)
], FoodTypeInput.prototype, "id", void 0);
FoodTypeInput = tslib_1.__decorate([
    (0, graphql_1.InputType)()
], FoodTypeInput);
exports.FoodTypeInput = FoodTypeInput;
let CreateFoodTypeInput = class CreateFoodTypeInput extends FoodTypeInput {
};
CreateFoodTypeInput = tslib_1.__decorate([
    (0, graphql_1.InputType)()
], CreateFoodTypeInput);
exports.CreateFoodTypeInput = CreateFoodTypeInput;
let UpdateFoodTypeInput = class UpdateFoodTypeInput extends FoodTypeInput {
};
tslib_1.__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsBoolean)(),
    tslib_1.__metadata("design:type", Boolean)
], UpdateFoodTypeInput.prototype, "isActive", void 0);
UpdateFoodTypeInput = tslib_1.__decorate([
    (0, graphql_1.InputType)()
], UpdateFoodTypeInput);
exports.UpdateFoodTypeInput = UpdateFoodTypeInput;


/***/ }),
/* 34 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateFoodSizeInput = exports.CreateFoodSizeInput = exports.FoodSizeInput = void 0;
const tslib_1 = __webpack_require__(1);
const graphql_1 = __webpack_require__(10);
const class_validator_1 = __webpack_require__(27);
let FoodSizeInput = class FoodSizeInput {
};
tslib_1.__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], FoodSizeInput.prototype, "name", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", Number)
], FoodSizeInput.prototype, "id", void 0);
FoodSizeInput = tslib_1.__decorate([
    (0, graphql_1.InputType)()
], FoodSizeInput);
exports.FoodSizeInput = FoodSizeInput;
let CreateFoodSizeInput = class CreateFoodSizeInput extends FoodSizeInput {
};
CreateFoodSizeInput = tslib_1.__decorate([
    (0, graphql_1.InputType)()
], CreateFoodSizeInput);
exports.CreateFoodSizeInput = CreateFoodSizeInput;
let UpdateFoodSizeInput = class UpdateFoodSizeInput extends FoodSizeInput {
};
tslib_1.__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsBoolean)(),
    tslib_1.__metadata("design:type", Boolean)
], UpdateFoodSizeInput.prototype, "isActive", void 0);
UpdateFoodSizeInput = tslib_1.__decorate([
    (0, graphql_1.InputType)()
], UpdateFoodSizeInput);
exports.UpdateFoodSizeInput = UpdateFoodSizeInput;


/***/ }),
/* 35 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Offer = exports.OfferItem = void 0;
const tslib_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(11);
const graphql_1 = __webpack_require__(10);
const query_graphql_1 = __webpack_require__(9);
const user_entity_1 = __webpack_require__(8);
const foodcategory_entity_1 = __webpack_require__(14);
let OfferItem = class OfferItem {
};
tslib_1.__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    tslib_1.__metadata("design:type", Number)
], OfferItem.prototype, "id", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)(),
    tslib_1.__metadata("design:type", String)
], OfferItem.prototype, "name", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], OfferItem.prototype, "image_data", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    tslib_1.__metadata("design:type", Number)
], OfferItem.prototype, "quantity", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    tslib_1.__metadata("design:type", Boolean)
], OfferItem.prototype, "selected", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    tslib_1.__metadata("design:type", typeof (_a = typeof foodcategory_entity_1.FoodCategory !== "undefined" && foodcategory_entity_1.FoodCategory) === "function" ? _a : Object)
], OfferItem.prototype, "category", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)({ defaultValue: true }),
    tslib_1.__metadata("design:type", Boolean)
], OfferItem.prototype, "status", void 0);
OfferItem = tslib_1.__decorate([
    (0, graphql_1.ObjectType)()
], OfferItem);
exports.OfferItem = OfferItem;
let Offer = class Offer {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, graphql_1.Field)(() => graphql_1.ID),
    tslib_1.__metadata("design:type", Number)
], Offer.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    (0, query_graphql_1.FilterableField)(),
    tslib_1.__metadata("design:type", String)
], Offer.prototype, "name", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'json', nullable: true }),
    (0, graphql_1.Field)(() => [OfferItem], { nullable: true }),
    tslib_1.__metadata("design:type", Array)
], Offer.prototype, "items", void 0);
tslib_1.__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    tslib_1.__metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Offer.prototype, "createddate", void 0);
tslib_1.__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    tslib_1.__metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], Offer.prototype, "updateddate", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ default: true }),
    (0, query_graphql_1.FilterableField)(),
    (0, graphql_1.Field)(),
    tslib_1.__metadata("design:type", Boolean)
], Offer.prototype, "status", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    (0, query_graphql_1.FilterableField)(),
    (0, graphql_1.Field)(),
    tslib_1.__metadata("design:type", Number)
], Offer.prototype, "price", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    (0, query_graphql_1.FilterableField)(),
    (0, graphql_1.Field)(),
    tslib_1.__metadata("design:type", Number)
], Offer.prototype, "totalPrice", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    (0, query_graphql_1.FilterableField)(),
    (0, graphql_1.Field)(),
    tslib_1.__metadata("design:type", Number)
], Offer.prototype, "discount", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'createdby' }),
    (0, graphql_1.Field)(() => user_entity_1.User, { nullable: true }),
    tslib_1.__metadata("design:type", typeof (_d = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _d : Object)
], Offer.prototype, "createdby", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'updatedby' }),
    (0, graphql_1.Field)(() => user_entity_1.User, { nullable: true }),
    tslib_1.__metadata("design:type", typeof (_e = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _e : Object)
], Offer.prototype, "updatedby", void 0);
Offer = tslib_1.__decorate([
    (0, typeorm_1.Entity)('combo_offer'),
    (0, graphql_1.ObjectType)(),
    (0, query_graphql_1.FilterableRelation)('createdby', () => user_entity_1.User, {
        nullable: true,
        disableRemove: true,
        disableUpdate: true,
    }),
    (0, query_graphql_1.FilterableRelation)('updatedby', () => user_entity_1.User, {
        nullable: true,
        disableRemove: true,
        disableUpdate: true,
    })
], Offer);
exports.Offer = Offer;


/***/ }),
/* 36 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OfferItemInput = exports.UpdateOfferInput = exports.CreateOfferInput = void 0;
const tslib_1 = __webpack_require__(1);
// create-offer.input.ts
const graphql_1 = __webpack_require__(10);
const class_validator_1 = __webpack_require__(27);
const user_input_1 = __webpack_require__(26);
const foodcategory_input_1 = __webpack_require__(32);
let CreateOfferInput = class CreateOfferInput {
};
tslib_1.__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], CreateOfferInput.prototype, "name", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)(() => [OfferItemInput]),
    tslib_1.__metadata("design:type", Array)
], CreateOfferInput.prototype, "items", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)(() => user_input_1.UserInput, { nullable: true }),
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", typeof (_a = typeof user_input_1.UserInput !== "undefined" && user_input_1.UserInput) === "function" ? _a : Object)
], CreateOfferInput.prototype, "createdby", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsBoolean)(),
    tslib_1.__metadata("design:type", Boolean)
], CreateOfferInput.prototype, "status", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    tslib_1.__metadata("design:type", Number)
], CreateOfferInput.prototype, "price", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    tslib_1.__metadata("design:type", Number)
], CreateOfferInput.prototype, "discount", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    tslib_1.__metadata("design:type", Number)
], CreateOfferInput.prototype, "totalPrice", void 0);
CreateOfferInput = tslib_1.__decorate([
    (0, graphql_1.InputType)({ isAbstract: true })
], CreateOfferInput);
exports.CreateOfferInput = CreateOfferInput;
let UpdateOfferInput = class UpdateOfferInput {
};
tslib_1.__decorate([
    (0, graphql_1.Field)(() => user_input_1.UserInput, { nullable: true }),
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", typeof (_b = typeof user_input_1.UserInput !== "undefined" && user_input_1.UserInput) === "function" ? _b : Object)
], UpdateOfferInput.prototype, "updatedby", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], UpdateOfferInput.prototype, "name", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)(() => [OfferItemInput], { nullable: true }),
    tslib_1.__metadata("design:type", Array)
], UpdateOfferInput.prototype, "items", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsBoolean)(),
    tslib_1.__metadata("design:type", Boolean)
], UpdateOfferInput.prototype, "status", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    tslib_1.__metadata("design:type", Number)
], UpdateOfferInput.prototype, "price", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    tslib_1.__metadata("design:type", Number)
], UpdateOfferInput.prototype, "discount", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    tslib_1.__metadata("design:type", Number)
], UpdateOfferInput.prototype, "totalPrice", void 0);
UpdateOfferInput = tslib_1.__decorate([
    (0, graphql_1.InputType)()
], UpdateOfferInput);
exports.UpdateOfferInput = UpdateOfferInput;
let OfferItemInput = class OfferItemInput {
};
tslib_1.__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", Number)
], OfferItemInput.prototype, "id", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], OfferItemInput.prototype, "name", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], OfferItemInput.prototype, "image_data", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    tslib_1.__metadata("design:type", Number)
], OfferItemInput.prototype, "quantity", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    tslib_1.__metadata("design:type", Boolean)
], OfferItemInput.prototype, "selected", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    tslib_1.__metadata("design:type", typeof (_c = typeof foodcategory_input_1.FoodCategoryInput !== "undefined" && foodcategory_input_1.FoodCategoryInput) === "function" ? _c : Object)
], OfferItemInput.prototype, "category", void 0);
OfferItemInput = tslib_1.__decorate([
    (0, graphql_1.InputType)()
], OfferItemInput);
exports.OfferItemInput = OfferItemInput;


/***/ }),
/* 37 */
/***/ ((module) => {

module.exports = require("@nestjs/apollo");

/***/ }),
/* 38 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.config = void 0;
const graphql_config_1 = __webpack_require__(39);
const jwt_config_1 = __webpack_require__(42);
const typeorm_config_1 = __webpack_require__(43);
exports.config = {
    // ignoreEnvFile: true,
    isGlobal: true,
    load: [typeorm_config_1.typeormConfig, graphql_config_1.graphqlConfig, jwt_config_1.jwtConfig],
};


/***/ }),
/* 39 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.graphqlConfig = exports.graphqlOptions = void 0;
// graphql.config.ts
const path_1 = __webpack_require__(40);
const environment_prod_1 = __webpack_require__(41);
const config_1 = __webpack_require__(25);
exports.graphqlOptions = {
    path: 'api/graphql',
    debug: true,
    playground: true,
    installSubscriptionHandlers: true,
    allowBatchedHttpRequests: true,
    autoSchemaFile: environment_prod_1.environment.processName.search(/primary/) !== -1 ? (0, path_1.join)(process.cwd(), 'schema.gql') : false,
    sortSchema: true,
    // driver: ApolloDriver,
    cors: {
        origin: '*',
        methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH', 'OPTIONS'],
        credentials: true,
    },
    resolvers: {},
};
exports.graphqlConfig = (0, config_1.registerAs)('graphql', () => exports.graphqlOptions);


/***/ }),
/* 40 */
/***/ ((module) => {

module.exports = require("path");

/***/ }),
/* 41 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.environment = void 0;
exports.environment = {
    production: true,
    processName: process.env.name ?? 'primary',
    url: process.env.URL ?? 'http://localhost:3000',
    imageUrl: process.env.IMAGE_URL ?? 'http://localhost:3000',
    oldImageUrl: process.env.OLD_IMAGE_URL ?? 'http://localhost:3000',
};


/***/ }),
/* 42 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.jwtConfig = exports.jwtOptions = void 0;
const config_1 = __webpack_require__(25);
exports.jwtOptions = {
    privateKey: 'MySuperSecureScret',
    secret: 'MySuperSecureScret',
    signOptions: {
        expiresIn: '5h',
    },
};
exports.jwtConfig = (0, config_1.registerAs)('jwt', () => exports.jwtOptions);


/***/ }),
/* 43 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.typeormConfig = exports.typeormOptions = void 0;
const config_1 = __webpack_require__(25);
const authenticate_entity_1 = __webpack_require__(12);
const foodtype_entity_1 = __webpack_require__(15);
const foodcategory_entity_1 = __webpack_require__(14);
const foodsize_entity_1 = __webpack_require__(16);
const combo_entity_1 = __webpack_require__(35);
const item_entity_1 = __webpack_require__(13);
const user_entity_1 = __webpack_require__(8);
// export const typeormOptions: TypeOrmModuleOptions = {
//   name: 'default',
//   type: 'mysql',
//   // entities: [__dirname+'/**/*.entity{.ts,.js}'],
//   host: process.env.DATABASE_HOST ?? 'localhost',
//   port: parseInt(process.env.DATABASE_PORT, 10) ?? 3306,
//   username: process.env.DATABASE_USER ?? 'root',
//   password: process.env.DATABASE_PASS ?? 'jaswanth',
//   database: process.env.DATABASE_DB ?? 'Inventery',
//   autoLoadEntities: true,
//   logging: false,
//   synchronize: true
// };
// for deployement
exports.typeormOptions = {
    type: 'mysql',
    host: process.env.DATABASE_HOST || 'inventery-db-jaswanth-db90.a.aivencloud.com',
    port: parseInt(process.env.DATABASE_PORT, 10) || 18378,
    username: process.env.DATABASE_USER || 'avnadmin',
    password: process.env.DATABASE_PASS || 'AVNS_LcWSTDLvOz8bld53FfY',
    database: process.env.DATABASE_DB || 'defaultdb',
    entities: [
        user_entity_1.User,
        authenticate_entity_1.Authenticate,
        item_entity_1.ItemEntity,
        foodcategory_entity_1.FoodCategory,
        foodtype_entity_1.FoodType,
        foodsize_entity_1.FoodSize,
        combo_entity_1.Offer
    ],
    synchronize: true
};
// database config for local connection
// export const typeormOptions: TypeOrmModuleOptions = {
//   // name: 'default',
//   type: 'mysql',
//   host: 'inventery-db-jaswanth-db90.a.aivencloud.com', // Provide the hostname directly
//   port: 18378, // Specify the port
//   username: 'avnadmin', // Provide the username directly
//   password: 'AVNS_LcWSTDLvOz8bld53FfY', // Provide the password directly
//   database: 'defaultdb', // Specify the database name
//   entities: [ 
//     User,
//     Authenticate,
//     ItemEntity,
//     FoodCategory,
//     FoodType,
//     FoodSize,
//     Offer],
//   // autoLoadEntities: true,
//   synchronize: true,
//   // logging: false,
// };
exports.typeormConfig = (0, config_1.registerAs)('typeorm', () => exports.typeormOptions);


/***/ }),
/* 44 */
/***/ ((module) => {

module.exports = require("express");

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const core_1 = __webpack_require__(3);
const app_module_1 = __webpack_require__(4);
const express = tslib_1.__importStar(__webpack_require__(44));
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: '*',
        methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH', 'OPTIONS'],
        credentials: true,
    });
    const globalPrefix = 'api';
    app.use(express.json({ limit: '10mb' }));
    app.setGlobalPrefix(globalPrefix);
    const port = process.env.PORT || 3000;
    await app.listen(port);
    common_1.Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
}
bootstrap();

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=main.js.map