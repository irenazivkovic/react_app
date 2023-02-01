interface WeatherData {
    elevation: number,
    generationtime_ms: number,
    hourly: {
      apparent_temperature: number[],
      relativehumidity_2m: number[],
      temperature_2m: number[],
      time: string[]
    },
    hourly_units: {
      apparent_temperature: string,
      relativehumidity_2m: string,
      temperature_2m: string,
      time: string
    },
    latitude: number,
    longitude: number,
    timezone: string,
    timezone_abbreviation: string,
    utc_offset_seconds: number
};

export default WeatherData;