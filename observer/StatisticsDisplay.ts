import { Observer, DisplayElement, Subject } from "./interface";

export class StatisticsDisplay implements Observer, DisplayElement{

	private temperature: number;

	private humidity: number;

	private weatherData: Subject;

	

	constructor(weatherData: Subject) {
		this.weatherData = weatherData;
		this.weatherData.registerobserver(this);
	}

	public display(): void {
		console.log("StatisticsDisplay : " + this.temperature + " , " + this.humidity);
	}

	public update(temp: number, humidity: number, pressure: number): void {
		this.temperature = temp;
		this.humidity = humidity;
		this.display();
	}

 }
