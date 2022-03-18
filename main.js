
const electron = require('electron');
const url = require('url');
const path = require('path');


const {app, BrowserWindow, Menu} = electron;

let mainWindow;

// Listen for the app to be ready

app.on('ready', function(){
    mainWindow = new BrowserWindow({});

    //Load HTML
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol:'file',
        slashes:true
    }));
    //Build menu from template

    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    //insert Menu
    Menu.setApplicationMenu(mainMenu);
})

//Create Add Window

function createAddWindow(){
    addWindow = new BrowserWindow({
        width:200,
        height:200,
        resizable:false
    });

    //Load HTML
    addWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'addWindow.html'),
        protocol:'file',
        slashes:true
    }));
}

//Add window functions

function addItem(){
    app.name = "Nowa Nazwa Apki";
}

//

const mainMenuTemplate = [
    {
        label:'File',
        submenu:[
            {
                label:'Add Item',
                click(){
                    createAddWindow();
                }
            },
            {
                label:'Clear Items'
            },
            {
                label:'Quit',
                accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
                click(){
                    app.quit();
                }
            }
        ]
    },
    {
        label:'Developer Tools',
        submenu:[
            {
                label:'Toogle',
                click(){
                    
                }
            },
            {
                label:'Reload',
                click(){
                    app.relaunch();
                }
            },
           
        ]
    },
];