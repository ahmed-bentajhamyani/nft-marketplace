package ma.fstt.controller;

import ma.fstt.model.NFT;
import ma.fstt.service.NFTService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/api/nfts")
@CrossOrigin(origins = "http://localhost:4200")
public class NFTController {
    @Autowired
    private NFTService nftService;

    @GetMapping
    public List<NFT> getNFT() {
        return nftService.getAllNFTs();
    }

    @GetMapping("/{id}")
    public Optional<NFT> getOneNFT(@PathVariable String id) {
        return nftService.getNftById(id);
    }

    @GetMapping("/{collectionName}")
    public NFT[] findByCollectionName(@PathVariable String collectionName) {
        return nftService.getNFTByCollectionName(collectionName);
    }

    @PostMapping
    public void saveNFT(NFT nft) {
        nftService.createNFT(nft);
    }

    @PutMapping
    public void updateNFT(@RequestBody NFT nft, @PathVariable String id) {
        nftService.updateNFT(id, nft);
    }

    @DeleteMapping("/{id}")
    public void deleteNFT(@PathVariable String id) {
        nftService.deleteNFT(id);
    }
}
