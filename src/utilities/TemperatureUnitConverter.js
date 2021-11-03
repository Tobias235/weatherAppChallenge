const TemperatureUnitConverter = (unit, tempMin, tempMax) => {
  const currentUnit = unit;
  if (currentUnit === "°F" && tempMin && tempMax) {
    let min = tempMin * 1.8 + 32;
    let max = tempMax * 1.8 + 32;
    return {
      min,
      max,
    };
  }
  return {
    min: tempMin,
    max: tempMax,
  };
};

export default TemperatureUnitConverter;
