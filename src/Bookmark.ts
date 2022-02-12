import * as vscode from 'vscode';

export class Bookmark extends vscode.TreeItem {
    path: string;
    lineStart: number;
    lineEnd: number;
    highlightType: string;
    contextValue: string = 'bookmark';
    command: vscode.Command = { command: 'speedy-bookmarks.goToBookmark', title: 'GoTo', arguments: [this] };
    collapsibleState: vscode.TreeItemCollapsibleState = vscode.TreeItemCollapsibleState.None;

    constructor(label: string, path: string, lineStart: number, lineEnd: number, highlightType: string) {
        super(label);
        this.path = path;
        this.lineStart = lineStart;
        this.lineEnd = lineEnd;
        this.highlightType = highlightType;
    }
}
