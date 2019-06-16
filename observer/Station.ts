import { WeatherData } from "./WeatherData";
import { CurrentConditions } from "./CurrentConditions";
import { StatisticsDisplay } from "./StatisticsDisplay";
import { ForecastDisplay } from "./ForecastDisplay";
import { Play } from "../Play";

export class Station extends Play {
    public main(): void {
        const weatherData = new WeatherData();
        const currentConditions = new CurrentConditions(weatherData);
        const statisticsDisplay = new StatisticsDisplay(weatherData);
        const forecastDisplay = new ForecastDisplay(weatherData);

        weatherData.setMeasurementsChanged(85, 62, 36.7);
        weatherData.setMeasurementsChanged(1, 1, 1.7);

        console.log("remove observer")
        weatherData.removeObserver(statisticsDisplay);
        weatherData.setMeasurementsChanged(2, 2, 2.7);
    }
}
