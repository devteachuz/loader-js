document.addEventListener("DOMContentLoaded",()=> {
    let loader = document.querySelector('.loader')
    let loaderAll = document.querySelector(".loader-all")
    setTimeout((e) => {
        console.log(e);
            loader.style.opacity = "0.6"
            loaderAll.style.opacity = "0.6"
        setTimeout((e)=>{
            loaderAll.style.display = "none" 
        },1000)
    },2000);
})