import * as vscode from 'vscode';
import { BookmarkProvider } from './BookmarkProvider';
import { Bookmark } from './Bookmark';
import { BookmarkGroup } from './BookmarkGroup';

export function activate(context: vscode.ExtensionContext) {
    const bookmarkProvider = new BookmarkProvider(context);
    vscode.window.registerTreeDataProvider<Bookmark | BookmarkGroup>('speedy-bookmarks', bookmarkProvider);

    let disposable1 = vscode.commands.registerCommand('speedy-bookmarks.goToBookmark', (bookmark: Bookmark) => {
        console.log(bookmark);
        let uri = vscode.Uri.file('~/Projects/ListApp/giftlist-back/src/server.js');
        vscode.commands.executeCommand('vscode.open', uri);
    });

    context.subscriptions.push(disposable1);

    let bookmarkGroupContextTest = vscode.commands.registerCommand('speedy-bookmarks.rightClickBookmarkGroup', () => {
        console.log('You right clicked me!');
    });

    context.subscriptions.push(bookmarkGroupContextTest);

    let bookmarkContextTest = vscode.commands.registerCommand('speedy-bookmarks.rightClickBookmark', () => {
        console.log('You right clicked me!');
    });

    context.subscriptions.push(bookmarkContextTest);

    let disposable3 = vscode.commands.registerCommand('speedy-bookmarks.addTestBookmark', () => {
        const activeEditor = vscode.window.activeTextEditor;
        if (!activeEditor) {
            return;
        }
        bookmarkProvider.addBookMark();
        console.log(activeEditor);
    });

    context.subscriptions.push(disposable3);

    let disposable4 = vscode.commands.registerCommand('speedy-bookmarks.addTestBookmarkFolder', () => {
        const activeEditor = vscode.window.activeTextEditor;
        if (!activeEditor) {
            return;
        }
        bookmarkProvider.addBookMarkFolder();
        console.log(activeEditor);
    });

    context.subscriptions.push(disposable4);
}

// this method is called when your extension is deactivated
export function deactivate() {}
