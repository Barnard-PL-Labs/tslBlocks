Blockly.common.defineBlocks('./blocks/blocks');
let spec = ""
var toolbox = document.getElementById("toolbox");

var options = {
	toolbox : toolbox,
	collapse : true,
	comments : true,
	disable : true,
	maxBlocks : Infinity,
	trashcan : true,
	horizontalLayout : false,
	toolboxPosition : 'start',
	css : true,
	media : 'https://blockly-demo.appspot.com/static/media/',
	rtl : false,
	scrollbars : true,
	sounds : true,
	oneBasedIndex : true
};

/* Inject workspace */
var workspace = Blockly.inject(document.getElementById("blocklyDiv"), options);

/* Load Workspace Blocks from XML to workspace */
var workspaceBlocks = document.getElementById("workspaceBlocks");

/* Load blocks to workspace */
Blockly.Xml.domToWorkspace(workspaceBlocks, workspace);

const runCode = () => {
	const code = tsl.workspaceToCode(workspace);
	spec = code
	console.log(code);
};
runCode();

// Whenever the workspace changes meaningfully, run the code again.
workspace.addChangeListener((e) => {
	if (e.isUiEvent || e.type == Blockly.Events.FINISHED_LOADING ||
		workspace.isDragging()) {
		return;
	}
	runCode();
});
