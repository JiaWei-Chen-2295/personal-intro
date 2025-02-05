/**
 * @description Get the current theme of the user
 */
export function getTheme() {
    if (typeof window !== 'undefined') {
        return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    }
    return "light";
}
// const themeMedia = window.matchMedia("(prefers-color-scheme: light)");
// themeMedia.addListener(e => {
//     if (e.matches) {
//         console.log('light')
//     } else {
//         console.log('dark')
//     }
// });

