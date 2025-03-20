
# webUntranslate Extension

## Overview

**webUntranslate** removes language parameters that are automatically added to Reddit and Google Cloud Docs URLs, ensuring redirection to original, non-translated content. This extension is particularly useful for users who prefer browsing Reddit in their default language without automatic translation.

## Features

- **Automatic URL Redirection**: Strips out the language parameters (`?tl=...`/`?hl=...`) from Reddit and Google Cloud Docs URLs.
- **Lightweight and Efficient**: The extension operates seamlessly in the background with minimal impact on browsing performance.
- **Privacy-Focused**: No data is collected or stored; the extension only processes URLs locally.

## Installation

### Mozilla and Chrome Web Store
1. [Mozilla Addons](https://addons.mozilla.org/addon/webUntranslate/) (Also work on the android version of Firefox)
2. [Chrome Web Store](https://chromewebstore.google.com/detail/web-untranslate/clcjdhcdlcgmkbcggglkhlhonogjmhlb)

### To install the extension directly from GitHub (for testing only):
**For Chrome:
1. Download the repository or clone it using the following command:

   ```sh
   git clone https://github.com/pdecat/webUntranslate.git
   ```


2. Open Chrome and navigate to chrome://extensions/.
3. Enable "Developer mode" in the top right corner.
4. Click "Load unpacked" and select the webUntranslate/chrome directory from the cloned repository.

**For Firefox:
s
1. Download the repository or clone it using the following command:
   ```sh
   git clone https://github.com/pdecat/webUntranslate.git
   ```

1. Open Firefox and navigate to about:debugging.
2. Click on "This Firefox" on the left sidebar.
3. Click on "Load Temporary Add-on..." and select the manifest.json file inside the webUntranslate/firefox directory from the cloned repository.

The extension should now be installed temporarily. Note that it will be removed when you restart Firefox, so repeat these steps if needed.

## Usage

Once installed, webUntranslate works automatically. Simply browse to any Reddit or Google Cloud Docs URLs, the extension will remove any language parameters, redirecting you to the original version of the site.

## Permissions

This extension requires the following permissions:

- **`declarativeNetRequest`**: To intercept and modify network requests, ensuring the removal of language parameters from Reddit URLs.
- **`declarativeNetRequestWithHostAccess`**: To apply the redirection rules specifically to Reddit or Google Cloud Docs URLs.
- **`declarativeNetRequestFeedback`**: To monitor and ensure that the redirection rules are functioning as intended.
- **Host Access to `https://*.reddit.com/*`**: This is necessary to apply the modifications only to Reddit URLs.
- **Host Access to `https://cloud.google.com/*`**: This is necessary to apply the modifications only to Google Cloud Docs URLs.

## Privacy

The webUntranslate extension does not collect, store, or transmit any personal data. All URL processing is done locally on your device.


## License

This project is licensed under the GNU General Public License v3.0. See the [LICENSE](LICENSE) file for more details.

An asset of the logo is from [Freepik](https://fr.freepik.com/)


