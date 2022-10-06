import { hiddenScroll, visibleScroll } from '@helpers/utils';
export default class Navbar {
    constructor($navbar) {
        this.$navbar = $navbar;
        this.$menu = this.$navbar.querySelector('[data-menu]');
        this.$toggler = this.$navbar.querySelector('[data-menu-toggler]');
        this.handler = this.handler.bind(this);
    }

    init() {
        this.$navbar.removeEventListener('click', this.handler);
        this.$navbar.addEventListener('click', this.handler);
    }

    handler(e) {
        const $toggler = e.target.closest('[data-menu-toggler]') || null;

        if ($toggler) {
            $toggler.classList.toggle('is-active');
            this.$menu.classList.toggle('is-active');
            this.$menu.classList.contains('is-active') ? hiddenScroll() : visibleScroll();
        }

        
    }

    destroy() {
        visibleScroll();
        this.$menu.classList.remove('is-active');
        this.$toggler.classList.remove('is-active');
        this.$navbar.removeEventListener('click', this.handler);
    }
}
