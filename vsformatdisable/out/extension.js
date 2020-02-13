"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
var activatedState = false;
function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "testextension" is now active!');
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    let toggleAll = vscode.commands.registerCommand('extension.toggleAll', () => {
        var _a;
        // The code you place here will be executed every time your command is executed
        // Display a message box to the user
        if (activatedState === false) {
            vscode.window.showInformationMessage('DEACTIVATED auto-formatting');
            const test = vscode.workspace.getConfiguration('vsformatdisable');
            (_a = test.inspect("formatOnSave")) === null || _a === void 0 ? void 0 : _a.globalValue;
            vscode.workspace.getConfiguration().update("editor.formatOnSave", false, true);
            activatedState = true;
        }
        else {
            vscode.workspace.getConfiguration().update("editor.formatOnSave", true, true);
            vscode.window.showInformationMessage('ACTIVATED auto-formatting');
            activatedState = false;
        }
    });
    context.subscriptions.push(toggleAll);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map