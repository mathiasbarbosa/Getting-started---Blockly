Blockly.common.defineBlocksWithJsonArray([{
  "type": 'preguntar_block',
  "message0": "preguntar(%1)",
  "args0": [
    {
      "type": "field_input",
      "name": "VALUE",
      "text": "pregunta",
      "spellcheck": false
    }
  ],
  "colour": '%{BKY_TEXTS_HUE}'
}])

javascript.javascriptGenerator.forBlock['preguntar_block'] = function (block) {
  // Collect argument strings.
  let fieldValue = block.getFieldValue('VALUE');
  let code = `prompt("${fieldValue}")`
  // Return code.
  return code;
}
