import App from './App.svelte';

document.addEventListener('readystatechange', () => {
    switch (document.readyState) {
        case 'complete':
            document.body.innerHTML = '';

            // Disable existing stylesheets.
            for (let i = 0; i < document.styleSheets.length; i++) {
                const s = document.styleSheets.item(i);
                s.disabled = true;
            }

            const app = new App({
                target: document.body,
            });
            break;
    }
});