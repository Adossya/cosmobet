window.addEventListener('DOMContentLoaded', () => {
    const data = [
        { 
            link: 'https://cosmobet.com/en/casino/gamepage?gameid=6672', 
            img: 'sugar-skulls.jpg' 
        },
        { 
            link: 'https://cosmobet.com/en/casino/gamepage?gameid=13259', 
            img: 'king-kong.jpg' 
        },
        { 
            link: 'https://cosmobet.com/en/casino/gamepage?gameid=15019', 
            img: 'monster-pop.jpg' 
        },
        { 
            link: 'https://cosmobet.com/en/casino/gamepage?gameid=8821', 
            img: 'solar-queen.gif' 
        },
        { 
            link: 'https://cosmobet.com/en/casino/gamepage?gameid=12676', 
            img: 'book-of-treasures.png' 
        },
        { 
            link: 'https://cosmobet.com/en/casino/gamepage?gameid=24531', 
            img: 'cosmobet-catch.png' 
        },
        { 
            link: 'https://cosmobet.com/en/casino/gamepage?gameid=26398', 
            img: 'jokers-super.png' 
        },
        { 
            link: 'https://cosmobet.com/en/casino/gamepage?gameid=27460', 
            img: 'zombie-market.png' 
        },
        { 
            link: 'https://cosmobet.com/en/casino/gamepage?gameid=28453', 
            img: 'savannah-spins.png' 
        },
        { 
            link: 'https://cosmobet.com/en/casino/gamepage?gameid=12325', 
            img: 'wild-santa.jpg' 
        },
        { 
            link: 'https://cosmobet.com/en/casino/gamepage?gameid=13035', 
            img: 'monster-madness.jpg' 
        },
        { 
            link: 'https://cosmobet.com/en/casino/gamepage?gameid=13299', 
            img: 'wish-upon.jpg' 
        }
    ];

    const wrapper = document.querySelector('.casino__wrapper');

    data.forEach(item => {
        const a = document.createElement('a');
        a.href = item.link;  // берем ссылку из data
        a.className = "casino__item";

        const img = document.createElement('img');
        img.src = `./img/slots/${item.img}`; // берем изображение из data
        img.alt = "slot";
        img.className = "casino__item-img";

        const hover = document.createElement('div');
        hover.className = "casino__hover";

        const hoverBtn = document.createElement('div');
        hoverBtn.className = "casino__hover-btn";

        hoverBtn.innerHTML = `
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_b_11_8025)">
                    <rect x="-0.00109863" width="60" height="60" rx="30" fill="url(#paint0_linear_11_8025)"></rect>
                </g>
                <path d="M40.2295 27.4643C42.3778 28.7667 42.3778 32.0227 40.2295 33.3251L26.9374 41.3837C24.7891 42.6861 22.1039 41.0581 22.1039 38.4533L22.1039 22.3361C22.1039 19.7313 24.7891 18.1033 26.9374 19.4057L40.2295 27.4643Z" fill="white"></path>
                <defs>
                    <filter id="filter0_b_11_8025" x="-12.0011" y="-12" width="84" height="84" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="6"></feGaussianBlur>
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_11_8025"></feComposite>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_11_8025" result="shape"></feBlend>
                    </filter>
                    <linearGradient id="paint0_linear_11_8025" x1="57.5444" y1="14.0625" x2="-0.799888" y2="16.1539" gradientUnits="userSpaceOnUse">
                        <stop offset="0.0909934" stop-color="#A60C3A"></stop>
                        <stop offset="0.454701" stop-color="#CF0E48"></stop>
                        <stop offset="1" stop-color="#CF3516"></stop>
                    </linearGradient>
                </defs>
            </svg>
        `;

        hover.appendChild(hoverBtn);
        a.appendChild(img);
        a.appendChild(hover);
        wrapper.appendChild(a);
    });


    document.getElementById('year').textContent = new Date().getFullYear();


   const hamburger = document.querySelector('.header__hamburger');
   const desktopList = document.querySelector('.header__nav');
    function toggleHamburgerClass() {
        if (!hamburger) return;
        if (window.matchMedia('(max-width: 639px)').matches) {
            hamburger.classList.add('active');
            desktopList.classList.add('active');
        } else {
            hamburger.classList.remove('active');
            desktopList.classList.remove('active');
        }
    }

    toggleHamburgerClass();


    window.addEventListener('resize', toggleHamburgerClass);

    const mobMenu = document.querySelector('.hamburger');
    const closeHamburger = document.querySelector('.hamburger__close');
    const scene = document.querySelector('.hamburger__scene');
    const body = document.querySelector('.body');

    hamburger.addEventListener('click', (e) => {
        mobMenu.classList.add('active');
        scene.classList.add('active');
        body.classList.add('active');
    })


    closeHamburger.addEventListener('click',(e) => {
        mobMenu.classList.remove('active');
        scene.classList.remove('active');
        body.classList.remove('active');
    })
    scene.addEventListener('click',(e) => {
        mobMenu.classList.remove('active');
        scene.classList.remove('active');
        body.classList.remove('active');
    })

});
