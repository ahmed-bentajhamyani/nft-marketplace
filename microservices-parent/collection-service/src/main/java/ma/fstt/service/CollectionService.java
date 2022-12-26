package ma.fstt.service;

import ma.fstt.model.Collection;
import ma.fstt.repository.CollectionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CollectionService {
    @Autowired
    private CollectionRepository collectionRepository;

    public List<Collection> getAllCategories() {
        return collectionRepository.findAll();
    }

    public Collection getCollectionByName(String name) {
        return collectionRepository.findCategoryByName(name);
    }

    public void createCategory(Collection col) {
        Collection collection = new Collection(col.getName(), col.getDescription(), col.getItems(), col.getWebsite(), col.getDiscord(), col.getTwitter(), col.getCategoryName());
        collectionRepository.insert(collection);
    }

    public void updateCategory(String id, Collection col) {
        collectionRepository.findById(id)
                .map(collection -> {
                    collection.setName(col.getName());
                    return collectionRepository.save(collection);
                })
                .orElseGet(() -> {
                    col.setId(id);
                    return collectionRepository.save(col);
                });
    }

    public void deleteCategory(String id) {
        collectionRepository.deleteById(id);
    }
}
