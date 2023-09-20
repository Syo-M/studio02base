{
const music = new Audio('../bgm/school_Bell.mp3');
const hotaru = new Audio('../bgm/hotaru_piano_10.mp3');
const c_btn = document.getElementById('chime_button');
const elem = document.getElementById("clock");

// 音源元サイト https://mmt38.info/arrange/hotaru/

function myfunc() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    elem.innerHTML = hours + ":" + minutes + ":" + seconds + "";
}

alarm = setInterval("myfunc()", 500);

c_btn.addEventListener('click', function () {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();

    //10:50 11:00 11:50 12:00 12:50 13:50 14:40 14:50 15:40 15:50 16:40 
    // 午前午後の場合は、15:00 15:50 16:00 16:50 17:00 17:50

    // １限目始まりのチャイムの時間
    const firstS_h = 10;
    const firstS_m = 0;

    // １限目終わりのチャイムの時間
    const firstE_h = 10;
    const firstE_m = 50;

    // ２限目始まりのチャイムの時間
    const secondS_h = 11;
    const secondS_m = 0;

    // 2限目終わりのチャイムの時間
    const secondE_h = 11
    const secondE_m = 50;

    // 3限目始まりのチャイムの時間
    const thirdS_h = 12;
    const thirdS_m = 0;

    // 3限目終わりのチャイムの時間
    const thirdE_h = 12;
    const thirdE_m = 50;

    // 4限目始まりのチャイムの時間
    const fourthS_h = 13;
    const fourthS_m = 50;

    // 4限目終わりのチャイムの時間
    const fourthE_h = 14;
    const fourthE_m = 40;

    // 5限目始まりのチャイムの時間
    const fifthS_h = 14;
    const fifthS_m = 50;

    // 5限目終わりのチャイムの時間
    const fifthE_h = 15;
    const fifthE_m = 40;

    // 6限目始まりのチャイムの時間
    const sixthS_h = 15;
    const sixthS_m = 50;

    // 6限目終わりのチャイムの時間
    const sixthE_h = 16;
    const sixthE_m = 40;

    // 自習時間終了
    const goodbye_h = 17;
    const goodbye_m = 35;


    let firstStart = setTimeout(() => {
        music.currentTime = 0;
        music.play();
        console.log("1限目が始まるよ");
    }, new Date().setHours(firstS_h, firstS_m, 0, 0) - new Date())
    if ((h * 60) + m > (firstS_h * 60) + firstS_m) {
        clearTimeout(firstStart);
    }

    let firstEnd = setTimeout(() => {
        music.currentTime = 0;
        music.play();
        console.log("１限目が終わるよ");
    }, new Date().setHours(firstE_h, firstE_m, 0, 0) - new Date())
    if ((h * 60) + m > (firstE_h * 60) + firstE_m) {
        clearTimeout(firstEnd);
    }

    let secondStart = setTimeout(() => {
        music.currentTime = 0;
        music.play();
        console.log("２限目が始まるよ");
    }, new Date().setHours(secondS_h, secondS_m, 0, 0) - new Date())
    if ((h * 60) + m > (secondS_h * 60) + secondS_m) {
        clearTimeout(secondStart);
    }

    let secondEnd = setTimeout(() => {
        music.currentTime = 0;
        music.play();
        console.log("２限目が終わるよ");
    }, new Date().setHours(secondE_h, secondE_m, 0, 0) - new Date())
    if ((h * 60) + m > (secondE_h * 60) + secondE_m) {
        clearTimeout(secondEnd);
    }

    let thirdStart = setTimeout(() => {
        music.currentTime = 0;
        music.play();
        console.log("３限目が始まるよ");
    }, new Date().setHours(thirdS_h, thirdS_m, 0, 0) - new Date())
    if ((h * 60) + m > (thirdS_h * 60) + thirdS_m) {
        clearTimeout(thirdStart);
    }

    let thirdEnd = setTimeout(() => {
        music.currentTime = 0;
        music.play();
        console.log("３限目が終わるよ");
    }, new Date().setHours(thirdE_h, thirdE_m, 0, 0) - new Date())
    if ((h * 60) + m > (thirdE_h * 60) + thirdE_m) {
        clearTimeout(thirdEnd);
    }

    let fourthStart = setTimeout(() => {
        music.currentTime = 0;
        music.play();
        console.log("４限目が始まるよ");
    }, new Date().setHours(fourthS_h, fourthS_m, 0, 0) - new Date())
    if ((h * 60) + m > (fourthS_h * 60) + fourthS_m) {
        clearTimeout(fourthStart);
    }

    let fourthEnd = setTimeout(() => {
        music.currentTime = 0;
        music.play();
        console.log("４限目が終わるよ");
    }, new Date().setHours(fourthE_h, fourthE_m, 0, 0) - new Date())
    if ((h * 60) + m > (fourthE_h * 60) + fourthE_m) {
        clearTimeout(fourthEnd);
    }

    let fifthStart = setTimeout(() => {
        music.currentTime = 0;
        music.play();
        console.log("５限目が始まるよ");
    }, new Date().setHours(fifthS_h, fifthS_m, 0, 0) - new Date())
    if ((h * 60) + m > (fifthS_h * 60) + fifthS_m) {
        clearTimeout(fifthStart);
    }

    let fifthEnd = setTimeout(() => {
        music.currentTime = 0;
        music.play();
        console.log("５限目が終わるよ");
    }, new Date().setHours(fifthE_h, fifthE_m, 0, 0) - new Date())
    if ((h * 60) + m > (fifthE_h * 60) + fifthE_m) {
        clearTimeout(fifthEnd);
    }

    let sixthStart = setTimeout(() => {
        music.currentTime = 0;
        music.play();
        console.log("６限目が始まるよ");
    }, new Date().setHours(sixthS_h, sixthS_m, 0, 0) - new Date())
    if ((h * 60) + m > (sixthS_h * 60) + sixthS_m) {
        clearTimeout(sixthStart);
    }

    let sixthEnd = setTimeout(() => {
        music.currentTime = 0;
        music.play();
        console.log("６限目が終わるよ");
    }, new Date().setHours(sixthE_h, sixthE_m, 0, 0) - new Date())
    if ((h * 60) + m > (sixthE_h * 60) + sixthE_m) {
        clearTimeout(sixthEnd);
    }

    let goodbye = setTimeout(() => {
        hotaru.currentTime = 0;
        hotaru.play();
        console.log("さっさと帰れ");
    }, new Date().setHours(goodbye_h, goodbye_m, 0, 0) - new Date())
    if ((h * 60) + m > (goodbye_h * 60) + goodbye_m) {
        clearTimeout(goodbye);
    }
});
}