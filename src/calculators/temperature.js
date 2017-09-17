//(68°F - 32) × 5/9 = 20 °C

export function FahrenheitToCelsius (fahrenheit = 32) {
  return (fahrenheit - 32) * 5/9
}

export function CelsiusToFahrenheit (celsius = 0) {
  return (celsius * 1.8) + 32
}
