import axios, { AxiosError } from 'axios';

const API_KEY = '3eaa19fd5e5871ab70302aa084d0f1a1'; // 先ほど取得したAPIキーを入力

interface WeatherResponse {
  data: {
    name: string;
    main: {
      temp: number;
      feels_like: number;
      humidity: number;
    };
    weather: [
      {
        main: string;
      }
    ];
  };
}

const fetchWeatherData = async (city: string): Promise<WeatherResponse['data'] | null> => {
  try {
    const response = await axios.get<WeatherResponse['data']>(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );

    if (response.status === 200) {
      return response.data;
    } else {
      console.error('Error:', response.status, response.statusText);
      return null;
    }
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      console.error('Error:', error.message);
    } else {
      console.error('Error:', error);
    }
    return null;
  }
};

export default fetchWeatherData;