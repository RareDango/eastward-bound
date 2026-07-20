export class AssetManager {
  private images = new Map<string, HTMLImageElement>();

  async loadImage(name: string, path: string): Promise<void> {
    const image = new Image();
    image.src = path;
    await image.decode();
    this.images.set(name, image);
  }

  getImage(name: string): HTMLImageElement {
    const image = this.images.get(name);
    if (!image) {
        throw new Error(`Image '${name}' has not been loaded.`);
    }
    return image;
  }

  async assetsLoaded(): Promise<void> {
    await Promise.all([
      this.loadImage("battleBg", "assets/background.png")
    ]);
    console.log("Assets loaded!")
    return;
  }
}