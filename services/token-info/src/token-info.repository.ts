import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, FilterQuery } from "mongoose";
import { TokenInfo, TokenInfoDocument } from "./schema/tis.schema";

Injectable()
export class TokenInfoRepository {
    constructor(@InjectModel(TokenInfo.name) private tisModel: Model<TokenInfoDocument>) {}

    async findOne(filter: FilterQuery<TokenInfo>): Promise<TokenInfo> {
        return this.tisModel.findOne(filter);
    }

    async find(filter: FilterQuery<TokenInfo>): Promise<TokenInfo[]> {
        return this.tisModel.find(filter);
    }

    async create(tis: TokenInfo): Promise<TokenInfo> {
        const createdTis = new this.tisModel(tis);
        return createdTis.save();
    }

    async findOneAndUpdate(filter: FilterQuery<TokenInfo>, tis: Partial<TokenInfo>): Promise<TokenInfo> {
        return this.tisModel.findOneAndUpdate(filter, tis, { new: true });
    }

    async findOneAndDelete(filter: FilterQuery<TokenInfo>): Promise<TokenInfo> {
        return this.tisModel.findOneAndDelete(filter);        
    }

}