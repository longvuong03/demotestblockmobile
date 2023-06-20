window.onload = function () {
        var minusBtn = document.getElementById("minus"),
                plusBtn = document.getElementById("plus"),
                numberPlace = document.getElementById("numberPlace"),
                submitBtn = document.getElementById("submit"),
                number = 0, /// number value
                min = 0, /// min number
                max = 30; /// max number

        minusBtn.onclick = function () {
                if (number > min) {
                        number = number - 1; /// Minus 1 of the number
                        numberPlace.innerText = number; /// Display the value in place of the number

                }
                if (number == min) {
                        numberPlace.style.color = "red";
                        setTimeout(function () {
                                numberPlace.style.color = "black"
                        }, 500)
                } else {
                        numberPlace.style.color = "black";
                }

        }
        plusBtn.onclick = function () {
                if (number < max) {
                        number = number + 1;
                        numberPlace.innerText = number; /// Display the value in place of the number
                }
                if (number == max) {
                        numberPlace.style.color = "red";
                        setTimeout(function () {
                                numberPlace.style.color = "black"
                        }, 500)
                } else {
                        numberPlace.style.color = "black";

                }


        }
        submitBtn.onclick = function () {
                alert("you choice : " + number);
        }

}
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item");
const panes = $$(".tab-pane");

const tabActive = $(".tab-item.active");
const line = $(".tabs .line");

// SonDN fixed - Active size wrong size on first load.
// Original post: https://www.facebook.com/groups/649972919142215/?multi_permalinks=1175881616551340
requestIdleCallback(function () {
        line.style.left = tabActive.offsetLeft + "px";
        line.style.width = tabActive.offsetWidth + "px";
});

tabs.forEach((tab, index) => {
        const pane = panes[index];

        tab.onclick = function () {
                $(".tab-item.active").classList.remove("active");
                $(".tab-pane.active").classList.remove("active");

                line.style.left = this.offsetLeft + "px";
                line.style.width = this.offsetWidth + "px";

                this.classList.add("active");
                pane.classList.add("active");
        };
});
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
        scrollFunction()
};

function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                mybutton.style.display = "block";
        } else {
                mybutton.style.display = "none";
        }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
}
const a = document.querySelector.bind(document)
const aa = document.querySelectorAll.bind(document)

const peb = aa('.btnlinksize')
peb.forEach((tab, index) => {
        tab.onclick = function () {
                $('.btnlinksize.btnlinksize-active').classList.remove('btnlinksize-active')
                this.classList.add('btnlinksize-active')
        }
})
const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
        toastTrigger.addEventListener('click', () => {
                const toast = new bootstrap.Toast(toastLiveExample)

                toast.show()
        })
}
var flag = true;

function doimautim() {
        let el = document.getElementById("heart");
        el.style.transition = flag ? "all 0.6s" : "all 0.6s";
        el.style.transform = flag ? "scale(1.2)" : "";
        el.style.color = flag ? "red" : "";

        flag = !flag;
}
const btncart = document.querySelectorAll(".addcart")
btncart.forEach(function(button,index){
        button.addEventListener("click", function(event){
                var btnitem = event.target
                var product = button.parentElement.parentElement
                var productImg = product.querySelector(".imghover").src
                var productName = product.querySelector(".card-text").innerText
                var productPrice = product.querySelector(".price").innerText
                addCart(productImg,productName,productPrice)
        deletecart()

        })

})
function addCart(productImg,productName,productPrice){
        var addpr =document.createElement("p")
        // addpr.classList.add('row', 'text-center', 'product')
        var prcontent = '<div class="product"> <div class="row text-center"> <div class="col-2"> <img src="'+productImg+'" alt="" class="img-fluid h-50"> </div> <div class="col-2 fw-bold color-primary mt-4"> <p class="name-product">'+productName+'</p> </div> <div class="col-2 fw-bold color-primary mt-4"> <p class="price-product">'+productPrice+'</p> </div> <div class="col-2 fw-bold color-primary mt-4"> <input class=" quanity-product" value = "1" min = "1"> </div> <div class="col-2 fw-bold color-primary mt-4"> </div> <div class="col-2 mt-3 fs-3 text-start"> <span class=" cart-delete "> <i class="fa-solid fa-circle-xmark"></i> </span> </div> </div> </div>'
        addpr.innerHTML = prcontent
        var cartTable = document.querySelector(".container-cart")
        cartTable.append(addpr)
        carttotal()
        deletecart()

}
function carttotal() {
        var cartItem = document.querySelectorAll(".product")
        totalC = 0
        // console.log(cartItem)
        for(var i=0;i<cartItem.length;i++){
                var inputValue = cartItem[i].querySelector("input").value
                var productPrice = cartItem[i].querySelector(".price-product").innerHTML
                totalA = inputValue * productPrice
                totalC = totalC + totalA
                // console.log(totalC)
                // totalD = totalC.toLocaleString('de-DE')
        }
        var cartTotalA = document.querySelector(".totalplus span")
        cartTotalA.innerHTML = totalC
}
function deletecart() {
        var cartItem = document.querySelectorAll(".product")
        for(var i=0;i<cartItem.length;i++){
                var productT = document.querySelectorAll(".cart-delete")
                productT[i].addEventListener("click", function(event){
                        var cartDelete = event.target
                        var cartItemR = cartDelete.parentElement.parentElement.parentElement
                        cartItemR.remove()
                        carttotal()
                })
                
        }
}