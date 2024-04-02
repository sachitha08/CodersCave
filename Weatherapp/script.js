const apiKey = '4697c407d4c7456315ad99cb7d0e7221';
const input = document.getElementById("city");
const search = document.getElementById("search");
const details = document.getElementById("details");

search.addEventListener('click', () => {
    const city = input.value;
    weather(city);
});

function weather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            return response.json();
        })
        .then(data => {
            const info = `
                <h3>${data.name}, ${data.sys.country}</h3>
                ${data.weather[0].description} <br>
                Temperature: ${data.main.temp}°C <br>
                Humidity: ${data.main.humidity}%
            `;
            details.innerHTML = info;
            input.value = "";
        })
        .catch(error => {
            console.log("Error:", error);
            details.innerHTML = "Failed to fetch the data";
        });
}
