package ma.fstt.service;

import ma.fstt.model.Category;
import ma.fstt.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {
    @Autowired
    private CategoryRepository categoryRepository;

    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }

    public Category getCategoryByName(String name) {
        return categoryRepository.findCategoryByName(name);
    }

    public void createCategory(Category cat) {
        Category category = new Category(cat.getName());
        categoryRepository.insert(category);
    }

    public void updateCategory(String id, Category cat) {
        categoryRepository.findById(id)
                .map(category -> {
                    category.setName(cat.getName());
                    return categoryRepository.save(category);
                })
                .orElseGet(() -> {
                    cat.setId(id);
                    return categoryRepository.save(cat);
                });
    }

    public void deleteCategory(String id) {
        categoryRepository.deleteById(id);
    }
}
