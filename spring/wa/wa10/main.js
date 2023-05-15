const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const images = ['chaewon.jpg', `sakura.jpg`, `yunjin.jpg`, `kazuha.jpg`, `eunchae.jpg`];
const alts = {
  'chaewon.jpg' : 'The leader of Le Sserafim',
  'sakura.jpg' : 'The oldest of Le Sserafim',
  'yunjin.jpg' : 'The main vocal of Le Sserafim',
  'kazuha.jpg' : 'The main dancer of Le Sserafim',
  'eunchae.jpg' : 'The Youngest of Le Sserafim'
}

for (const image of images) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/${image}`);
  newImage.setAttribute('alt', alts[image]);
  thumbBar.appendChild(newImage);
  newImage.addEventListener('click', e => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
}

btn.addEventListener('click', () => {
  const btnClass = btn.getAttribute('class');
  if (btnClass === 'dark') {
    btn.setAttribute('class','light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});