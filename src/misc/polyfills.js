// polyfills.js
global.requestAnimationFrame = callback => setTimeout(callback, 0)
