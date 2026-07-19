export class BitmapFont {
    image;
    glyphs = new Map();
    constructor(image, data) {
        this.image = image;
        this.parse(data);
    }
    parse(data) {
        const lines = data.split("\n");
        for (const line of lines) {
            if (!line.startsWith("char "))
                continue;
            const values = new Map();
            for (const part of line.trim().split(/\s+/)) {
                const [key, value] = part.split("=");
                if (key !== undefined && value !== undefined) {
                    values.set(key, Number(value));
                }
            }
            const id = values.get("id");
            if (id === undefined)
                continue;
            this.glyphs.set(id, {
                x: values.get("x"),
                y: values.get("y"),
                width: values.get("width"),
                height: values.get("height"),
                xOffset: values.get("xoffset"),
                yOffset: values.get("yoffset"),
                xAdvance: values.get("xadvance")
            });
        }
    }
    draw(context, text, x, y) {
        let cursorX = x;
        for (const char of text) {
            const glyph = this.glyphs.get(char.charCodeAt(0));
            if (!glyph)
                continue;
            context.drawImage(this.image, glyph.x, glyph.y, glyph.width, glyph.height, cursorX + glyph.xOffset, y + glyph.yOffset, glyph.width, glyph.height);
            cursorX += glyph.xAdvance;
        }
    }
    measure(text) {
        let width = 0;
        for (const char of text) {
            const glyph = this.glyphs.get(char.charCodeAt(0));
            if (glyph)
                width += glyph.xAdvance;
        }
        return width;
    }
}
//# sourceMappingURL=BitmapFont.js.map