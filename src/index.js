import App from './App.js';
import { Loader, utils } from 'pixi.js';
import * as WebFont from 'webfontloader';
const loader = Loader.shared;

const manifest = {

};

// preload
for (const [key, value] of Object.entries(manifest)) {
	loader.add(key, value);
}

// launch
loader.load(() => {
	WebFont.load({
		google: {
			families: [
				'Press Start 2P'
			]
		},
		active: e => {
			utils.skipHello();
			const app = new App();
		}
	});
});