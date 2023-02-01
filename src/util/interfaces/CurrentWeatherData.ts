interface CurrentWeatherData {
    time: string,
    temperature_2m_symb: string,
    temperature_2m: number;
    apparent_temperature_symb: string,
    apparent_temperature: number,
    relativehumidity_2m: number,
    relativehumidity_2m_symb: string,
};

export default CurrentWeatherData;