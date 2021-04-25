export class DarkMode {

    protected static isAvailabled: boolean;

    constructor() { console.log('contructor - DarkMode'); }

    static initialize() {
        // Use matchMedia to check the user preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        this.isAvailabled = prefersDark.matches;

        // if (this.isAvailabled) {
            // Listen for changes to the prefers-color-scheme media query
            // tslint:disable-next-line: deprecation
        prefersDark.addEventListener('change', (mediaQuery) => this.toggleDarkMode(mediaQuery.matches));
        // }

        const darkMode = JSON.parse(localStorage.getItem('darkMode'));
        this.toggleDarkMode(darkMode);
    }

    // Add or remove the "dark" class based on if the media query matches
    static toggleDarkMode(active: boolean) {
        // this.statusBar.backgroundColorByHexString((active ? '#000000' : '#ffffff'));

        // Listen for the toggle check/uncheck to toggle the dark class on the
        document.body.classList.toggle('dark', active);
        document.body.setAttribute('data-theme', (active ? 'dark' : 'light'));

        localStorage.setItem('darkMode', JSON.stringify(active));
    }

    static IsAvailable(): boolean {
        return this.isAvailabled;
    }

    static IsActived(): boolean {
        return (!this.isAvailabled ? false : JSON.parse(localStorage.getItem('darkMode')));
    }
}
