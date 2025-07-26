import { Vector2 } from "./vector2";

export class Sprite {
    constructor ({
        resource, //image we want to draw
        frameSize, //size of the crop of the image
        hFrames, //how the sprite is arranged horizontally
        vFrames, //how the sprite is arranged vertically
        frame, //which frame we want to show
        scale, //how large to draw the image
        position, //where to draw it (top left corner)
    }) {
        this.resource = resource;
        this.frameSize = frameSize ?? new Vector2(16,16)
        this.hFrames = hFrames ?? 1;
        this.vFrames = vFrames ?? 1;
        this.frame = frame ?? 0;
        this.frameMap = new Map();
        this.scale = scale ?? 1;
        this.position = position ?? new Vector2(0,0)
        this.buildFrameMap()
    }

    buildFrameMap() {
        let frameCount = 0;
        //vertical sprite sheet frames
        for (let v=0; v<this.vFrames; v++){
            for (let h=0; h<this.hFrames; h ++){
                // console.log("frame", h, v)
                this.frameMap.set(
                    frameCount,
                    new Vector2(this.frameSize.x * h, this.frameSize.y * v)
                )
                frameCount++;
            }
        }
    }

    drawImage(ctx, x, y){
        
    }
}