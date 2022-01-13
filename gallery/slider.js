//btns
let nextbtn = document.getElementById("rightbtnid")
let prevbtn = document.getElementById("leftbtnid")
//images
let img1 = document.getElementById("img1id")
let img2 = document.getElementById("img2id")
let img3 = document.getElementById("img3id")
let img4 = document.getElementById("img4id")
let img5 = document.getElementById("img5id")
let img6 = document.getElementById("img6id")
//div btns
let image1 = document.getElementById("image1id")
let image2 = document.getElementById("image2id")
let image3 = document.getElementById("image3id")
let image4 = document.getElementById("image4id")
let image5 = document.getElementById("image5id")
let image6 = document.getElementById("image6id")


var i = 0;
nextbtn.addEventListener("click", nextimg);
function nextimg() {


    if (i < 5) {

        i++

        if (i === 1) {
            img2.className = "newimages";
            img1.className = "removenewimages";
            img3.className = "removenewimages";
            img4.className = "removenewimages";
            img5.className = "removenewimages";
            img6.className = "removenewimages";
        } else if (i == 2) {
            img3.className = "newimages";
            img1.className = "removenewimages";
            img2.className = "removenewimages";
            img4.className = "removenewimages";
            img5.className = "removenewimages";
            img6.className = "removenewimages";
        } else if (i == 3) {
            img4.className = "newimages";
            img1.className = "removenewimages";
            img2.className = "removenewimages";
            img3.className = "removenewimages";
            img5.className = "removenewimages";
            img6.className = "removenewimages";
        } else if (i == 4) {
            img5.className = "newimages";
            img4.className = "removenewimages";
            img1.className = "removenewimages";
            img2.className = "removenewimages";
            img3.className = "removenewimages";
            img6.className = "removenewimages";
        } else if (i == 5) {
            img6.className = "newimages";
            img1.className = "removenewimages";
            img2.className = "removenewimages";
            img3.className = "removenewimages";
            img4.className = "removenewimages";
            img5.className = "removenewimages";

        }

    }


}

prevbtn.addEventListener("click", previmg);
function previmg() {
    if (i <= 5 && i > 0) {

        i--

        if (i == 0) {
            img1.className = "newimages";
            img2.className = "removenewimages";
            img3.className = "removenewimages";
            img4.className = "removenewimages";
            img5.className = "removenewimages";
            img6.className = "removenewimages";
        }
        if (i === 1) {
            img2.className = "newimages";
            img1.className = "removenewimages";
            img3.className = "removenewimages";
            img4.className = "removenewimages";
            img5.className = "removenewimages";
            img6.className = "removenewimages";
        } else if (i == 2) {
            img3.className = "newimages";
            img1.className = "removenewimages";
            img2.className = "removenewimages";
            img4.className = "removenewimages";
            img5.className = "removenewimages";
            img6.className = "removenewimages";
        } else if (i == 3) {
            img4.className = "newimages";
            img1.className = "removenewimages";
            img2.className = "removenewimages";
            img3.className = "removenewimages";
            img5.className = "removenewimages";
            img6.className = "removenewimages";
        } else if (i == 4) {
            img5.className = "newimages";
            img4.className = "removenewimages";
            img1.className = "removenewimages";
            img2.className = "removenewimages";
            img3.className = "removenewimages";
            img6.className = "removenewimages";
        } else if (i == 5) {
            img6.className = "newimages";
            img1.className = "removenewimages";
            img2.className = "removenewimages";
            img3.className = "removenewimages";
            img4.className = "removenewimages";
            img5.className = "removenewimages";

        }

    }
}

image1.addEventListener("click", getimage1);
function getimage1() {
    i = 0
    img1.className = "newimages";
    img2.className = "removenewimages";
    img3.className = "removenewimages";
    img4.className = "removenewimages";
    img5.className = "removenewimages";
    img6.className = "removenewimages";
}

image2.addEventListener("click", getimage2);
function getimage2() {
    i = 1
    img2.className = "newimages";
    img1.className = "removenewimages";
    img3.className = "removenewimages";
    img4.className = "removenewimages";
    img5.className = "removenewimages";
    img6.className = "removenewimages";
}

image3.addEventListener("click", getimage3);
function getimage3() {
    i = 2
    img3.className = "newimages";
    img1.className = "removenewimages";
    img2.className = "removenewimages";
    img4.className = "removenewimages";
    img5.className = "removenewimages";
    img6.className = "removenewimages";
}


image4.addEventListener("click", getimage4);
function getimage4() {
    i = 3
    img4.className = "newimages";
    img1.className = "removenewimages";
    img2.className = "removenewimages";
    img3.className = "removenewimages";
    img5.className = "removenewimages";
    img6.className = "removenewimages";
}


image5.addEventListener("click", getimage5);
function getimage5() {
    i = 4
    img5.className = "newimages";
    img1.className = "removenewimages";
    img2.className = "removenewimages"
    img3.className = "removenewimages";
    img4.className = "removenewimages";
    img6.className = "removenewimages";
}


image6.addEventListener("click", getimage6);
function getimage6() {
    i = 5
    img6.className = "newimages";
    img1.className = "removenewimages";
    img2.className = "removenewimages";
    img3.className = "removenewimages";
    img4.className = "removenewimages";
    img5.className = "removenewimages";
}