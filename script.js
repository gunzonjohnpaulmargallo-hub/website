const body = document.body;
const nightButton = document.getElementById('night');
const dayButton = document.getElementById('day');


function toggleMode(isDark) {
  if (isDark) {
    body.classList.add('dark-mode');
    nightButton.style.display = 'none';
    dayButton.style.display = 'block';
  } else {
    body.classList.remove('dark-mode');
    nightButton.style.display = 'block';
    dayButton.style.display = 'none';
  }
}


toggleMode(false);

nightButton.addEventListener('click', (e) => {
  e.preventDefault();
  toggleMode(true);
});

dayButton.addEventListener('click', () => {
  toggleMode(false);
});


document.querySelectorAll('.menu button').forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.getAttribute('data-target');
    const popup = document.getElementById(targetId);
    if (popup) {
      popup.style.display = 'block';
    }
  });
});


document.querySelectorAll('.close-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const popup = btn.closest('.popup');
    if (popup) {
      popup.style.display = 'none';
    }
  });
});


