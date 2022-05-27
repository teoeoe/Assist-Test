const card_container=document.getElementById('card-container');
const json_txt=document.getElementById('json-txt');
const json=json_txt.innerText;
const btn=document.getElementById('submit');

const card_number=100;
const api_url="https://techcrunch.com/wp-json/wp/v2/posts?per_page=100&context=embed";

btn.addEventListener('click', function(){
    const myJSON = new Object();
    myJSON.name = document.getElementById('name-label').innerText;
    myJSON.surname = document.getElementById('surname-label').innerText;
    myJSON.telephone= document.getElementById('telephone-label').innerText;
    myJSON.email= document.getElementById('email-label').innerText;
    console.log(myJSON)
    json_txt.innerText=JSON.stringify(myJSON);
 })

async function fetchCards(url){
    const response = await fetch(url);
    var data = await response.json();
}
