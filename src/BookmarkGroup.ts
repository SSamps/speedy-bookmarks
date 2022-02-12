import * as vscode from 'vscode';
import { Bookmark } from './Bookmark';

export class BookmarkGroup extends vscode.TreeItem {
    highlightType: string;
    contextValue: string = 'bookmarkGroup';
    command: vscode.Command = { command: 'speedy-bookmarks.goToBookmark', title: 'GoTo', arguments: [this] };
    collapsibleState: vscode.TreeItemCollapsibleState;
    children: Bookmark[] = [];

    constructor(label: string, highlightType: string, collapsibleState: vscode.TreeItemCollapsibleState) {
        super(label);
        this.highlightType = highlightType;
        this.collapsibleState = collapsibleState;
    }

    getChildren(): Bookmark[] {
        return this.children;
    }

    addBookmark() {
        this.children.push(new Bookmark('testLabelNew', 'testPath', 1, 2, 'typeA'));
    }
}
