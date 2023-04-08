import type { NextPage } from 'next';
import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import WeatherInfo from '../components/WeatherInfo';
import fetchWeatherData from '../lib/fetchWeatherData';

const Home: NextPage = () => {
  const [weatherData, setWeatherData] = useState<{
    city: string;
    temp: number;
    feels_like: number;
    humidity: number;
    description: string;
  } | null>(null);

  const handleSearch = async (city: string) => {
    const data = await fetchWeatherData(city);
    if (data) {
      setWeatherData({
        city: data.name,
        temp: data.main.temp,
        feels_like: data.main.feels_like,
        humidity: data.main.humidity,
        description: data.weather[0].main,
      });
    } else {
      alert('Failed to fetch weather data. Please try again.');
    }
  };

  return (
    <div className="container">
      <SearchBar onSearch={handleSearch} />
      {weatherData && (
        <WeatherInfo
          city={weatherData.city}
          temp={weatherData.temp}
          feels_like={weatherData.feels_like}
          humidity={weatherData.humidity}
          description={weatherData.description}
        />
      )}
    </div>
  );
};

export default Home;
