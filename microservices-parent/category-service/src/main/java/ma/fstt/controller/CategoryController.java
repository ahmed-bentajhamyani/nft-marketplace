package ma.fstt.controller;

import ma.fstt.model.Category;
import ma.fstt.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
@CrossOrigin(origins = "http://localhost:4200")
public class CategoryController {
    @Autowired
    private CategoryService categoryService;

    @GetMapping
    public List<Category> getAllCategories() {
        return categoryService.getAllCategories();
    }

    @GetMapping("/{name}")
    public Category getCategoryByName(@PathVariable String name) {
        return categoryService.getCategoryByName(name);
    }

    @PostMapping
    public void createCategory(@RequestBody Category category) {
        categoryService.createCategory(category);
    }

    @PutMapping("/{id}")
    public void updateCategory(@PathVariable String id, @RequestBody Category category) {
        categoryService.updateCategory(id, category);
    }

    @DeleteMapping("/{id}")
    public void deleteCategory(@PathVariable String id) {
        categoryService.deleteCategory(id);
    }
}
