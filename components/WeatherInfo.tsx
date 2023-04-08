import styles from './WeatherInfo.module.css';

type WeatherInfoProps = {
  city: string;
  temp: number;
  feels_like: number;
  humidity: number;
  description: string;
};

const WeatherInfo: React.FC<WeatherInfoProps> = ({ city, temp, feels_like, humidity, description }) => {
  return (
    <div className={styles.weatherInfo}>
      <h2>{city} の天気</h2>
      <p>現在の気温: {temp}°C</p>
      <p>体感気温: {feels_like}°C</p>
      <p>湿度: {humidity}%</p>
      <p>天気: {description}</p>
    </div>
  );
};

export default WeatherInfo;
