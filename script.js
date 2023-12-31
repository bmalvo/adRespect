// Pop up function in gallery

var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

let imagesGardens = ["./gallery/Photo.png",
 "./gallery/Photo(1).png", "./gallery/Photo(2).png" , 
 "./gallery/Photo(3).png", "./gallery/Photo(4).png", 
 "./gallery/Photo(5).png", "./gallery/Photo(6).png", 
 "./gallery/Photo(7).png", "./gallery/Photo(8).png", 
 "./gallery/Photo(9).png"]

let num = 0;

function next(){
    let fullImg = document.getElementById("fullImg");
    num++;
    if (num >= imagesGardens.length) {
        num = 0;
    }
    fullImg.src = imagesGardens[num];
}

function prev(){
    let fullImg = document.getElementById("fullImg");
    num--;
    if (num < 0) {
        num = imagesGardens.length -1;
    }
    fullImg.src = imagesGardens[num];
}

function openFullImg (pic) {
    fullImgBox.style.display = "flex";
    fullImg.src = pic;
}

function closeFullImg() {
    fullImgBox.style.display = "none";
}

let prevButton=document.getElementById("prev");
document.body.addEventListener("keydown",function(){
    let code=37; // 37 is keycode of 'left-arrow'
    let code2 = 65 // 65 is keycode of 'A'
    if(event.keyCode==code || event.keyCode == code2) // depricated need change
    {
        prevButton.click();
    }
});

let nextButton=document.getElementById("next");
document.body.addEventListener("keydown",function(){
    let code = 39; // 39 is keycode of 'right-arrow'
    let code2 = 68 // 68 is keycode of 'D'
    if(event.keyCode==code || event.keyCode == code2) // depricated need change
    {
        nextButton.click();
    }
});

let closeButton=document.getElementById("close");
document.body.addEventListener("keydown",function(){
    let code=27; // 27 is keycode of 'escape'
    if(event.keyCode==code) // depricated need change
    {
        closeButton.click();
    }
});

// 'Read more' button

function myFunction() {
    let trigger = document.getElementById("trigger");
    const opa_imgs = document.querySelectorAll(".img-opacity");
    const hidden_imgs = document.querySelectorAll(".more")

    if (trigger.style.opacity === "0.4") {
        opa_imgs.forEach(img => {
            img.style.opacity = "1"
        });
        hidden_imgs.forEach(hidden => {
            hidden.style.display = 'inline'
        });
        trigger.style.opacity = "1";
    } else {
            opa_imgs.forEach(img => {
                img.style.opacity = "0.4"
            });
            hidden_imgs.forEach(hidden => {
            hidden.style.display = 'none'
        });
            trigger.style.opacity = "0.4";
        }
};
    
// 'Go-forward' for search feature

function goForward() {
    let search = document.getElementById("form-search");

    if (search.style.marginLeft == "-300px") {
        search.style.marginLeft = "0px"
    } else {
        search.style.marginLeft = "-300px"
    }
};
