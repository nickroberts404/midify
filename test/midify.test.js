import { expect } from 'chai';

describe('midify.js', () => {
	let midiAccess = null;
	before(() => {
		return navigator.requestMIDIAccess()
			.then(a => midiAccess = a, a => console.error('MIDI Access denied'))
			.catch(err => console.error(err))
	})
	it('should pass', () => {
		expect(true).to.be.true;
	})
	it('should have midi access', () => {
		expect(midiAccess).to.not.be.null;
	})
})