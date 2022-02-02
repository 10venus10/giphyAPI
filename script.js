//display array 0-24
//create function- click more: display next 25 gifs
//add trending link, create function to display trneding link
//then create function to display searched content
let button = document.querySelector("#searchButton");
let load = document.querySelector('#loadButton')

let img = document.createElement('img')
let gifPics = document.querySelector('.gifContainer')

async function gifs(event){
    event.preventDefault();

let url= `http://api.giphy.com/v1/gifs/trending?&api_key=dc6zaTOxFJmzC&limit=25&rating=pg-13`

fetch(url) 
.then(res =>{
    return res.json();
})
.then(res => {

    for (let i = 0; i < res.data.length; i++){
    console.log('Success', res)
   let img = document.createElement('img')
   let gifPics = document.querySelector('.gifContainer')
   img.src = res.data[i].images.fixed_height.url
   gifPics.appendChild(img)}
})

.catch(err =>{
    console.log("error!", err)
    alert("nothing found")
})
}

window.addEventListener('load', gifs)


async function getGifs(event){
    event.preventDefault();

let textInput = document.querySelector('#searchBox').value
let url= `http://api.giphy.com/v1/gifs/search?q=${textInput}&api_key=dc6zaTOxFJmzC&limit=25`

gifPics.innerHTML = ''

fetch(url)
.then(res =>{
    return res.json();
})
.then(res => {

    for (let i = 0; i < res.data.length; i++){
    console.log('Success', res)
   let img = document.createElement('img')
   let gifPics = document.querySelector('.gifContainer')
   img.src = res.data[i].images.fixed_height.url
   gifPics.appendChild(img)}
    //gifPics.src = res.data[0].images.original.url
})

.catch(err =>{
    console.log("error!", err)
    alert("nothing found")
})
}

async function getMoreGifs(event){
    event.preventDefault();
    
let textInput = document.querySelector('#searchBox').value
let url= `http://api.giphy.com/v1/gifs/search?q=${textInput}&api_key=dc6zaTOxFJmzC&offset=25&limit=25`

fetch(url)
.then(res =>{
    return res.json();
})
.then(res => {

    for (let i = 0; i < res.data.length; i++){
    console.log('Success', res)
   let img = document.createElement('img')
   let gifPics = document.querySelector('.gifContainer')
   img.src = res.data[i].images.fixed_height.url
   gifPics.appendChild(img)}
    //gifPics.src = res.data[0].images.original.url
})

.catch(err =>{
    console.log("error!", err)
    alert("nothing found")
})
}

button.addEventListener('click', getGifs)
load.addEventListener('click', getMoreGifs)