const { app, BrowserWindow, Menu } = require('electron');

let mainWindow = null;
async function createWindow(){
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    });

    await mainWindow.loadFile('src/index.html')

}
//Menu

const templateMenu = [
    {
        label: 'Menu',
        submenu: [
            {
                label: "New",
                click(){
                    console.log("Clicado")
                }
            },
            {
                label: "Quit",
                role:process.platform === "darwin" ? "close" : "quit"
            }
        ]
    }
];

const menu = Menu.buildFromTemplate(templateMenu);
Menu.setApplicationMenu(menu);

// Open Template
app.whenReady().then(createWindow);

//For Mac

app.on('activate', () => {
    if(BrowserWindow.getAllWindows().length === 0){
        createWindow();
    }
});