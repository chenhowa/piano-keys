
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

const TOP = 0.0;        //Top of the 1X1 svg box.
const BOTTOM = 1.0;     //Bottom
const MIDDLE = 0.6;     // Middle -- as in the location of the gap's bottom.

export class Keys {
    bothAccentEqual(): number[] {
        return [0.1, TOP,
                0.15, TOP,
                0.15, MIDDLE,
                0.25, MIDDLE,
                0.25, BOTTOM,
                0.0, BOTTOM,
                0.0, MIDDLE,
                0.1, MIDDLE]; 
    }
    oneAccentLeft(): number[] {
    return [0, MIDDLE,
            0.1, MIDDLE,
            0.1, TOP,
            0.25, TOP,
            0.25, BOTTOM,
            0.0, BOTTOM];
    } 
    oneAccentRight(): number[] {
        return [0.25, MIDDLE,
                0.15, MIDDLE,
                0.15, TOP,
                0.0, TOP,
                0.0, BOTTOM,
                0.25, BOTTOM]
    }
    bothAccentLeft(): number[] {
        return this.bothAccentEqual();
    }
    bothAccentRight(): number[] {
        return this.bothAccentEqual();
    }    

}
