const ansi = require('ansi-escapes');
let holding = {};

const l = text => {
  if (holding.text && holding.showed) {
    process.stdout.write(ansi.eraseLines(holding.lines)); // стираем линии занятые старым холдом
    process.stdout.write(ansi.cursorLeft); // передвигаем курсор до конца налево
  }
  process.stdout.write(text + '\n' + (holding.text || ''));
  if (holding.text && !holding.showed) holding.showed = true;

}
// text passed into this function will be kept always at the bottom of the console
l.hold = text => {
  if (holding.text) {
    process.stdout.write(ansi.eraseLines(holding.lines));
    process.stdout.write(ansi.cursorLeft);
  }
  holding.text = text;
  holding.lines = text.split('\n').length;
  holding.showed = false;
}

// stop keeping the text and remove it
l.stop = () => {
	if (!holding.text) return;
  process.stdout.write(ansi.eraseLines(holding.lines));
	process.stdout.write(ansi.cursorLeft);
	holding.text = null;
	holding.lines = null;
	holding.showed = false;
}

module.exports = l;
