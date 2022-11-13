import App from "./App.svelte";

document.addEventListener('readystatechange', () => {
    if (document.readyState !== 'complete')
        return;

    // Clear document.body to prevent Vue from mounting.
    // This causes Vue to error... are there any better ways to do this?
    document.body.innerHTML = '';
    
    // Disable existing stylesheets.
    for (let i = 0; i < document.styleSheets.length; i++) {
        const s = document.styleSheets.item(i);
        s.disabled = true;
    }

    const app = new App({
        target: document.body,
    });
});