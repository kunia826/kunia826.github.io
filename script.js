//for Web Design Website Images
let showDesSys = document.getElementById('website-design-system');

let webDesSys1 = document.getElementById('web-1');
let webDesSys2 = document.getElementById('web-2')

showDesSys.onclick = function() { 
    if (webDesSys1.style.display==="none") {
        webDesSys1.style.display="inline-block";
        webDesSys2.style.display="inline-block";
    } else {
        webDesSys1.style.display="none";
        webDesSys2.style.display="none";
    }
};

//for Void Skate Club Images
let showVoid = document.getElementById('void-skate-header');

let void1 = document.getElementById('void-1');
let void2 = document.getElementById('void-2');

showVoid.onclick = function () {
    if (void1.style.display==="none") {
        void1.style.display="inline-block";
        void2.style.display="inline-block";
    } else {
        void1.style.display="none";
        void2.style.display="none";
    }
}

//for Kono Images
let showKono = document.getElementById('kono-header');

let kono1 = document.getElementById('kono-1');
let kono2 = document.getElementById('kono-2');
let kono3 = document.getElementById('kono-3');

showKono.onclick = function() {
    if (kono1.style.display==="none") {
        kono1.style.display="inline-block";
        kono2.style.display="inline-block";
        kono3.style.display="inline-block";
    } else {
        kono1.style.display="none";
        kono2.style.display="none";
        kono3.style.display="none";
    }
}