import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// List of images to resize
const images = [
    '01.jpg',
    '02.jpg',
    '03.jpg',
    '04.jpg',
    '05.jpg'
];

// Input and output directories
const inputDir = path.join(__dirname, 'public');
const outputDir = path.join(__dirname, 'public', 'resized');

const resizeImages = async () => {
    const width = 1200; // Increased width
    const height = 1200; // Increased height

    for (const image of images) {
        const inputPath = path.join(inputDir, image);
        const outputPath = path.join(outputDir, image);

        try {
            await sharp(inputPath)
                .resize(width, height, {
                    fit: 'inside',
                })
                .toFile(outputPath);

            console.log(`Resized ${image} and saved to ${outputPath}`);
        } catch (error) {
            console.error(`Error resizing ${image}:`, error);
        }
    }
};

resizeImages();