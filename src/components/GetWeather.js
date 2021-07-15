import React, {useState} from 'react';

const GetWeather = () => {
    const [weather, updateWeather] = useState('');
    const [zipcode, updateZipcode] = useState();
    function handleZipcode(e) {
        updateZipcode(e.target.value)
 
    }
    function goGetWeatherAPI () {
        let url = `https://api.weatherapi.com/v1/current.json?key=9169f0de15b646d7a81172326211407&q=` + zipcode + `&aqi=no`
        fetch(url)
        .then (res => res.json())
        .then (json => {
            updateWeather(json);
        })
        .catch(err => {
            console.error(err);
        });
    }

    console.log(weather)
   
    return (
        <div>
            <h4 className="text-white">Okay first put in the zip code of the beach you would like to visit</h4>
            <div class="mb-3">
                <label htmlFor="beachZip" className="form-label text-white">Beach Zipcode</label>
                <input type="number" className="form-control" id="beachZip" placeholder="zipcode" value={zipcode} onChange={handleZipcode} />
                <button onClick={goGetWeatherAPI} className="btn btn-primary btn-lg my-4">Go</button>
            </div>
            
     
            {weather !== '' && weather.error === undefined ? 
            
                <div>
                    <p className="text-white">The Weather in {weather.location.name} {weather.location.region} ({zipcode}) is {weather.current.condition.text}</p>
                    <p className="text-white">The current temp feels like {weather.current.feelslike_f} degress and has a wind gust of {weather.current.gust_mph}</p>
                    <p className="text-white">{weather.current.feelslike_f > 80 && weather.current.gust_mph < 10 ? 'Today is a GREAT today to go to the beach! Enjoy!' : 'Today is not a great beach day. Bummer!'} </p>
                </div>
            
            : 

            <p className="text-white">Sorry No Beach found with this zipcode, please try again.</p>
            }
           
           
   


            
            
            
        </div>
    )

}
export default GetWeather;