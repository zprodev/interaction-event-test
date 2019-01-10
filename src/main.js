let scriptName = location.href.split('#')[1];
if (!scriptName) {
  scriptName = 'default.js';
} else {
  scriptName = `${scriptName}.js`;
}
const script = document.createElement('script');
script.src = `src/${scriptName}`;
window.document.body.appendChild(script);