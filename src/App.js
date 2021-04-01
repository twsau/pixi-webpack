import { Application, Graphics } from 'pixi.js';
import './App.css';

const config = {
	antialias: true,
	height: 540,
	width: 990,
	view: document.querySelector('canvas')
}

export default class App extends Application {
	constructor() {
		super(config);
		// app logic goes here
		this.ticker.add(delta => this.update(delta));
	}
	update() {}
}