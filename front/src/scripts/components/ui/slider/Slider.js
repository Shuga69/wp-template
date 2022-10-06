import { breakpoints, navigation, pagination } from '@components/UI/slider/slider.function';

export default class Slider {
    constructor($slider) {
        this.$slider = $slider;
        this.spaceBetween = this.$slider.getAttribute('data-space-between');
    }

    init() {
        const [spaceDesktop, spaceMobile] = this.spaceBetween?.split(':') || [0, 0];

        import(/* webpackChunkName: "swiper" */ 'swiper/core').then(module => {
            const { Navigation, Pagination } = module;
            const Swiper = module.default;
            Swiper.use([Navigation, Pagination]);
            const $slider = this.$slider;
            console.log(navigation($slider));
            this.swiper = new Swiper($slider, {
                spaceBetween: Number(spaceMobile),
                slidesPerView: 'auto',
                threshold: 15,
                initialSlide: 0,
                watchOverflow: true,
                observer: true,
                observeParents: true,
                observeSlideChildren: true,
                navigation: { ...navigation($slider) },
                pagination: { ...pagination($slider) },
                breakpoints: { ...breakpoints(Number(spaceDesktop)) },
            });
        });
    }

    destroy() {
        if (this.swiper !== null) {
            this.swiper.destroy();
            this.swiper = null;
        }
    }
}
