package ma.fstt.controller;

import ma.fstt.model.Image;
import ma.fstt.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/api/image")
@CrossOrigin(origins = "http://localhost:4200")
public class ImageController {
    @Autowired
    private ImageService imageService;

    @PostMapping
    public void uploadImage(@RequestParam("imageFile") MultipartFile file) throws IOException {
        System.out.println("hey");
        imageService.uplaodImage(file);
    }

    @GetMapping("/{name}")
    public Image getImage(@PathVariable String name) throws IOException {
        return imageService.getImage(name);
    }

    @DeleteMapping("/{imageName}")
    public void deleteImage(@PathVariable String imageName) {
        imageService.deleteImage(imageName);
    }
}
