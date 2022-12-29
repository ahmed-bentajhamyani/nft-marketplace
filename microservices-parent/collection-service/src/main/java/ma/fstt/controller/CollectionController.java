package ma.fstt.controller;

import ma.fstt.model.Collection;
import ma.fstt.service.CollectionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/collections")
@CrossOrigin(origins = "http://localhost:4200")
public class CollectionController {
    @Autowired
    private CollectionService collectionService;

    @GetMapping
    public List<Collection> getAllCategories() {
        return collectionService.getAllCollections();
    }

    @GetMapping("/{name}")
    public Collection getCollectionByName(@PathVariable String name) {
        return collectionService.getCollectionByName(name);
    }

    @PostMapping
    public void createCategory(@RequestBody Collection collection) {
        collectionService.createCollection(collection);
    }

    @PutMapping("/{id}")
    public void updateCategory(@PathVariable String id, @RequestBody Collection collection) {
        collectionService.updateCollection(id, collection);
    }

    @DeleteMapping("/{id}")
    public void deleteCategory(@PathVariable String id) {
        collectionService.deleteCollection(id);
    }
}
