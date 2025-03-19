// Handle Reddit URLs with 'tl' parameter
chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    let url = new URL(details.url);
    if (url.searchParams.has('tl')) {
      url.searchParams.delete('tl');
      return { redirectUrl: url.toString() };
    }
  },
  { urls: ["https://www.reddit.com/*"] },
  ["blocking"]
);

// Handle Google Cloud URLs with 'hl' parameter (any language)
chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    let url = new URL(details.url);
    if (url.searchParams.has('hl')) {
      url.searchParams.delete('hl');
      // If there are no more search parameters, remove the '?' from the URL
      return { redirectUrl: url.toString() };
    }
  },
  { urls: ["https://cloud.google.com/*"] },
  ["blocking"]
);

