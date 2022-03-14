const loadCountries = () =>{
    const url =(`https://restcountries.com/v3.1/all`)
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountries(data))
    
}

const displayCountries = (countries) =>{
   console.log(countries);
     const allCountriesHTML= countries.map(country => getCountryHTML(country));
//    console.log(allCountriesHTML[0]);
     const container = document.getElementById('countries')
     container.innerHTML =allCountriesHTML.join(' ');
   
}

//option 2
//parameter destructing
const getCountryHTML = ({name, flags}) => {
    // const {name, flags} = country;
    return `
       <div class="country">
         <h2>${name.common}</h2>
         <img src="${flags.png}"/>
       </div>
    `
}


// option 1
// const getCountryHTML = country => {
//     //option 1
//     const {name, flags} = country;
//     return `
//        <div class="country">
//          <h2>${name.common}</h2>
//          <img src="${flags.png}"/>
//        </div>
//     `
// }

//original
// const getCountryHTML = country => {
//     return `
//        <div class="country">
//          <h2>${country.name.common}</h2>
//          <img src="${country.flags.png}"/>
//        </div>
//     `
// }

loadCountries();