import { Observer, DisplayElement, Subject } from "./interface";

export class ForecastDisplay implements Observer, DisplayElement{

	private temperature: number;

	private humidity: number;

	private weatherData: Subject;

	

	constructor(weatherData: Subject) {
		this.weatherData = weatherData;
		this.weatherData.registerobserver(this);
	}

	public display(): void {
		console.log("ForecastDisplay conditions : " + this.temperature + " , " + this.humidity);
	}

	public update(temp: number, humidity: number, pressure: number): void {
		this.temperature = temp;
		this.humidity = humidity;
		this.display();
	}

 }
