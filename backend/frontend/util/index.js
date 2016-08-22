export const fetchCities = function(success){
  const request = new Request('http://localhost:3000/cities', {
  	method: 'GET',
  	mode: 'cors',
  	headers: new Headers({
  		'Content-Type': 'application/json'
  	})
  });
  fetch(request).then(r => r.json()).then(success);
};

export const fetchFlights = function(cityId, success){
  const request = new Request(`http://localhost:3000/flights?city_id=${cityId}`, {
  	method: 'GET',
  	mode: 'cors',
  	headers: new Headers({
  		'Content-Type': 'application/json'
  	})
  });
  fetch(request).then(r => r.json()).then(success);
};
