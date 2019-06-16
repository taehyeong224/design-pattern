export interface Subject {

    registerobserver(observer: Observer): void;

    removeObserver(observer: Observer): void;

    notifyObservers(): void;
} 



export interface Observer {
    update(temp: number, humidity: number, pressure: number): void;
}



export interface DisplayElement {
    display(): void;
}