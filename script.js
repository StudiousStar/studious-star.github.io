// =========================
// MOBILE NAVIGATION
// =========================

const menu = document.querySelector('.menu');
const nav = document.querySelector('#navlinks');

if (menu && nav) {
  menu.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menu.setAttribute('aria-expanded', 'false');
    });
  });
}


// =========================
// PUBLICATION SEARCH
// =========================

const pubSearch = document.querySelector('#pubSearch');
const publications = [
  ...document.querySelectorAll('#pubList .pub')
];

const noResults = document.querySelector('#noResults');

if (pubSearch) {
  pubSearch.addEventListener('input', () => {
    const term = pubSearch.value.toLowerCase().trim();
    let visible = 0;

    publications.forEach(pub => {
      const content = (
        pub.textContent + ' ' + (pub.dataset.search || '')
      ).toLowerCase();

      const matches = content.includes(term);

      pub.hidden = !matches;

      if (matches) visible++;
    });

    if (noResults) {
      noResults.hidden = visible !== 0;
    }
  });
}


// =========================
// AUTOMATIC COPYRIGHT YEAR
// =========================

const year = document.querySelector('#year');

if (year) {
  year.textContent = new Date().getFullYear();
}
