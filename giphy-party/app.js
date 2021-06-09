// Global Constants
const api_key = "1gS2peePegMeE8jQW2tT35RaO7icseQT";
const limit = 3;
const rating = "g";

const searchQueryForm = document.querySelector("form");
const results = document.querySelector("#gifResults");
const loadbutton = document.querySelector("#hidden");
let pages = 0;
let offset = pages * limit;

// Control form submit behavior
searchQueryForm.addEventListener("submit", handleFormSubmit);
searchQueryForm.addEventListener("submit", handleFormSubmit);


loadbutton.addEventListener("click", showMore);

async function getResults(search_term) {
    
    const apiURL = "http://api.giphy.com/v1/gifs/search?api_key=" + api_key + "&q=" + search_term + "&limit=" + limit + "&offset=" + offset;

    const response = await fetch(apiURL);
    const jsonResponse = await response.json();
    const data = jsonResponse.data; // an array of gif objects
    data.forEach(element => displayResults(element));
    // it's passing an object each time
    document.getElementById("#hidden").classList.remove("#hidden"); 
    // document.getElementById('#hidden').style.display.None
    return data
}

function displayResults (element) {
    console.log(element)
    results.innerHTML += `
    <img src="${element.images.original.url}" alt="${element.title}"/>
    `
}


function handleFormSubmit(event) {
    event.preventDefault();
    const userInput = event.target.search.value;
    results.innerHTML = ` `
    getResults(userInput)
}

function showMore(event) {
    // getResults(search_term);
    console.log('imn here');
    getResults(event);
    // handleFormSubmit(event);
    pages += 1;
}


//document.getElementById('startBtn').classList.remove('hidden');
//document.getElementById('startBtn').classLzist.add('hidden');