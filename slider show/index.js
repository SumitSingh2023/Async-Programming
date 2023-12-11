
/*let imgArr = [
    'https://images.pexels.com/photos/18896757/pexels-photo-18896757/free-photo-of-a-man-holding-a-camera-in-a-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',

    "https://images.pexels.com/photos/19402435/pexels-photo-19402435/free-photo-of-two-horses-standing-in-front-of-a-green-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",

    "https://images.pexels.com/photos/17505407/pexels-photo-17505407/free-photo-of-timber-logs-in-forest.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" ,

    "https://images.pexels.com/photos/19393311/pexels-photo-19393311/free-photo-of-mountain-village.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",

    "https://images.pexels.com/photos/19082544/pexels-photo-19082544/free-photo-of-walking-around-naples.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",

    "https://images.pexels.com/photos/12413402/pexels-photo-12413402.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",

    "https://images.pexels.com/photos/19394454/pexels-photo-19394454/free-photo-of-a-group-of-people-standing-in-front-of-a-building-decorated-with-christmas-decorations.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",

    "https://images.pexels.com/photos/18076007/pexels-photo-18076007/free-photo-of-a-duck-swimming-in-a-body-of-water.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",

    "https://images.pexels.com/photos/15805486/pexels-photo-15805486/free-photo-of-houses-with-sloped-roofs-in-city.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",

    "https://images.pexels.com/photos/19395757/pexels-photo-19395757/free-photo-of-autumn-in-paris.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"

]

let image= document.querySelector('img');
let prev=document.getElementById("prev");
let next=document.getElementById("nxt");
let start=document.querySelector("#start")
let stop=document.querySelector("#stop")


let curImage=0
image.setAttribute('src',imgArr[curImage])

prev.addEventListener("click",function(){
    curImage--
    if(curImage < 0){
        curImage=imgArr.length-1
    }
    image.setAttribute('src',imgArr[curImage])

})

next.addEventListener("click",function(){
    curImage++
    if(curImage > imgArr.length-1){
        curImage=0
    }
    image.setAttribute('src',imgArr[curImage])

   
})

function autoSlide(){
    let index=0
    for(let i=0;i<imgArr.length;i++){
        image.setAttribute('src',imgArr[i])
        image.setAttribute('src',imgArr[i])
        image.setAttribute('src',imgArr[i])
        image.setAttribute('src',imgArr[i])
        image.setAttribute('src',imgArr[i])
        image.setAttribute('src',imgArr[i])
        image.setAttribute('src',imgArr[i])
        index++
    }
}


let id;
start.addEventListener("click",function(){
    id=setInterval(()=>{
        autoSlide()
    },1000)
   
})

stop.addEventListener('click',function(){
    clearInterval(id)
})*/




