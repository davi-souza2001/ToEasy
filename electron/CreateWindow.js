const { BrowserWindow, Menu } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 250,
    height: 310
  })

  const menuContent = Menu.buildFromTemplate([]);
  Menu.setApplicationMenu(menuContent);

  win.loadFile('index.html')
  
  return win
}

module.exports = createWindow()