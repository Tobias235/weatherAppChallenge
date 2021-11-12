const ImageFilter = (weatherImage) => {
  const Clear = "Clear.png";
  const LightCloud = "LightCloud.png";
  const Snow = "Snow.png";
  const Thunderstorm = "Thunderstorm.png";
  const HeavyCloud = "HeavyCloud.png";
  const HeavyRain = "HeavyRain.png";
  const Shower = "Shower.png";

  switch (weatherImage) {
    case "01d":
    case "01n":
      return Clear;

    case "02d":
    case "02n":
    case "03d":
    case "03n":
    case "04d":
    case "04n":
      return LightCloud;

    case "50d":
    case "50n":
      return HeavyCloud;

    case "13d":
    case "13n":
      return Snow;

    case "11d":
    case "11n":
      return Thunderstorm;

    case "09d":
    case "09n":
      return HeavyRain;

    case "10d":
    case "10n":
      return Shower;

    default:
      return Clear;
  }
};

export default ImageFilter;
