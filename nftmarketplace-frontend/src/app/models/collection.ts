import { NFT } from "./nft";

export interface Collection {
    id?: string;
    name: string;
    description: string;
    items: number;
    website: string;
    discord: string;
    twitter: string;
    createdAt: Date;
    categoryName: string;
    username: String;
    imageName: String
}