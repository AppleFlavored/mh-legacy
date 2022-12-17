const beforeRequest = (details: chrome.webRequest.WebRequestDetails) => {
    const filter = chrome.webRequest.filterResponseData(details.requestId);
    const decoder = new TextDecoder("utf-8");
    const encoder = new TextEncoder();

    const data: any[] = [];
    filter.ondata = event => {
        data.push(event.data);
    };

    filter.onstop = event => {
        let str = '';
        for (const buffer of data) {
            str += decoder.decode(buffer, { stream: true });
        }
        str += decoder.decode();
        
        str = str
            .replace(/<script/g, '<!--<script')
            .replace(/<\/script>/g, '</script>-->');

        filter.write(encoder.encode(str));
        filter.close();
    };
}

chrome.webRequest.onBeforeRequest.addListener(
    beforeRequest,
    { urls: ['https://*.minehut.com/*'], types: ["main_frame"] },
    ['blocking']
);