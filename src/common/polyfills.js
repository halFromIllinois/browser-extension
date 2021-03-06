'use strict';

// Polyfills for APIs which are not present on all supported
// versions of Chrome

// ES2015+ polyfills
require('core-js/features/object/assign'); // Available: Chrome >= 45
require('core-js/features/object/values'); // Available: Chrome issue #4663

// Polyfill for the fetch() API for Chrome < 42.
require('whatwg-fetch');
