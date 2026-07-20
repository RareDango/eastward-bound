export class AssetManager {
    images = new Map();
    async loadImage(name, path) {
        const image = new Image();
        image.src = path;
        await image.decode();
        this.images.set(name, image);
    }
    getImage(name) {
        const image = this.images.get(name);
        if (!image) {
            throw new Error(`Image '${name}' has not been loaded.`);
        }
        return image;
    }
    async assetsLoaded() {
        this.loadImage("battleBg", "../assets/bg.png");
        return;
    }
}
//# sourceMappingURL=AssetManager.js.map