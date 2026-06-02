const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');

navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

const form = document.querySelector('#contactForm');
const note = document.querySelector('#formNote');

form.addEventListener('submit', event => {
  event.preventDefault();
  note.textContent = '문의가 접수된 것으로 표시되었습니다. 실제 운영 시 서버 전송 기능을 연결해야 합니다.';
  form.reset();
});
