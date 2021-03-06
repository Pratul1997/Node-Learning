const request=require('request');

var geocodeAddress=(address, callback) =>{

	var Address='https://maps.googleapis.com/maps/api/geocode/json?address='+encodeURIComponent(address)+'&key=AIzaSyAPcJDd2zO-jcEQw0ORbWqXdQJiMuoN4Pg'
	// console.log(Address);
	request({
		url: Address,
		json:true
	},(error , response , body) =>{
		if(error){
			callback('Unable to connect to Google Servers.');
		}
		else if(body.status==="ZERO_RESULTS"){
			callback('Unable to find the Address');
		}
		else if(body.status==="OK"){
			callback(undefined,{
				address: body.results[0].formatted_address,
				latitude: body.results[0].geometry.location.lat,
				longitude: body.results[0].geometry.location.lng
			});
		}
	}); 
}

module.exports={
	geocodeAddress
};
