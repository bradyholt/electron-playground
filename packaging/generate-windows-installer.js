const createWindowsInstaller = require('electron-winstaller').createWindowsInstaller
const path = require('path')
const config = require('../package.json');

getInstallerConfig()
    .then(createWindowsInstaller)
    .catch((error) => {
        console.error(error.message || error)
        process.exit(1)
    })

function getInstallerConfig() {
    console.log('creating windows installer')
    const rootPath = path.join(__dirname, '../')

    return Promise.resolve({
        appDirectory: path.join(rootPath, `dist/${config.name}-win32-x64`),
        noMsi: true,
        outputDirectory: path.join(rootPath, 'dist/win-installer'),
        exe: `${config.name}.exe`,
        setupExe: `${config.name}.exe`,
        setupIcon: path.join(rootPath, 'packaging/icon.ico'),
        skipUpdateIcon: true
    })
}