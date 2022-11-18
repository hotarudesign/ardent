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

for (let i = 0; i < modal.length; i++) {
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
document.addEventListener(
  "DOMContentLoaded",
  function () {
    const tabs = document.getElementsByClassName("tab__ttl");
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].addEventListener("click", tabSwitch, false);
    }
    function tabSwitch() {
      document
        .getElementsByClassName("is-active")[0]
        .classList.remove("is-active");
      this.classList.add("is-active");
      document.getElementsByClassName("is-show")[0].classList.remove("is-show");
      const arrayTabs = Array.prototype.slice.call(tabs);
      const index = arrayTabs.indexOf(this);
      document
        .getElementsByClassName("type__panel")
        [index].classList.add("is-show");
    }
  },
  false
);

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
          window.pageYOffset + targetElement.getBoundingClientRect().top - 80;
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
