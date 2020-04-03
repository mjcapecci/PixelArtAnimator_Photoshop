function makeSelection(x, y, sw, sh, strInUnit) {
  //makeSelection(x,y,sw,sh,"cm")
  var ysh = new UnitValue(parseFloat(y + sh), strInUnit);
  var xsw = new UnitValue(parseFloat(x + sw), strInUnit);
  app.activeDocument.selection.select([
    [x, y],
    [x, ysh],
    [xsw, ysh],
    [xsw, y]
  ]);
}

makeSelection(5, 13, 7, 3, 'px');
