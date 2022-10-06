export const breakpoints = spaceBetween => ({
    1991: {
        spaceBetween,
    },
});

export const navigation = $slider => ({
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
});

export const pagination = $slider => ({
    el: $slider.closest('[data-slider-wrap]')?.querySelector('[data-slider-pagination]'),
    clickable: true,
    renderBullet: function (index, className) {
        return '<span class="' + className + '"></span>';
    },
});
