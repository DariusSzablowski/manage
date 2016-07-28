const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

let mainWindow

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('ready', function () {
  createWindow()

  app.on('activate', () => {
    if (mainWindow === null) {
      createWindow()
    }
  })
})

let createWindow = () => {
  mainWindow = new BrowserWindow({width: 800, height: 600})

  mainWindow.loadURL('file://' + __dirname + '/index.html')

  mainWindow.openDevTools()

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}
