if (document.querySelector(".clubs__slider")) {
  const swiper = new Swiper(".clubs__slider", {
    slidesPerView: 2.4,
    spaceBetween: 15,
    loop: true,
    // width: "390",
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    breakpoints: {
      900: {
        slidesPerView: 3,
        spaceBetween: 15,
        centeredSlides: false,
      },
      900: {
        slidesPerView: 4,
        spaceBetween: 39,
      },
    },
  });
}

if (document.querySelector(".discounts__slider")) {
  const discountsSlider = new Swiper(".discounts__slider", {
    slidesPerView: 1,
    spaceBetween: 60,
    loop: true,
    // autoplay: {
    //   delay: 1500,
    //   disableOnInteraction: false,
    // },
    breakpoints: {
      900: {
        slidesPerView: 2,
        spaceBetween: 60,
      },
    },
  });
}
if (document.documentElement.clientWidth >= 1000) {
  if (document.querySelector(".restaurant__slider")) {
    const restaurantSlider = new Swiper(".restaurant__slider", {
      // autoHeight: true,
      slidesPerView: 3,
      // autoWidth: true,
      spaceBetween: 22,
      loop: true,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
      breakpoints: {
        1730: {
          slidesPerView: 2,
          spaceBetween: 22,
        },
        2300: {
          slidesPerView: 3,
          spaceBetween: 22,
        },
      },
    });
  }
  //табы на странице ресторана
  const tabItems = Array.from(
    document.querySelectorAll(".restaurant-menu__btn")
  );
  const contentItem = Array.from(
    document.querySelectorAll(".tabs-content__item")
  );

  const clearActiveClass = (element, className = "active") => {
    element.find((item) => item.classList.remove(`${className}`));
  };

  const setActiveClass = (element, index, className = "active") => {
    element[index].classList.add(`${className}`);
  };

  const checkoutTabs = (item, index) => {
    item.addEventListener("click", () => {
      if (item.classList.contains("active")) return;

      clearActiveClass(tabItems);
      clearActiveClass(contentItem);

      setActiveClass(tabItems, index);
      setActiveClass(contentItem, index);
    });
  };

  tabItems.forEach(checkoutTabs);
}

if (document.documentElement.clientWidth < 1000) {
}
//изменение количесвткатовара в карточке
const counters1 = document.querySelectorAll("[data-counter]");
for (const count of counters1) {
  const catrMinusBtns = count.querySelector(".cart-minus");
  const catrPlusBtns = count.querySelector(".cart-plus");
  const counts = count.querySelector(".count");

  let countontent = parseInt(count.textContent);

  function plus(event) {
    event.preventDefault();
    ++countontent;
    counts.textContent = countontent;
    summBasket();
  }

  function minus(event) {
    event.preventDefault();
    if (countontent > 1) {
      --countontent;
      counts.textContent = countontent;
      summBasket();
    }
  }
  catrMinusBtns.addEventListener("click", minus);
  catrPlusBtns.addEventListener("click", plus);
}

const counters = document.querySelectorAll("[data-counter]");

//меню на странице доставки
const menu = document.querySelector(".btn-block__btn-more");

if (menu) {
  menu.addEventListener("click", function () {
    this.classList.add("btn-block__item-more--active");

    document.body.style.overflow = "hidden";
  });
}

const tabNavItems = document.querySelectorAll(".btn-block__item");
const tabContentItems = document.querySelectorAll(".categories__items");

for (const tabNavItem of tabNavItems) {
  tabNavItem.addEventListener("click", activeTab);
}

function activeTab() {
  for (const tabNavItem of tabNavItems) {
    tabNavItem.classList.remove("btn-block__item--active");
  }
  this.classList.add("btn-block__item--active");
  let tabName = this.getAttribute("data-variant");
  activeTabContent(tabName);
  if (menu.classList.contains("btn-block__item-more--active")) {
    menu.classList.remove("btn-block__item-more--active");
  }
}

function activeTabContent(tabName) {
  for (const tabContentItem of tabContentItems) {
    tabContentItem.classList.remove("categories__items--active");
    if (tabContentItem.getAttribute("data-variant") === tabName) {
      tabContentItem.classList.add("categories__items--active");
    }
  }
}

//модальное окно на странице доставки
const carts = document.querySelectorAll(".cart__img");
const modal = document.querySelector(".delivery-popup");

