"use strict";

// モーダル
const modal = document.querySelectorAll(".modal");
const msg = document.getElementById("modalbox");

for (let i = 0; i < modal.length; i++) {
  modal[i].addEventListener("click", function () {
    msg.classList.add("is-active");
    window.setTimeout(function () {
      msg.classList.remove("is-active");
    }, 1000);
  });
}
// フッターモーダル
const footerModal = document.querySelectorAll(".footer__modal");
const footerMsg = document.getElementById("footer__modalbox");

for (let i = 0; i < footerModal.length; i++) {
  footerModal[i].addEventListener("click", function () {
    footerMsg.classList.add("is-active");
    window.setTimeout(function () {
      footerMsg.classList.remove("is-active");
    }, 1000);
  });
}

//ハンバーガーメニュー
const html = document.querySelector("html");
const jsBtn = document.getElementById("js-btn");
const jsNav = document.getElementById("js-nav");
const headerHeight = 0;
let bodyHeight;
let scrollpos;

jsBtn.addEventListener("click", function () {
  this.classList.toggle("is-active");
  jsNav.classList.toggle("is-active");

  if (jsBtn.classList.contains("is-active")) {
    scrollpos = window.pageYOffset;
    html.classList.add("is-menuOpen");
    document.body.style.top = scrollpos * -1 + "px";
    bodyHeight = window.innerHeight;
    jsNav.style.height = bodyHeight - headerHeight + "px";
  } else {
    html.classList.remove("is-menuOpen");
    window.scrollTo(0, scrollpos);
    jsNav.style.height = 100;
  }
});

// planタブメニュー
const planTabs = document.querySelectorAll(".tab__ttl");
const planPanel = document.querySelectorAll(".type__panel");

for (let i = 0; i < planTabs.length; i++) {
  planTabs[i].addEventListener("click", planTabToggle);
}
function planTabToggle() {
  for (let i = 0; i < planTabs.length; i++) {
    planTabs[i].classList.remove("is-active");
  }
  for (let i = 0; i < planPanel.length; i++) {
    planPanel[i].classList.remove("is-show");
  }
  this.classList.add("is-active");
  const aryPlanTabs = Array.prototype.slice.call(planTabs);
  const planIndex = aryPlanTabs.indexOf(this);
  planPanel[planIndex].classList.add("is-show");
}

// equipmentタブメニュー
const equipmentTabs = document.querySelectorAll(".equipment__tab__ttl");
const equipmentPanel = document.querySelectorAll(".equipment__panel");

for (let i = 0; i < equipmentTabs.length; i++) {
  equipmentTabs[i].addEventListener("click", tabToggle);
}
function tabToggle() {
  for (let i = 0; i < equipmentTabs.length; i++) {
    equipmentTabs[i].classList.remove("is-active");
  }
  for (let i = 0; i < equipmentPanel.length; i++) {
    equipmentPanel[i].classList.remove("is-show");
  }
  this.classList.add("is-active");
  const aryEquipmentTabs = Array.prototype.slice.call(equipmentTabs);
  const equipmentIndex = aryEquipmentTabs.indexOf(this);
  equipmentPanel[equipmentIndex].classList.add("is-show");
}

// スムーススクロール
// アンカーリンクスクロール
// スマホ以外
if (window.matchMedia("(min-width: 768px)").matches) {
  window.addEventListener("DOMContentLoaded", () => {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    const anchorLinksArr = Array.prototype.slice.call(anchorLinks);
    anchorLinksArr.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.hash;
        const targetElement = document.querySelector(targetId);
        const targetOffsetTop =
          window.pageYOffset + targetElement.getBoundingClientRect().top - 80;
        window.scrollTo({
          top: targetOffsetTop,
          behavior: "smooth",
        });
      });
    });
  });
} else {
  // スマホ
  window.addEventListener("DOMContentLoaded", () => {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    const anchorLinksArr = Array.prototype.slice.call(anchorLinks);
    anchorLinksArr.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.hash;
        const targetElement = document.querySelector(targetId);
        const targetOffsetTop =
          window.pageYOffset + targetElement.getBoundingClientRect().top - 100;
        jsBtn.click();
        window.scrollTo({
          top: targetOffsetTop,
          behavior: "smooth",
        });
      });
    });
  });
}

// ページトップ
const pageTopBtn = document.querySelector(".page-top");
pageTopBtn.addEventListener("click", scrollTop);
function scrollTop() {
  window.scroll({ top: 0, befavior: "smooth" });
}
window.addEventListener("scroll", scrollEvent);
function scrollEvent() {
  if (window.pageYOffset > 100) {
    pageTopBtn.style.opacity = "1";
  } else if (window.pageYOffset < 100) {
    pageTopBtn.style.opacity = "0";
  }
}

// viewページスライダー
const swiper = new Swiper(".swiper", {
  loop: true,
  effect: "fade",
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  speed: 2000,
  allowTouchMove: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    clickable: true,
  },
});
// kvスライダー
const kvSwiper = new Swiper(".kv-slider", {
  loop: true,
  effect: "fade",
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  speed: 2000,
  allowTouchMove: false,
});
