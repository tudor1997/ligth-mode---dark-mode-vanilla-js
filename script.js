const close = document.querySelector(".close");
const open = document.querySelector(".open")
const navList = document.querySelector('.nav-list');
const navElem = document.querySelectorAll('.nav-elem');
const toggleSwitch = document.querySelector('input[type="checkbox"]');
const body = document.body;
const titles = document.querySelectorAll('.title');
const text = document.querySelector('.type p');
const icon = document.querySelector('.icon-type i');


close.addEventListener("click", () => {
    navList.style.top = "-100vh";
})
open.addEventListener("click", () => {
    navList.style.top = "0%";
})

navElem.forEach(item => item.addEventListener('click', () => {
    navList.style.top = "-100vh";
}));


const switchTheme = (e) => {
   if(e.target.checked) {
       document.documentElement.setAttribute('data-theme', 'dark');
       body.style.backgroundImage = "url('./assets/dark.svg')"
       titles.forEach(title => {
           title.style.textShadow = "0px 0px 2px #fff";
           title.style.color = "#fff"});

        text.innerText = "Dark Mode"
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
   } else {
    document.documentElement.setAttribute('data-theme', "light");
    body.style.backgroundImage = "url('./assets/topography.svg')"
    titles.forEach(title => title.style.color = "#000");
    text.innerText = "Light Mode"
    icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
   }
}

toggleSwitch.addEventListener("change", switchTheme);