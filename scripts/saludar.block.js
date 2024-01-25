Blockly.common.defineBlocksWithJsonArray([{
  "type": 'saludar_block',
  "message0": "saludar(%1)",
  "args0": [
    {
      "type": "field_input",
      "name": "VALUE",
      "text": "nombre",
      "spellcheck": false
    }
  ],
  "colour": '%{BKY_TEXTS_HUE}'


}])

javascript.javascriptGenerator.forBlock['saludar_block'] = function (block) {
  // Collect argument strings.
  let fieldValue = block.getFieldValue('VALUE');
  let code = `alert("Hola ${fieldValue}")`
  // Return code.
  return code;
}


