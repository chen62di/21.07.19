const mySelf = {name: 'Chen Dimri',
               age: '21',
               adress: {city: 'Yavne',
               				country: "Israel"},
      					family: [{name: 'Liza', age: '53'}, {name: 'Igal', age: '61'}, {name: 'Liran', age: '30'}, {name: 'Aviv', age: '27'}]};


function printObject(obj)
{ 
	for (let n in obj)
  {
    console.log(`${n} : ${JSON.stringify(obj[n])}`)
  }
}

printObject(mySelf)

