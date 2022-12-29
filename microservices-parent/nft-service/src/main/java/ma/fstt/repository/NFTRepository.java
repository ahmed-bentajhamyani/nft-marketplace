package ma.fstt.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import ma.fstt.model.NFT;

public interface NFTRepository extends MongoRepository<NFT, String> {

    @Query("{name:'?0'}")
    NFT findNftByName(String name);

    @Query("{collectionName:'?0'}")
    NFT[] findNFTByCollectionName(String collectionName);
}
