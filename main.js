if(!window.matchMedia("(prefers-reduced-motion)").matches){
    /*show animation on srcoll*/
const observer =new IntersectionObserver((entries)=>{
entries.forEach((entry)=>{
    console.log(entry)
    if(entry.isIntersecting){
        entry.target.classList.add("animation")
    }else{
        entry.target.classList.remove("animation")
    }
})
},{threshold:0.35});

 document.querySelectorAll("section").forEach((e)=>observer.observe(e))
 document.querySelectorAll("mark").forEach((e)=>observer.observe(e))
document.querySelectorAll("#gallery img").forEach((e)=>observer.observe(e))

/*Home Section */
function typingAnimation(text,querySelector,i){
        if(i<text.length){
            document.querySelector(querySelector).innerHTML += text.charAt(i);
            setTimeout(()=>typingAnimation(text,querySelector,i+1),20);
        }
}

typingAnimation("Welcome to shefaa's Creative World!","#HomeText span",0)
typingAnimation(` Capturing moments, telling stories, and bringing emotions to life through the lens. Explore the world of visual artistry and discover the magic in every frame.`,"#HomeText p",0)
}else{
    document.querySelector("#HomeText span").innerHTML ="Welcome to shefaa's Creative World!";
    document.querySelector("#HomeText p").innerHTML =` Capturing moments, telling stories, and bringing emotions to life through the lens. Explore the world of visual artistry and discover the magic in every frame.`;

}
/*gallary section*/

const max=window.innerWidth /2;
const gallerySection=document.getElementsByClassName("gallery_section")[0];
const gallery=document.getElementById("gallery");

gallerySection.onmousedown = e =>{
    gallery.dataset.eventStartAt=e.clientX;
    console.log("get first value")
}

gallerySection.onmousemove= e =>{
    if(gallery.dataset.eventStartAt === "0") return;
    const mouseDelta=parseFloat(gallery.dataset.eventStartAt)-e.clientX;
    const percentage =(mouseDelta/max)* -100;
    let  nextPercentage = parseFloat(gallery.dataset.prevPercentage)+percentage;
//most add some code to prevent mor scrool

    gallery.dataset.percentage=nextPercentage;
    gallery.animate({transform:`translate(${nextPercentage}%,0%)` },{duration:1200,fill:"forwards"}) 
    for(const image of document.querySelectorAll("#gallery img")){
        image.animate({objectPosition:`${-Math.abs((nextPercentage)%100)+100}% 50%`},{duration:1200,fill:"forwards"})
        console.log((nextPercentage)%100+100);
    }
    console.log("get second value")
}
gallerySection.onmouseup= e =>{
    gallery.dataset.eventStartAt="0";
    gallery.dataset.prevPercentage=gallery.dataset.percentage;
}
gallerySection.ontouchstart = e=>{
        gallery.dataset.eventStartAt=[...e.changedTouches][0].clientX;
        console.log([...e.changedTouches])
        console.log("start");

}
gallerySection.ontouchmove = e=>{
    if(gallery.dataset.eventStartAt === "0") return;
    const mouseDelta=parseFloat(gallery.dataset.eventStartAt)-[...e.changedTouches][0].clientX;
    console.log([...e.changedTouches][0].clientX,[...e.changedTouches][0])
    const percentage =(mouseDelta/max)* -100;
    let  nextPercentage = parseFloat(gallery.dataset.prevPercentage)+percentage;
//most add some code to prevent mor scrool
    gallery.dataset.percentage=nextPercentage;
    gallery.animate({transform:`translate(${nextPercentage}%,0%)` },{duration:1200,fill:"forwards"}) 
    for(const image of document.querySelectorAll("#gallery img")){
        image.animate({objectPosition:`${-Math.abs((nextPercentage)%100)+100}% 50%`},{duration:1200,fill:"forwards"})
    }
    console.log("move");

    }
gallerySection.ontouchend = e=>{
    gallery.dataset.eventStartAt="0";
    gallery.dataset.prevPercentage=gallery.dataset.percentage;
    console.log("end");
}
