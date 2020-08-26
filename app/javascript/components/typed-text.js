import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('  MISSING THE ID ', {
    strings: ["Junior Full Stack & Product", "Developer, based in", "Madrid"],
    typeSpeed: 60,
    loop: false
  });
}

export { loadDynamicBannerText };
