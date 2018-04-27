const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const Menu = electron.Menu
const path = require('path')
const url = require('url')
const fs = require('fs')

app.on('ready', function() {
    let mainWindow

    function mainApplication() {
        mainWindow = new BrowserWindow({
            width: 800,
            height: 600,
            icon: path.join(__dirname, 'f7builder/img/favicon.png')
        })

        mainWindow.loadURL(url.format({
            pathname: path.join(__dirname, 'f7builder/index.html'),
            protocol: 'file:',
            slashes: true
        }))

        var template = [{
            label: "File",
            submenu: [{
                label: "Exit",
                click: function() {
                    app.quit()
                }
            }]
        }, {
            label: "View",
            submenu: [{
                label: "Reload",
                click: function() {
                    mainWindow.webContents.reload();
                }
            }]
        }, {
            label: "Developer",
            submenu: [{
                label: "UI Builder",
                click: function() {
                    mainBuilder();
                }
            }, {
                label: "Dev Tools",
                click: function() {
                    mainWindow.webContents.openDevTools()
                }
            }, {
                label: "Additional",
                submenu: [{
                    label: "Dialog",
                    click: function() {
                        dialogWindow = new BrowserWindow({
                            width: 380,
                            height: 600,
                            icon: path.join(__dirname, 'f7builder/img/favicon.png')
                        })

                        dialogWindow.loadURL(url.format({
                            pathname: path.join(__dirname, 'f7builder/index_dialog.html'),
                            protocol: 'file:',
                            slashes: true
                        }))

                        var template = [{
                            label: "View",
                            submenu: [{
                                label: "Reload",
                                click: function() {
                                    dialogWindow.webContents.reload();
                                }
                            }]
                        }]

                        var menu = Menu.buildFromTemplate(template);
                        dialogWindow.setMenu(menu);
                    }
                }, {
                    label: "Searchbar Expandable",
                    click: function() {
                        searchbarWindow = new BrowserWindow({
                            width: 380,
                            height: 600,
                            icon: path.join(__dirname, 'f7builder/img/favicon.png')
                        })

                        searchbarWindow.loadURL(url.format({
                            pathname: path.join(__dirname, 'f7builder/index_searchbar.html'),
                            protocol: 'file:',
                            slashes: true
                        }))

                        var template = [{
                            label: "View",
                            submenu: [{
                                label: "Reload",
                                click: function() {
                                    searchbarWindow.webContents.reload();
                                }
                            }]
                        }]

                        var menu = Menu.buildFromTemplate(template);
                        searchbarWindow.setMenu(menu);
                    }
                }, {
                    label: "Searchbar Static",
                    click: function() {
                        searchbarWindow = new BrowserWindow({
                            width: 380,
                            height: 600,
                            icon: path.join(__dirname, 'f7builder/img/favicon.png')
                        })

                        searchbarWindow.loadURL(url.format({
                            pathname: path.join(__dirname, 'f7builder/index_searchbarstatic.html'),
                            protocol: 'file:',
                            slashes: true
                        }))

                        var template = [{
                            label: "View",
                            submenu: [{
                                label: "Reload",
                                click: function() {
                                    searchbarWindow.webContents.reload();
                                }
                            }]
                        }]

                        var menu = Menu.buildFromTemplate(template);
                        searchbarWindow.setMenu(menu);
                    }
                }, {
                    label: "Action Sheet",
                    click: function() {
                        actionsheetWindow = new BrowserWindow({
                            width: 380,
                            height: 600,
                            icon: path.join(__dirname, 'f7builder/img/favicon.png')
                        })

                        actionsheetWindow.loadURL(url.format({
                            pathname: path.join(__dirname, 'f7builder/index_actionsheet.html'),
                            protocol: 'file:',
                            slashes: true
                        }))

                        var template = [{
                            label: "View",
                            submenu: [{
                                label: "Reload",
                                click: function() {
                                    actionsheetWindow.webContents.reload();
                                }
                            }]
                        }]

                        var menu = Menu.buildFromTemplate(template);
                        actionsheetWindow.setMenu(menu);
                    }
                }, {
                    label: "Swipeout",
                    click: function() {
                        swipeoutWindow = new BrowserWindow({
                            width: 380,
                            height: 600,
                            icon: path.join(__dirname, 'f7builder/img/favicon.png')
                        })

                        swipeoutWindow.loadURL(url.format({
                            pathname: path.join(__dirname, 'f7builder/index_swipeout.html'),
                            protocol: 'file:',
                            slashes: true
                        }))

                        var template = [{
                            label: "View",
                            submenu: [{
                                label: "Reload",
                                click: function() {
                                    swipeoutWindow.webContents.reload();
                                }
                            }]
                        }]

                        var menu = Menu.buildFromTemplate(template);
                        swipeoutWindow.setMenu(menu);
                    }
                }, {
                    label: "Calender/Datepicker",
                    click: function() {
                        calenderWindow = new BrowserWindow({
                            width: 380,
                            height: 600,
                            icon: path.join(__dirname, 'f7builder/img/favicon.png')
                        })

                        calenderWindow.loadURL(url.format({
                            pathname: path.join(__dirname, 'f7builder/index_calender.html'),
                            protocol: 'file:',
                            slashes: true
                        }))

                        var template = [{
                            label: "View",
                            submenu: [{
                                label: "Reload",
                                click: function() {
                                    calenderWindow.webContents.reload();
                                }
                            }]
                        }]

                        var menu = Menu.buildFromTemplate(template);
                        calenderWindow.setMenu(menu);
                    }
                }]
            }]
        }]

        var menu = Menu.buildFromTemplate(template);
        mainWindow.setMenu(menu);
    }

    function mainBuilder() {
        var builderWindow = new BrowserWindow({
            width: 1204,
            height: 700,
            icon: path.join(__dirname, 'f7builder/img/favicon.png')
        })

        builderWindow.loadURL(url.format({
            pathname: path.join(__dirname, 'f7builder/builder.html'),
            protocol: 'file:',
            slashes: true
        }))

        var template = [{
            label: "View",
            submenu: [{
                label: "Reload",
                click: function() {
                    builderWindow.webContents.reload();
                }
            }]
        }, {
            label: "Developer",
            submenu: [{
                label: "Dev Tools",
                click: function() {
                    builderWindow.webContents.openDevTools()
                }
            }]
        }]

        var menu = Menu.buildFromTemplate(template);
        builderWindow.setMenu(menu);
    }

    mainApplication();

    mainWindow.on('closed', function() {
        mainWindow = null;
    })
})

app.on('window-all-closed', function() {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    //if (process.platform !== 'darwin') {
    //    app.quit()
    //}
})

app.on('activate', function() {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow()
    }
})