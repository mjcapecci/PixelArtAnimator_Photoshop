function moveSelection() {
  app.preferences.rulerUnits = Units.PIXELS;
  const doc = app.activeDocument;
  doc.selection.translate(1, 0);
}

function printSelection() {
  alert(app.activeDocument.selection[0]);
}

printSelection();
