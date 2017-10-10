
/*
    This class is responsible for generating the coordinates of various kinds
    of piano keys. These coordinates are normalized to fit within a [0, 0, 1, 1]
    svg viewbox. They will likely need to be scaled later.
    
    The names of the class's functions are based on the shape of
    piano keys, as follows:

    -----   <----- "TOP"
    |   |
    |   |   <--------------- Right-sided gap
    |   |
    |   |--   <--------- "MIDDLE", that is the gap's bottom
    |     |
    |     |
    |-----|   <------- "BOTTOM"
    
    This is the shape of a oneAccentRight piano key. "One" implies
    there is one gap at the top. "Accent" refers to which side (right or
    left) has the larger gap.

    To change the key sizes, simply adjust the specified coordinates. 

*/

import { Point } from './point';
import { Injectable } from '@angular/core';

const TOP = 0.0;        //Top of the 1X1 svg box.
const BOTTOM = 1.0;     //Bottom
const MIDDLE = 0.6;     // Middle -- as in the location of the gap's bottom.

@Injectable()
export class Key {
    private note: string;
    private sharp: boolean;
    private shape: Point[];
    constructor(note: string) {
        //Ensure that the note is of the form 'C' or 'C#'
        note = note.trim();

        if( !note || note.length > 2  ) {
            throw 'incorrect note format';
        }
        if( note.length == 2) {
            this.note = note.charAt(0);
            this.sharp = true;
        }
        else {
            this.note = note.charAt(0); 
            this.sharp = false;
        }

        //Create the key shape
        if( this.sharp == true ) {
            this.shape = this.blackKey();
        }
        else {
            switch(note) {
                case 'a': this.shape = this.bothAccentLeft();
                break;
                case 'b': this.shape = this.oneAccentLeft();
                break;
                case 'c': this.shape = this.oneAccentRight();
                break;
                case 'd': this.shape = this.bothAccentEqual();
                break;
                case 'e': this.shape = this.oneAccentLeft();
                break;
                case 'f': this.shape = this.oneAccentRight();
                break;
                case 'g': this.shape = this.bothAccentRight();
                break;
                default: this.shape = this.bothAccentEqual();
            }
        }

    }

    shiftX(amount: number) {
        this.shape.map( (point) => 
            point.shiftX(amount)
        );
    }
    shiftY(amount: number) {
        this.shape.map( (point) =>
            point.shiftY(amount)
        );
    }
    scale(factor: number) {
        this.shape.map( (point) => {
            point.scaleX(factor);
            point.scaleY(factor);

        });
    }

    //Spatial positioning convenience methods
    upperRightCorner(): Point {
        return this.shape
                    .filter( (point) => point.y == 0 )
                    .reduce( (max, point) => {
                        if( point.x > max.x ) {
                            return point
                        } else {
                            return max
                        }
                    });

    }
    lowerLeftCorner(): Point {
        return this.shape
                .filter( (point) => point.y == 1)
                .reduce ( (min, point) => {
                    if( point.x < min.x ) {
                        return point
                    } else {
                        return min
                    }
                });

    }

    //Conversion convenience functions
    asSvg(): string {
        return this.shape
                    .map( (point) => point.asArray().join(",") )
                    .join(" ");
    }

    private blackKey(): Point[] {
        return [
            new Point(0, 0),
            new Point(0, 0.6),
            new Point(0.13, 0.6),
            new Point(0.13, 0)
        ];
    }
    private bothAccentEqual(): Point[] {
        return [
                new Point(0.1, TOP),
                new Point(0.15, TOP),
                new Point(0.15, MIDDLE),
                new Point(0.25, MIDDLE),
                new Point(0.25, BOTTOM),
                new Point(0.0, BOTTOM),
                new Point(0.0, MIDDLE),
                new Point(0.1, MIDDLE),
        ]; 
    }
    private oneAccentLeft(): Point[] {
        return [
            new Point(0, MIDDLE),
            new Point(0.1, MIDDLE),
            new Point(0.1, TOP),
            new Point(0.25, TOP),
            new Point(0.25, BOTTOM),
            new Point(0.0, BOTTOM),
        ];
    } 
    private oneAccentRight(): Point[] {
        return [
            new Point(0.25, MIDDLE),
            new Point(0.15, MIDDLE),
            new Point(0.15, TOP),
            new Point(0.0, TOP),
            new Point(0.0, BOTTOM),
            new Point(0.25, BOTTOM),
        ];
    }
    private bothAccentLeft(): Point[] {
        return this.bothAccentEqual();
    }
    private bothAccentRight(): Point[] {
        return this.bothAccentEqual();
    }    
}
