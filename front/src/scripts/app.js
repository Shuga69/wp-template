import { EventEmitter } from '@helpers/EventEmitter';
import { resizer } from '@helpers/resizer';
import Navbar from '@components/ui/navbar/Navbar';
import Slider from '@components/UI/slider/Slider';

const emitter = new EventEmitter();
window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 500);
};

// NOTE: Navbar
{
    const $navbar = document.querySelector('[data-nav]') || null;

    // const $header = document.querySelector('[data-scroll]') || null;
    // const scrollUp = 'scroll-up';
    // const scrollDown = 'scroll-down';
    // let lastScroll = 0;

    if ($navbar) {
        let navbar = null;
        const mq = window.matchMedia('(max-width: 796px)');

        const checkMq = () => {
            if (mq.matches) {
                navbar?.destroy();
                navbar = new Navbar($navbar);
                navbar.init();
            } else if (navbar !== null) {
                navbar?.destroy();
                navbar = null;
            }
        };

        checkMq();
        mq.addListener(checkMq);
    }
    // window.addEventListener('scroll', () => {
    //     const currentScroll = window.pageYOffset;
    //     if (currentScroll <= 0) {
    //         $header.classList.remove(scrollUp);
    //         return;
    //     }

    //     if (currentScroll > lastScroll && !$header.classList.contains(scrollDown)) {
    //         // down
    //         $header.classList.remove(scrollUp);
    //         $header.classList.add(scrollDown);
    //     } else if (currentScroll < lastScroll && $header.classList.contains(scrollDown)) {
    //         // up
    //         $header.classList.remove(scrollDown);
    //         $header.classList.add(scrollUp);
    //     }
    //     lastScroll = currentScroll;
    // });
}

//Animation


// NOTE: Slider media query
{
    const $sliders = document.querySelectorAll('[data-slider-mq]');

    if ($sliders.length) {
        $sliders.forEach($slider => {
            let swiper = null;
            const mq = window.matchMedia(`(max-width: ${$slider.dataset.sliderMq}px)`);

            const checkMq = () => {
                if (mq.matches) {
                    $slider.removeAttribute('class');
                    $slider.classList.add('swiper-container');
                    swiper = new Slider($slider);
                    swiper.init();
                } else if (swiper !== null) {
                    $slider.removeAttribute('class');
                    $slider.classList.remove('swiper-container');
                    swiper.destroy();
                    swiper = null;
                }
            };

            checkMq();
            mq.addListener(checkMq);
        });
    }
}

// Resize function
resizer({ emitter, ms: 300 });
