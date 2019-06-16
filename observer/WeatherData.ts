import { Subject, Observer } from "./interface";

export class WeatherData implements Subject {

    private observers: Observer[] = [];

    private temperature: number;

    private humidity: number;

    private pressure: number;

    public registerobserver(observer: Observer): void {
        this.observers.push(observer);
    }
    public removeObserver(observer: Observer): void {
        this.observers.filter((ob: Observer) => {
            return JSON.stringify(ob.update) !== JSON.stringify(observer.update);
        });
    }

    public notifyObservers(): void {
        for (let observer of this.observers) {
            observer.update(this.temperature, this.humidity, this.pressure);
        }
    }


    public measurementsChanged(): void {
        this.notifyObservers();
    }



    public setMeasurementsChanged(temperature: number, humidity: number, pressure: number): void {
        //값이 세팅된다고 가정.
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.measurementsChanged();

    }
}