// number
const Vod = "01005566102";
const ETi = "01115003332";
const Ora = "01289950555";
const We = "0155368490";
const sW = "01005566102";
// Variable
const notfound = document.getElementById("notfound");
const notFoundCrypto = document.querySelectorAll(["[data-crypto]"]);
const randomNumber = document.getElementById("number");
const copy = document.getElementById("copyed");
const loading = document.getElementById("loading");
const loader = document.getElementById("loader");
const elementPay = document.querySelectorAll(["[data-boxPay]"]);
const payBox = document.getElementById("payBox");
const closeBtn = document.getElementById("close-box");
const textPay = document.querySelectorAll(["[data-text]"]);
const ImgPay = document.querySelectorAll(["[data-img]"]);
const imgBox = document.getElementById("imgPay");
const KindText = document.getElementById("kind-text");
const numberF = document.getElementById("numberF");
const youT = document.getElementById("yout");
const numberCash = document.getElementById("numberCash");
const numberlenght = document.getElementById("numberlenght");
const loaderBtn = document.getElementById("loaderBtn");
const submitBtn = document.getElementById("Sb");
const dynmic = document.getElementById("dynamic");
const ShowH = document.getElementById("dis");
const msgG = document.getElementById("msgg");
const sM = document.getElementById("sum");
const spanCash = document.getElementById("ccG");
const copyImg = document.getElementById("copyImg");
// get id 
var urlParams = new URLSearchParams(window.location.search);
var textValue = urlParams.get('id');
if(textValue == null || textValue == undefined || textValue == "") {
    randomNumber.innerHTML += Math.floor(Math.random() * 1000); 
} else {
    randomNumber.innerHTML = textValue;
}
// for block all not allow
for(let i = 0; i < notFoundCrypto.length; i++){
    notFoundCrypto[i].style.opacity = "0.5";
    notFoundCrypto[i].style.pointerEvents = "none";
}
// close box
closeBtn.onclick = _=> {
    loader.style.display = "none";
    payBox.style.display = "none"
    loading.style.display = "none";
    location.reload();
}
// show box and change data

// new
const inputMoney = document.getElementById("money");
const nbCash = document.getElementById("numberCash");
const fileImg = document.getElementById("fileimg");
const CopyD = document.getElementById("doneC");

// console.log(submitBtn)
submitBtn.onclick = ()=> {
    if (inputMoney.value == "" || inputMoney.value < 15 || inputMoney.value > 20000) {
            inputMoney.style.borderColor = "#f00";
        setTimeout(()=> {
            inputMoney.style.borderColor = "rgba(0,0,0,0.4)";
        },1000)
    } else if (nbCash.value == "" || nbCash.value.length < 11) {
        nbCash.style.borderColor = "#f00";
        setTimeout(()=> {
            nbCash.style.borderColor = "rgba(0,0,0,0.4)";
        },1000)
    } else {
    submitBtn.style.display = "none";
    loaderBtn.style.display = "flex";
    setTimeout(()=> {
        loaderBtn.style.display = "none";
        ShowH.style.display = "none";
        payBox.style.height = "auto";
        msgG.style.display = "block";
        sM.style.display = "none";
    },1000)
    }

}


for(let y = 0; y < elementPay.length; y++){
    elementPay[y].onclick = _ => {
        if(textPay[y].innerText ==  "Vodafone"){
            imgBox.setAttribute("src", "https://joook3gd.github.io/1xbetPay/assets/images/vodafone.png");
            imgBox.style.width = "80px";
            KindText.innerText = "فودافون";
            numberF.innerText = Vod;
            youT.style.display = "block";
            youT.setAttribute("src", "https://www.youtube.com/embed/w905fnJ7zhc");
            copyImg.onclick = ()=> {
                CopyD.style.display = "inline-block";
                setTimeout(()=> {
                    CopyD.style.display = "none";
                },1000)
                navigator.clipboard.writeText(Vod)
                .then(function() {
                })
                .catch(function() {
                });
            }
        } else if(textPay[y].innerText ==  "Etisalat Cash"){
            imgBox.setAttribute("src", "https://joook3gd.github.io/1xbetPay/assets/images/etisalat.svg");
            imgBox.style.width = "120px";
            KindText.innerText = "اتصالات";
            numberF.innerText = ETi;
            youT.style.display = "block";
            youT.setAttribute("src", "https://www.youtube.com/embed/NCpl4ziCRQs");
            copyImg.onclick = ()=> {
                CopyD.style.display = "inline-block";
                setTimeout(()=> {
                    CopyD.style.display = "none";
                },1000)
                navigator.clipboard.writeText(ETi)
                .then(function() {
                })
                .catch(function() {
                });
            }
        } else if(textPay[y].innerText ==  "Orange Cash"){
            imgBox.setAttribute("src", "https://joook3gd.github.io/1xbetPay/assets/images/orange.png");
            imgBox.style.width = "200px";
            KindText.innerText = "اورنج";
            numberF.innerText = Ora;
            youT.style.display = "block";
            youT.setAttribute("src", "https://www.youtube.com/embed/B9lzEz7_SR4");
            copyImg.onclick = ()=> {
                CopyD.style.display = "inline-block";
                setTimeout(()=> {
                    CopyD.style.display = "none";
                },1000)
                navigator.clipboard.writeText(Ora)
                .then(function() {
                })
                .catch(function() {
                });
            }
        } else if(textPay[y].innerText ==  "We pay Egypt"){
            imgBox.setAttribute("src", "https://joook3gd.github.io/1xbetPay/assets/images/wepay.png");
            imgBox.style.width = "50px";
            KindText.innerText = "وي";
            numberF.innerText = We;
            youT.style.display = "block";
            youT.setAttribute("src", "https://www.youtube.com/embed/w905fnJ7zhc");
            copyImg.onclick = ()=> {
                CopyD.style.display = "inline-block";
                setTimeout(()=> {
                    CopyD.style.display = "none";
                },1000)
                navigator.clipboard.writeText(We)
                .then(function() {
                })
                .catch(function() {
                });
            }
        } else  if(textPay[y].innerText ==  "Smart Wallet"){
            imgBox.setAttribute("src", "https://joook3gd.github.io/1xbetPay/assets/images/cash/smart_wallet.png");
            imgBox.style.width = "90px";
            KindText.innerText = "المحفظة الذكية للدفع هن";
            numberF.innerText = sW;
            youT.style.display = "none";
            spanCash.innerHTML = "";
            payBox.style.height = "auto";
            copyImg.onclick = ()=> {
                CopyD.style.display = "inline-block";
                setTimeout(()=> {
                    CopyD.style.display = "none";
                },1000)
                navigator.clipboard.writeText(sW)
                .then(function() {
                })
                .catch(function() {
                });
            }
        }
        else {
        }
        payBoxShow();
    }
}
// box animation
function payBoxShow() {
    loading.style.display = "flex";
    loader.style.display = "flex";
    payBox.style.display = "none"
    payBox.style.left = "-50%";
    setTimeout(_=>{
        loader.style.display = "none";
        payBox.style.display = "block";
        setTimeout(_=> {
            payBox.style.left = "0%";
        },50)
        setTimeout(_=> {
            payBox.style.left = "25%";
        },75)
        setTimeout(_=> {
            payBox.style.left = "50%";
        },100)
    },1500)
}
// number input text length
numberlenght.innerText = numberCash.value.length + "/11"
numberCash.onkeyup = ()=> {
    numberlenght.innerText = numberCash.value.length + "/11"
}
