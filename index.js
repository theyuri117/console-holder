const ansi = require('ansi-escapes');
let holding = {};

const l = text => {
  if (holding.text && holding.showed) {
    process.stdout.write(ansi.eraseLines(holding.lines));
    process.stdout.write(ansi.cursorLeft);
  }
  process.stdout.write(text + '\n' + (holding.text || ''));
  if (holding.text && !holding.showed) holding.showed = true;
}
l.hold = text => {
  holding.text = text;
  holding.lines = text.split('\n').length;
  holding.showed = false;
}
l.stop = () => {
	if (!holding.text) return;
  process.stdout.write(ansi.eraseLines(holding.lines));
	process.stdout.write(ansi.cursorLeft);
	holding.text = null;
	holding.lines = null;
	holding.showed = false;
}

module.exports = l;
