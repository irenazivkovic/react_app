import CurrentWeatherData from "../interfaces/CurrentWeatherData";
import WeatherData from "../interfaces/WeatherData";
import getCurrentData from "./getCurrentData";
import getCurrentTime from "./getCurrentTime";

const formatData = (data: WeatherData): CurrentWeatherData => {
    const currentTime = getCurrentTime();
    const currentIndex = data.hourly.time.findIndex((time) => {
      if(time === currentTime) {
        return true;
      }
    });
    
    const formatedData: CurrentWeatherData = getCurrentData(data, currentIndex);

    return formatedData;
};

export default formatData;