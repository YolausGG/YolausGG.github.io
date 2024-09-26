/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load("particles-js", "particlesjs-config.json", function () { });

const toggleBtn = document.querySelector(".toggle-btn");
const toggleBtnIcon = document.querySelector(".toggle-btn img");
const dropDownMenu = document.querySelector(".dropdown_nav-menu");

toggleBtn.addEventListener("click", () => {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");

  toggleBtnIcon.src = isOpen ? "./img/cruz.webp" : "./img/menu-hamburguesa.webp";
});

const optionsNavbar = document.getElementsByClassName("nav-item")

Array.prototype.forEach.call(optionsNavbar, (option) => {
  option.addEventListener("click", () => {
    dropDownMenu.classList.toggle("open");
    const isOpen = dropDownMenu.classList.contains("open");

    toggleBtnIcon.src = isOpen ? "./img/cruz.webp" : "./img/menu-hamburguesa.webp";
  })
})

const btnsCerrarInfo = document.getElementsByClassName("btnCerrarInfo");
const btnsAbrirInfo = document.getElementsByClassName("btnAbrirInfo");
const dialogsInfo = document.querySelectorAll("dialog");

Array.prototype.forEach.call(btnsAbrirInfo, (btnAbrirInfo) => {
  btnAbrirInfo.addEventListener("click", () => {
    dialogsInfo.forEach((dialgoInfo) => {
      if (btnAbrirInfo.id == "btnGDB" && dialgoInfo.id == "dialogGDB") {
        dialgoInfo.showModal();
      }
      if (
        btnAbrirInfo.id == "btnECommerce" &&
        dialgoInfo.id == "dialogEcommerce"
      ) {
        dialgoInfo.showModal();
      }
      if (
        btnAbrirInfo.id == "btnProyectosReact" &&
        dialgoInfo.id == "dialogProyectosReact"
      ) {
        dialgoInfo.showModal();
      }
      if (
        btnAbrirInfo.id == "btnPortafolioWeb" &&
        dialgoInfo.id == "dialogPortafolioWeb"
      ) {
        dialgoInfo.showModal();
      }
    });
  });
});

Array.prototype.forEach.call(btnsCerrarInfo, (btnCerrarInfo) => {
  btnCerrarInfo.addEventListener("click", () => {
    dialogsInfo.forEach((dialgoInfo) => {
      dialgoInfo.close();
    });
  });
});
