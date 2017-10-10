/* This class is responsible for rending the piano keys and listening
 * for click or keyboard events on the keys.
 *
 * The class obtains the key shapes from a KeyService, and then
 * scales the keys to fit in the component's svg viewbox.
 *
 * The svg viewbox size should have a default, but also be determined
 * by the actual width of the viewport. How can I add that functionality?
 *
 *
 */

import { Component } from '@angular/core';
import { Keys } from './keys';

@Component({
    selector: 'piano-keys',
    template: `
        <h1>Let's play!</h1>
        <svg [attr.viewBox]="box">
            <g *ngFor="let key of keys">
                <polygon points={{"0,100 0,200 60,90 50,30"}} />
            </g>
        </svg>
    `,
    providers: [ Keys ],
})
export class PianoKeys {
    constructor(private keyService: Keys) {   }
    private keys: string[] = KEYS;
    private box: string = "0 0 250 250";
    generateKey(key: string): number[] {
        key = key.toLowerCase();
        switch(key) {
            //provide normalized key polygons that are all 1 unit high
            case 'a': return this.keyService.bothAccentLeft(); 
            case 'b': return this.keyService.oneAccentLeft();
            case 'c': return this.keyService.oneAccentRight();
            case 'd': return this.keyService.bothAccentEqual();
            case 'e': return this.keyService.oneAccentLeft();
            case 'f': return this.keyService.oneAccentRight();
            case 'g': return this.keyService.bothAccentRight();
        }
    }
    scaleKey(key: number[]): string {
        return 'hi';
    }
    renderKey(key: string): string {

        return this.scaleKey( this.generateKey(key) );
    }

}

const KEYS = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
