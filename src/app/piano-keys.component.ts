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
 * NEXT TIME. SET UP UNIT TESTS FOR THIS CLASS
 *
 */

import { Component } from '@angular/core';
import { Key } from './keys';
import { OnInit } from '@angular/core';

@Component({
    selector: 'piano-keys',
    template: `
        <h1>Let's play!</h1>
        <svg [attr.viewBox]="box">
            <g *ngFor="let key of keys; let i=index">
                <polygon [attr.points]="generateKey(key)"
                [attr.transform]="renderKey(i)"/>
            </g>
        </svg>
    `,
})
export class PianoKeys implements OnInit {
    private keys: string[] = KEYS;
    private box: string = "0 0 250 250";
    private height: number = HEIGHT;
    private width: number = WIDTH;

    ngOnInit(): void {

    }

    generateKey(key: string): string {
        let keyObj = new Key(key);
        return keyObj.asSvg();
    }

    renderKey(index: number): string {
        let num = 0.6 * index;
        return "scale(50 50) translate(" + num + ")";
    }



}

const HEIGHT = 250;
const WIDTH = 500;
const KEYS = [
    'a', 'a#', 'b', 'c', 'c#',
    'd', 'd#', 'e', 'f', 'f#',
    'g', 'g#'
];