for (const cart of carts) {
  cart.addEventListener("click", () => {
    modal.classList.add("modal-active");
    document.body.style.overflow = "hidden";
  });
}
const closeModal = document.querySelector("[data-btnBasket]");
if (closeModal) {
  closeModal.addEventListener("click", () => {
    modal.classList.remove("modal-active");
    document.body.style.overflow = "auto";
  });
}

//модальное окно в корзине
if (document.querySelector("[data-basket-btn]")) {
  const basketBtnn = document
    .querySelector("[data-basket-btn]")
    .addEventListener("click", (event) => {
      event.preventDefault();
      modal.classList.add("modal-active");
    });
}
//модальное окно контактов
if (document.querySelector("[data-geo]")) {
  document.querySelector("[data-geo]").addEventListener("click", () => {
    document
      .querySelector("[data-modal-contact]")
      .classList.toggle("modal-active");
    document.body.style.overflow = "hidden";
  });
}

//модальое окно ресторана
if (document.querySelector("[data-restaraunt-btn]")) {
  document
    .querySelector("[data-restaraunt-btn]")
    .addEventListener("click", () => {
      document
        .querySelector("[data-modal-restaraunt]")
        .classList.toggle("modal-active");
      document.body.style.overflow = "hidden";
    });
}

//модальное окно корзины
if (document.querySelector("[data-basket]")) {
  document.querySelector("[data-basket]").addEventListener("click", () => {
    document
      .querySelector("[data-modal-basket]")
      .classList.toggle("modal-active");
    document.body.style.overflow = "hidden";
  });
}
//модальное окно формы
if (document.querySelector("[data-order-btn]")) {
  document.querySelector("[data-order-btn]").addEventListener("click", () => {
    document
      .querySelector("[data-modal-order]")
      .classList.toggle("modal-active");

    document
      .querySelector("[data-modal-basket]")
      .classList.remove("modal-active");
    document.body.style.overflow = "hidden";
  });
}
//слайдер в модальном окне

if (document.querySelector(".modal__slider")) {
  const swiper = new Swiper(".modal__slider", {
    slidesPerView: 1,
    spaceBetween: 15,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

//закрытие модальных окон в мобильной версии

const closeMobiles = document.querySelectorAll("[data-closeMobile]");

for (const closeMobile of closeMobiles) {
  closeMobile.addEventListener("click", () => {
    closeMobile.closest(".modal").classList.remove("modal-active");

    document.body.style.overflow = "auto";
  });
}

//подсчет суммы в корзине
function summBasket() {
  const basketProductItems = document.querySelectorAll("[data-dproduct]");

  let totalSum = 0;
  let totalSale = 0;
  const sumDelivery = 350;

  for (const basketProductItem of basketProductItems) {
    const newPrice = basketProductItem.querySelector("[data-new-price]");
    const oldPrice = basketProductItem.querySelector("[data-old-price]");
    const counter = basketProductItem.querySelector("[data-count]");

    const sum = parseInt(newPrice.innerText) * parseInt(counter.innerText);
    const sale = parseInt(counter.innerText) * parseInt(oldPrice.innerText);

    totalSum += sum;
    totalSale += sale;
  }
  sumBusket = totalSum + sumDelivery - totalSale;

  if (document.querySelector("[data-total-sum]")) {
    document.querySelector("[data-total-sum]").innerText =
      totalSum.toLocaleString();
  }
  {
    if (document.querySelector("[data-sale-sum]"))
      document.querySelector("[data-sale-sum]").innerText =
        totalSale.toLocaleString();
  }
  if (document.querySelector("[data-total]")) {
    document.querySelector("[data-total]").innerText =
      sumBusket.toLocaleString();
  }
  if (document.querySelector("[data-delivery-sum]")) {
    document.querySelector("[data-delivery-sum]").innerText =
      sumDelivery.toLocaleString();
  }
}
if (document.querySelector(".basket-content")) {
  summBasket();
}

//маска времени
$.mask.definitions["H"] = "[012]";
$.mask.definitions["h"] = "[0123]";
$.mask.definitions["M"] = "[012345]";
$(".delivery-popup__input").mask("Hh:M9");

//маска телефона
$(".modal-form__input--phone").mask("+7(999) 999-99-99");
