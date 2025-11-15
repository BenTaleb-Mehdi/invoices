

const buttonShow = document.querySelector(".show_menu");
const buttonClose = document.querySelector(".close_menu");
const menu = document.querySelector(".menu");


buttonShow.addEventListener('click',()=>{
    menu.classList.toggle("translate-x-full");
})

buttonClose.addEventListener("click", () => {
  menu.classList.add("translate-x-full");
});



document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll('[data-hs-tab]');
  
  buttons.forEach(button => {
    button.addEventListener("click", () => {
    
      buttons.forEach(btn => {
        btn.classList.remove("active", "bg-white", "shadow-md");
        btn.setAttribute("aria-selected", "false");
      });

    
      const allTabs = document.querySelectorAll("[role='tabpanel']");
      allTabs.forEach(tab => tab.classList.add("hidden"));

      
      button.classList.add("active", "bg-white", "shadow-md");
      button.setAttribute("aria-selected", "true");

      
      const target = button.getAttribute("data-hs-tab");
      const tabContent = document.querySelector(target);
      if (tabContent) tabContent.classList.remove("hidden");
    });
  });
});



const sections = document.querySelectorAll(".hidden-anim");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show-anim");
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach((section) => observer.observe(section));
