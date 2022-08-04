window.addEventListener('load', () => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');
    let setIcons = document.querySelector('.icon');
    let degreeSection = document.querySelector('.temperature');
    let degreeSpan = document.querySelector('.temperature span')

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat}%2C%20${long}?iconSet=icons1&unitGroup=metric&include=current&key=LZD9LGDFPNA67DF6HEFLPHVNS&contentType=json`


            fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data =>{
                const {temp, conditions, icon} = data.currentConditions;

                temperatureDegree.textContent = temp;
                temperatureDescription.textContent = conditions;
                locationTimezone.textContent = data.timezone;
                setIcons.innerHTML = `<img src="icons/${icon}.svg" alt="Icon">`;
                // C F Formula
                let fahrenheit = (temp) * (9/5) + 32;

                // C F switch
                degreeSection.addEventListener('click', () => {
                    if(degreeSpan.textContent === "C") {
                        degreeSpan.textContent = "F";
                        temperatureDegree.textContent = Math.floor(fahrenheit);
                    }
                    else {
                        degreeSpan.textContent = "C";
                        temperatureDegree.textContent = temp;
                    }
                })
            })
        });
    }
    else {
        h1.textContent = "It won't work without allowing the browser to use your location."
    }
});
