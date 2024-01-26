
import './App.css';
import { useState } from 'react';

import searchicon from './Assets/searchicon.svg'
import clouday from './Assets/clouday.jpg'
import cloudnight from './Assets/cloudnight.jpg'
import clearday from './Assets/clearday.jpg'
import clearnight from './Assets/clearnight.jpg'
import mistday from './Assets/mistday.jpg'
import mistnight from './Assets/mistnight.jpg'
import thunderday from './Assets/thunderday.jpg'
import thundernight from './Assets/thundernight.jpg'
import snowday from './Assets/snowday.jpg'
import snownight from './Assets/snownight.jpg'
import rainight from './Assets/rainight.jpg'
import rainday from './Assets/rainday.jpg'

function App() {
  let apikey='a576187c1463c35a4375723cf13e8f36'
  const [icon,setIcon]=useState(clouday)
  const search=async ()=>{
  const place=document.getElementsByClassName('input')
  if(place[0].value==='')
    return 0;
  let url=`https://api.openweathermap.org/data/2.5/weather?q=${place[0].value}&units=Metric&appid=${apikey}`
  let response=await fetch(url)
  let data=await response.json()
  const feels=document.getElementsByClassName('feelsinfo')
  const humidity=document.getElementsByClassName('humidinfo')
  const wind=document.getElementsByClassName('windinfo')
  const visibility=document.getElementsByClassName('visibleinfo')
  const temperature=document.getElementsByClassName('temp')
  const city=document.getElementsByClassName('location')
  const description=document.getElementsByClassName('desc')

  feels[0].innerHTML=data.main.feels_like+'°C'
  humidity[0].innerHTML=data.main.humidity+'%'
  wind[0].innerHTML=data.wind.speed+'km/h'
  const visibilekm = data.visibility / 1000;
  visibility[0].innerHTML=(visibilekm)+'km'
  temperature[0].innerHTML=data.main.temp+'°C'
  city[0].innerHTML=data.name
  description[0].innerHTML=data.weather[0].main


  if(data.weather[0].icon==='01d')
  setIcon(clearday)
  else if(data.weather[0].icon==='01n')
  setIcon(clearnight)
  else if(data.weather[0].icon==='02d' ||data.weather[0].icon==='03d' || data.weather[0].icon==='04d' )
  setIcon(clouday)
  else if(data.weather[0].icon==='09d' ||data.weather[0].icon==='10d' )
  setIcon(rainday)
  else if(data.weather[0].icon==='09n' ||data.weather[0].icon==='10n' )
  setIcon(rainight)
  else if(data.weather[0].icon==='02n' ||data.weather[0].icon==='03n' || data.weather[0].icon==='04n' )
  setIcon(cloudnight)
  else if(data.weather[0].icon==='11d')
  setIcon(thunderday)
  else if(data.weather[0].icon==='11n')
  setIcon(thundernight)
  else if(data.weather[0].icon==='13d')
  setIcon(snowday)
  else if(data.weather[0].icon==='13n')
  setIcon(snownight)
  else if(data.weather[0].icon==='50d')
  setIcon(mistday)
  else if(data.weather[0].icon==='50n')
  setIcon(mistnight)
else{
  setIcon(clouday)
}
  }

  return (
   
    <div className='background' style={{backgroundImage:`url(${icon})`}}>
      <div className='Container'>
      <div className='Searchbar'>
        <input type='text' className='input' placeholder='Search'></input>
        <img id='searchicon' src={searchicon} onClick={()=>{search()}} alt='weather'></img>
      </div>
      <div className='location'>London</div>
      <div className='temp'>30°C</div>
      <div className='desc'>Clouds</div>
      <div className='info'>
        <div className='feels'>
          Feels like
          <div className='feelsinfo'>25°C</div>
        </div>
        <div className='humidity'>
          Humidity
          <div className='humidinfo'>45%</div>
        </div>
        <div className='visibility'>
          Visibility
          <div className='visibleinfo'>1000m</div>
        </div>
        <div className='wind'>
          Wind Speed
          <div className='windinfo'>100km/h</div>
        </div>
      </div>
      </div>
     
    </div>
  );
}

export default App;
