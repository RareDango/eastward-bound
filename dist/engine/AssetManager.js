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
        await Promise.all([
            this.loadImage("font", "assets/fonts/font.png"),
            this.loadImage("battleBg", "assets/background.png")
        ]);
        console.log("Assets loaded!");
        return;
    }
}
//# sourceMappingURL=AssetManager.js.map