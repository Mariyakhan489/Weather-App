let input = document.querySelector("input")
let btn = document.querySelector("button")
let city = document.querySelector(".city")
let temp = document.querySelector(".temp")
let img = document.querySelector("img")
let desc = document.querySelector(".desc")

btn.addEventListener("click", () => {
    let cityName = input.value

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=560dc8bfa2794a7872a2c953177e7dd9&units=metric`)
        .then(response => response.json())
        .then(data => {
            console.log(data)

            if (data.cod !== 200) {
                city.textContent = "Error"
                temp.textContent = "--°C"
                desc.textContent = "City not found"
                return
            }

            city.textContent = data.name
            temp.textContent = data.main.temp + "°C"
            desc.textContent = data.weather[0].main
            let condition = data.weather[0].main.toLowerCase()

            if (condition === "clear") {
                img.src = "images/clear.png"  
            }

              else if (condition === "rain") {
                img.src= "images/rain.png" 
            }

             else if (condition === "clouds") {
                img.src="images/clouds.png"
            }
            else if (condition === "drizzle") {
              img.src="images/drizzle.png"
               
            }
              else if (condition === "haze") {
              img.src="images/haze.png"
               
            }
               else if (condition === "snow") {
              img.src="images/snow.png"
               
            }
               else if (condition === "mist") {
              img.src="images/mist.png"
               
            }
    
            else {
              img.src = "images/default.png"
            }
            })
})