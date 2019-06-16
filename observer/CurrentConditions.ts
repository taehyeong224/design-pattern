import { Observer, DisplayElement, Subject } from "./interface";

export class CurrentConditions implements Observer, DisplayElement{

	private temperature: number;

	private humidity: number;

	private weatherData: Subject;

	

	constructor(weatherData: Subject) {
		this.weatherData = weatherData;
		this.weatherData.registerobserver(this);
	}

	public display(): void {
		console.log("Current conditions : " + this.temperature + " , " + this.humidity);
	}

	public update(temp: number, humidity: number, pressure: number): void {
		this.temperature = temp;
		this.humidity = humidity;
		this.display();
	}

 }
