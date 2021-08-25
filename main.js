const { app, BrowserWindow } = require('electron');

let mainWindow = null;
async function createWindow(){
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    });

    await mainWindow.loadFile('src/index.html')

}

app.whenReady().then(createWindow);