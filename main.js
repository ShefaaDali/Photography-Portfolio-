
function typingAnimation(text,querySelector,i){
        if(i<text.length){
            document.querySelector(querySelector).innerHTML += text.charAt(i);
            setTimeout(()=>typingAnimation(text,querySelector,i+1),20);
        }
}

typingAnimation("Welcome to shefaa's Creative World!","#HomeText span",0)
typingAnimation(` Capturing moments, telling stories, and bringing emotions to life through the lens. Explore the world of visual artistry and discover the magic in every frame."`,"#HomeText p",0)
     
/*----------------*/

const max=window.innerWidth /2;
const gallerySection=document.getElementsByClassName("gallery_section")[0];
const gallery=document.getElementById("gallery");

gallerySection.onmousedown = e =>{
    gallery.dataset.mouseDownAt=e.clientX;
    console.log("get first value")
}

gallerySection.onmousemove= e =>{
    if(gallery.dataset.mouseDownAt === "0") return;
    const mouseDelta=parseFloat(gallery.dataset.mouseDownAt)-e.clientX;
    const percentage =(mouseDelta/max)* -100;
    let  nextPercentage = parseFloat(gallery.dataset.prevPercentage)+percentage;
    if(nextPercentage<-100){
        nextPercentage= -100;
    }
    if(nextPercentage>0){
        nextPercentage=0;
    }
    gallery.dataset.percentage=nextPercentage;
    gallery.animate({transform:`translate(${nextPercentage}%,0%)` },{duration:1200,fill:"forwards"}) 
    for(const image of document.querySelectorAll("#gallery img")){
        image.animate({objectPosition:`${nextPercentage+100}% 50%`},{duration:1200,fill:"forwards"})
    }
    console.log("get second value")
}
gallerySection.onmouseup= e =>{
    gallery.dataset.mouseDownAt="0";
    gallery.dataset.prevPercentage=gallery.dataset.percentage;
}

