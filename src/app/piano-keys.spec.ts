

import { PianoKeys } from './piano-keys.component';
import { Keys } from './keys';

describe('Keys: generation to rendering as svg', () => {
    let piano: PianoKeys = new PianoKeys(new Keys());
    let keyService: Keys = new Keys();

    it('#generateKey should return correct key', () => {
        expect(piano.generateKey('A')).toEqual(keyService.bothAccentLeft()); 
        expect(piano.generateKey('B')).toEqual(keyService.oneAccentLeft());
        expect(piano.generateKey('C')).toEqual(keyService.oneAccentRight());
        expect(piano.generateKey('D')).toEqual(keyService.bothAccentEqual());
        expect(piano.generateKey('E')).toEqual(keyService.oneAccentLeft());
        expect(piano.generateKey('F')).toEqual(keyService.oneAccentRight());
        expect(piano.generateKey('G')).toEqual(keyService.bothAccentRight());
    });

})
