export const SelectTravelerList = [
    {
        id:1,
        title:'Just Me',
        desc:'A solo trip for one person',
        icon:'🕺',
        people:'1 person'
    },

    {
        id:2,
        title:'A couple',
        desc:'A trip for two people',
        icon:'👫',
        people: '2 people'
    },

    {
        id:3,
        title:'Family',
        desc:'A trip for Whole Family',
        icon:'👨‍👩‍👧‍',
        people:'3-5 people'
    },
    {
        id:4,
        title:'Friends',
        desc:'A trip for friends',
        icon:'🤝',
        people:'5-10 people'
    }
]

export const SelectBudgetOptions=[
    {
        id:1,
        title:'Economy',
        desc:'Budget friendly trip',
        icon:'💰',
    },

    {
        id:2,
        title:'Standard',
        desc:'Keep it balanced trip', 
        icon:'💵',
    },

    {
        id:3,
        title:'Luxury',
        desc:'A luxurious trip ',
        icon:'💳',
    }
]

export const AI_PROMPT="Generate Travel Plan for Location : {location}, for {totalDay} Days for {traveler} with a {budget} budget with a Flight details including airline, flightNumber, departureAirport, arrivalAirport, approximatePrice, Booking URL, Hotels options list with HotelName, HotelAddress, Price, Hotel Image URL, Geo Coordinates, rating, descriptions and Places to visit nearby with placeName, Place Detaiols, Place Image URL, Geo Coordinates, ticket Pricing, Time to Travel each of the location for {totalDays} days with each day plan with best time to visit in JSON Format"
