export const base_url = `https://api.openweathermap.org/data/2.5/weather`;

function getPosition(){
    const position = new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    })
    return position
}

const API_KEY = `927c514bb143c1172762ec8b664a485e`;

export async function getWeatherData(){
    const positionValue = await getPosition();
    const {latitude, longitude} = positionValue.coords;
    const data = await fetch(`${base_url}?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`);
    const weatherData = await data.json();
    console.log(weatherData); //Viewing Data
    return weatherData;
}

export async function getWeatherDataCustom(place){
    const customData = await fetch(`${base_url}?q=${place}`);
    const customWeatherData = await customData.json();
    console.log(customWeatherData); //Viewing Data
    return customWeatherData;
}