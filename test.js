const titleGroup = app.activeDocument.layerSets.getByName('title');
const textLayer = titleGroup.layers[0];
textLayer.textItem.contents = 'The Test Worked';

function savePng(name) {
  const doc = app.activeDocument;
  const file = new File(doc.path + '/' + name + '.png');
  const opts = new PNGSaveOptions();
  opts.quality = 10;

  doc.saveAs(file, opts, true);
}

savePng('HelloWorld');
