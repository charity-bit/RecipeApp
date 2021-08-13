const searchForm = document.querySelector('form');

const searchResultDiv = document.querySelector('.search-result');
const container = document.querySelector('.container');
let searchQuery = '';


searchForm.addEventListener('submit',(e)=>{

    e.preventDefault();
            searchQuery = e.target.querySelector('input').value;
            console.log(searchQuery);

})
async function fetchAPI(){
    const baseURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_key}&from=0&to=20`;
    const response = await fetch(baseURL); 
    const data = await response.json();
    generateHTML(data.hits)
    console.log(data);
  }
  