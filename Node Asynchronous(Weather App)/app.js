const request=require('request');
const yargs=require('yargs');
const geocode=require('./geocode.js');

const argv =yargs
.options({
	a:{
		demand:true,
		alias:'address',
		describe:'Address to fetch weather for',
		string:true
	}
})
.help()
.alias('help','h')
.argv;

geocode.geocodeAddress(argv.address,(errorMessage,results)=>{
	if(errorMessage){
		console.log(errorMessage); 
	}else{
		// console.log(JSON.stringify(results.address,undefined,3));
		latitude=results.latitude;
		longitude=results.longitude;
		var AddressWeather='https://api.darksky.net/forecast/f26ced4d47ea9b27566ab6af8106b885/'+latitude+','+longitude;
		console.log(AddressWeather);
		request({
			url: AddressWeather,
			json:true
		},(error , response , body) =>{
			if(error){
				console.log('Unable to connect to Forecast.io Servers.');
			} else{
				console.log(body.currently);
			}
		});
	}
});


