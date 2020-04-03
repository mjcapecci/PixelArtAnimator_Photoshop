function makeSelection(x, y, sw, sh, strInUnit) {
  var ysh = new UnitValue(parseFloat(y + sh), strInUnit);
  var xsw = new UnitValue(parseFloat(x + sw), strInUnit);
  app.activeDocument.selection.select([
    [x, y],
    [x, ysh],
    [xsw, ysh],
    [xsw, y]
  ]);
}

function moveSelection(x, y) {
  app.preferences.rulerUnits = Units.PIXELS;
  const doc = app.activeDocument;
  doc.selection.translate(x, y);
  doc.selection.deselect();
}

makeSelection(5, 13, 3, 3, 'px');
moveSelection(-1, 0);
makeSelection(8, 13, 4, 3, 'px');
moveSelection(1, 0);
