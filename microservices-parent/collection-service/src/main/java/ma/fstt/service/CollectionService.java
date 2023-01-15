package ma.fstt.service;

import ma.fstt.model.Collection;
import ma.fstt.repository.CollectionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class CollectionService {
    @Autowired
    private CollectionRepository collectionRepository;

    public List<Collection> getAllCollections() {
        return collectionRepository.findAll();
    }

    public Collection getCollectionByName(String name) {
        return collectionRepository.findCollectionByName(name);
    }

    public List<Collection> getCollectionsByWalletAddress(String walletAddress) {
        return collectionRepository.findCollectionsByWalletAddress(walletAddress);
    }

    public void createCollection(Collection col) {
        Collection collection = new Collection(col.getName(), col.getDescription(), col.getItems(), col.getWebsite(), col.getDiscord(), col.getTwitter(), LocalDate.now(), col.getCategoryName(), col.getWalletAddress(), col.getImageName());
        collectionRepository.insert(collection);
    }

    public void updateCollection(String id, Collection col) {
        collectionRepository.findById(id)
                .map(collection -> {
                    collection.setName(col.getName());
                    collection.setDescription(col.getDescription());
                    collection.setItems(col.getItems());
                    collection.setWebsite(col.getWebsite());
                    collection.setDiscord(col.getDiscord());
                    collection.setTwitter(col.getTwitter());
                    collection.setCategoryName(col.getCategoryName());
                    collection.setWalletAddress(col.getWalletAddress());
                    collection.setImageName(col.getImageName());
                    return collectionRepository.save(collection);
                })
                .orElseGet(() -> {
                    col.setId(id);
                    return collectionRepository.save(col);
                });
    }

    public void deleteCollection(String id) {
        collectionRepository.deleteById(id);
    }
}
