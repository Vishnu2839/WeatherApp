var temp =document.querySelector(".temp");
var city=document.querySelector(".city-name");
var desc =document.querySelector(".desc");
var input=document.querySelector("#inputValue");

input.addEventListener('keypress', function(e){
 if (e.key === 'Enter'){
    findweather();
  }

})
function findweather(){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=06f24d0de2580b6656c9cc5d9ee28f70')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var name = data['name'];
  var descValue = data['weather'][0]['description'];

  var temperature= tempValue.toPrecision(2);

  city.innerHTML= name;
  temp.innerHTML = temperature-273 +"°C";
  desc.innerHTML = descValue;
  console.log(data);
})
 
 .catch(err => alert("Wrong city name!"));
}







//   if (e.key === 'Enter') {
//       let api = 'http://api.openweathermap.org/data/2.5/weather?q='+ input.value +' &appid=06f24d0de2580b6656c9cc5d9ee28f70';
//     fetch(api) 
//     .then( function(respose){
//        let data = respose.json();
//        return data;
//      })
//     .then(function(data){
//       var tempValue= data['main']['temp'];
//       var cityName= data['name'];
//       var descValue = data['weather'][0]['description'];

//       cityName.innerHTML = cityName;
//       descValue.innerHTML = descValue;
//       tempValue.innerHTML = tempValue;
//       input.value ="";


//      })  
//     .catch(err => alert("Wrong City name"));
     
//   }
// });
