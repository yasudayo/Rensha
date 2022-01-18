const body = document.querySelector ("body");
const background = document.querySelector (".background");
const countDisplay = document.querySelector(".countDisplay");
const result = document.querySelector (".result");
count = 0;
//PCかスマホの判定
const eventType = window.ontouchstart !== null ? "click": "touthstart";
const addCount = function (e) {
    //クリックをカウント 表示
    count++;
    countDisplay.textContent = count;
    //クリック時のアニメーション
    let x = e.pageX;
    let y = e.PageY;
    const mash = document.createElement("div");
    mash.style.top = y + "px";
    mash.style.left = x + "px";
    document.body.appendChild(mash);
    mash.className = "mash";
    mash.addEventListener("animationed", () => {
        mash.parentNode.removeChild(mash);
    });
};
//背景を縮める
const ShrinkAnim = function () {
    console.log(countDisplay);
    countDisplay.classList.remove("blink");
    body.removeEventListener(eventType, ShrinkAnim);
    body.addEventListener(eventType, addCount);
    background
    .animate (
        {
            width: ["350px", "0px"],
            height:["350px", "0px"],
            opacity:[1, 0.5, 1],
            offset: [0, 0.9],
        },
        {duration:10000, fill:"forwards"} //秒数設定
    )
    .finished//game終了
    .then (() => {
        body.removeEventListener(eventType,addCount);
        alert(count + "回" + "1秒あたり、" + count / 10 + "回");　//alert文
        document.location.reload();
        clearInterval(interval);
    });
};
body.addEventListener(eventType, ShrinkAnim);
