import CurrentWeatherData from "../interfaces/CurrentWeatherData";
import WeatherData from "../interfaces/WeatherData";

const getCurrentData = (data: WeatherData, index: number) => {
    const currentData: CurrentWeatherData = {
      time: data.hourly.time[index],
      temperature_2m: data.hourly.temperature_2m[index],
      temperature_2m_symb: data.hourly_units.temperature_2m,
      relativehumidity_2m: data.hourly.relativehumidity_2m[index],
      relativehumidity_2m_symb: data.hourly_units.relativehumidity_2m,
      apparent_temperature: data.hourly.apparent_temperature[index],
      apparent_temperature_symb: data.hourly_units.apparent_temperature
    }

    return currentData;
};

export default getCurrentData;