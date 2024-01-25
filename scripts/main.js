const toolbox = {
  'kind': 'flyoutToolbox',
  "categorystyle": "text_category",
  "contents": [
    {
      "kind": "block",
      "type": "saludar_block",

    },
    {
      "kind": "block",
      "type": "preguntar_block",

    },
    {
      "kind": "block",
      "type": "sumar_block",

    }
  ]
}
  ;

// Passes the ID.
const workspace = Blockly.inject('blocklyDiv', {
  toolbox: toolbox,
  scrollbars: false,
  horizontalLayout: true,
  toolboxPosition: "end",
});

function showCode() {
  // Generate JavaScript code and display it.
  javascript.javascriptGenerator.INFINITE_LOOP_TRAP = null;
  let code = javascript.javascriptGenerator.workspaceToCode(workspace);
  alert(code);
}

function runCode() {
  const state = Blockly.serialization.workspaces.save(workspace);
  Blockly.serialization.workspaces.load(state, workspace);
  // Generate JavaScript code and run it.
  window.LoopTrap = 1000;
  javascript.javascriptGenerator.INFINITE_LOOP_TRAP =
    'if (--window.LoopTrap < 0) throw "Infinite loop.";\n';
  let code = javascript.javascriptGenerator.workspaceToCode(workspace);
  javascript.javascriptGenerator.INFINITE_LOOP_TRAP = null;



  try {
    eval(code);
  } catch (e) {
    alert(e);
  }
}