


export class Point {
    public x: number;
    public y: number;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    shiftX( amount ): void {
        this.x += amount;
    }
    shiftY( amount ): void {
        this.y += amount;
    }
    
    scaleX( factor ): void {
        this.x *= factor;
    }
    scaleY( factor ): void {
        this.y *= factor;
    }

    //Conversion convenience methods
    asArray(): number[] {
        return [this.x, this.y];
    }


}
