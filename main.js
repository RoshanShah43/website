
    const images = [
      'organ.jpg',
      'ha.WEBP',
      'o.jpg',
      'bu.jpg'
    ];

    let current = 0;
    const hero = document.getElementById('hero');

    function changeBackground() {
      hero.style.backgroundImage = `url('${images[current]}')`;
      current = (current + 1) % images.length;
    }

    changeBackground();
    setInterval(changeBackground, 5000);

function login(show) {
    const popup = document.getElementById('login-popup');
    const formSection = document.getElementById('log');
    if (show) {
        popup.style.display = 'flex';
        formSection.style.display = 'flex';
    } else {
        popup.style.display = 'none';
        formSection.style.display = 'none';
    }
}
