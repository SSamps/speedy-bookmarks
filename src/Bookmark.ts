import * as path from 'path';
import * as vscode from 'vscode';

export class Bookmark extends vscode.TreeItem {
    bookmarkPath: string;
    lineStart: number;
    lineEnd: number;
    highlightType: string;
    contextValue: string = 'bookmark';
    command: vscode.Command = { command: 'speedy-bookmarks.goToBookmark', title: 'GoTo', arguments: [this] };
    collapsibleState: vscode.TreeItemCollapsibleState = vscode.TreeItemCollapsibleState.None;
    // iconPath = path.join(__filename, '..', '..', 'resources', 'icons', 'bookmark.svg');
    iconPath = new vscode.ThemeIcon('bookmark', new vscode.ThemeColor('#e35f'));

    constructor(label: string, bookmarkPath: string, lineStart: number, lineEnd: number, highlightType: string) {
        super(label);
        this.bookmarkPath = bookmarkPath;
        this.lineStart = lineStart;
        this.lineEnd = lineEnd;
        this.highlightType = highlightType;
    }
}
