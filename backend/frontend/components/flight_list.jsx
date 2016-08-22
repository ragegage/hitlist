import React from 'react'

export default function ({ flights }){
  return (
    <ul className='flight-list'>this is flight list
      {flights.map(flight => (<li>
                                {flight.from_city_id} to {flight.to_city_id}
                              </li>))}
    </ul>
  )
}
