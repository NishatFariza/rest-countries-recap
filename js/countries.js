const loadCountries = () =>{
    const url =(`https://restcountries.com/v3.1/all`)
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountries(data))
    
}

const displayCountries = (countries) =>{
   console.log(countries);
}

loadCountries();