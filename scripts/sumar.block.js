Blockly.common.defineBlocksWithJsonArray([{
  "type": 'sumar_block',
  "message0": "sumar(numeroA %1, numeroB %2)",
  "args0": [
    {
      "type": "field_number",
      "name": "numeroA",
      "value": 0,
      "min": 1,
      // "precision": 10
    },
    {
      "type": "field_number",
      "name": "numeroB",
      "value": 0,
      "min": 1,
      // "precision": 10
    }
  ],
  "colour": '%{BKY_MATH_HUE}'


}])

javascript.javascriptGenerator.forBlock['sumar_block'] = function (block) {
  // Collect argument strings.
  let fieldValueA = block.getFieldValue('numeroA');
  let fieldValueB = block.getFieldValue('numeroB');
  let resultado = fieldValueA + fieldValueB
  let code = `let resultado = ${fieldValueA} + ${fieldValueB}
  alert("El resultado de tu suma es: ${resultado}")
  `
  // Return code.
  return code;
}
