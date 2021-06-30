// let weatherURL = 'https://api.openweathermap.org/data/2.5/weather?q=Bishkek&lang=ru&appid=f5d9234be1bfda95ccf0f5b0a787d029'
// let btn = document.querySelector('#btn').addEventListener('click', function(){
//     fetch(weatherURL)
//     .then(function(weather){
//         return weather.json()
//     })
//     .then(function(data){
        
//         let $pogoda = document.querySelector('#pogoda')
//         $pogoda.insertAdjacentHTML ('beforeend',`<h1>Bishkek today:<img src ="https://openweathermap.org/img/wn/03d@2x.png"> <br>${data.main.temp} температура по Кельвина</h1> <h1> Скорость ветра: ${data.wind.speed} метра в секунду</h1> <h1> Температура воздуха: ${data.wind.deg} по Кельвина</h1>`)
//         console.log(data)    
//     })
//     let hourly = 'https://api.ambeedata.com/weather/latest/by-lat-lng?lat=12&lng=77'
//     fetch(hourly)
//     .then(function(hour){
//         return hour.json()
//         console.log(hour)
//     })
//     // .then (function(hour){
//     //     console.log(hour)
//     // })
// })

// let btn = document.querySelector('#btn').addEventListener('click', function(){
// fetch("https://yahoo-weather5.p.rapidapi.com/weather?lat=42.87&long=74.59&format=json&u=c", {
//   "method": "GET",
//   "headers": {
//     "x-rapidapi-key": "4613906626msh3ef3a52f788ce0fp1c01e0jsn96ef5dec1531",
//     "x-rapidapi-host": "yahoo-weather5.p.rapidapi.com"
//   }
// })
// 	.then(function(response){
//   		// console.log(response);
//     	return response.json()
// })

// 	.then(function(data){
//   		console.log(data)
// 		  let $pogoda = document.querySelector('#pogoda')
// 	          $pogoda.insertAdjacentHTML ('beforeend',`<h1>Bishkek today:<img src ="https://openweathermap.org/img/wn/03d@2x.png"> <br><h2>Температура в городе :${}`)
// 		      console.log(data) 


// 	})
// })




fetch("https://community-open-weather-map.p.rapidapi.com/forecast/daily?q=bishkek%2CKyrgyzstan&lat=42.87&lon=74.59&cnt=15&units=metric%20or%20imperial&lang=ru", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "4613906626msh3ef3a52f788ce0fp1c01e0jsn96ef5dec1531",
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
	  return response.json()
  })
  .then(data =>{
	console.log(data)
  })
  .catch(err => {
	console.error(err);
  });







