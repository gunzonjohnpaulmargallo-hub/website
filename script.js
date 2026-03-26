const body = document.body;
const nightButton = document.getElementById('night');
const dayButton = document.getElementById('day');

//pang toggle sa night mode
function toggle(darkmode) {
  if (darkmode) {
    body.classList.add('gabi');
    nightButton.style.display = 'none';
    dayButton.style.display = 'block';
  } else {
    body.classList.remove('gabi');
    nightButton.style.display = 'block';
    dayButton.style.display = 'none';
  }
}

//para naka default sa light mode
toggle(false);

nightButton.addEventListener('click', (e) => {
  e.preventDefault();
  toggle(true);
});

dayButton.addEventListener('click', () => {
  toggle(false);
});

//para ma close nung button
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


