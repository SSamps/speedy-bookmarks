import * as vscode from 'vscode';
import { Bookmark } from './Bookmark';
import { BookmarkGroup } from './BookmarkGroup';

export class BookmarkProvider implements vscode.TreeDataProvider<Bookmark | BookmarkGroup> {
    constructor(private context: vscode.ExtensionContext) {}

    private bookmarkGroups: BookmarkGroup[] = [];

    async getChildren(bookmarkGroup?: BookmarkGroup): Promise<BookmarkGroup[] | Bookmark[]> {
        if (bookmarkGroup) {
            return bookmarkGroup.getChildren();
        }
        return this.bookmarkGroups;
    }

    getTreeItem(bookmark: Bookmark): vscode.TreeItem {
        return bookmark;
    }

    addBookMark() {
        if (this.bookmarkGroups.length < 1) {
            this.addBookMarkFolder();
        }

        this.bookmarkGroups[0].addBookmark();
        this.refresh();
    }

    addBookMarkFolder() {
        let testBookmarkFolder = new BookmarkGroup('testFolder', 'testType', vscode.TreeItemCollapsibleState.Expanded);
        this.bookmarkGroups.push(testBookmarkFolder);
        this.refresh();
    }

    private _onDidChangeTreeData: vscode.EventEmitter<Bookmark | undefined | null | void> = new vscode.EventEmitter<
        Bookmark | undefined | null | void
    >();

    readonly onDidChangeTreeData: vscode.Event<Bookmark | undefined | null | void> = this._onDidChangeTreeData.event;

    refresh(): void {
        this._onDidChangeTreeData.fire();
    }
}
