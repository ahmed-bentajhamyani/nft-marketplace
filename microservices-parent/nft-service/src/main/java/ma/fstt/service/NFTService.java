package ma.fstt.service;

import ma.fstt.model.NFT;
import ma.fstt.repository.NFTRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class NFTService {

    @Autowired
    private NFTRepository nftRepository;

    public List<NFT> getAllNFTs() {
        return nftRepository.findAll();
    }

    public NFT[] getNFTByCollectionName(String collectionName) {
        return nftRepository.findNFTByCollectionName(collectionName);
    }

    public Optional<NFT> getNftById(String id) {
        return nftRepository.findById(id);
    }

    public void createNFT(NFT nft) {
        nftRepository.save(nft);
    }

    public NFT updateNFT(String id, NFT nft) {
        return nftRepository.findById(id).map(x -> {
            x.setImage(nft.getImage());
            x.setName(nft.getName());
            x.setPrise(nft.getPrise());
            return nftRepository.save(x);
        }).orElseGet(() -> {
            nft.setId(id);
            return nftRepository.save(nft);
        });
    }

    public void deleteNFT(String id) {
        nftRepository.deleteById(id);
    }


}
