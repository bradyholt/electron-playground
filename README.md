# electron-playground

A playground for learning Electron

## Setup

1. brew tap caskroom/cask && brew cask install xquartz && brew install wine
1. npm install

## Scripts

- `npm run start` - Start Electron and run the app for development
- `npm run pack` - Package OS X and Windows installer apps to `./dist`
- `npm run pack:osx` - Package OS X to `./dist`
- `npm run pack:win` - Package Windows installer to `./dist`

## Notes

### Windows Packaging Lessons Learned

- When running electron-packager, use `--asar=true` option to prevent mono-sgen taking forever to run.
- When running electron-packager, use `--version-string.ProductName='electron-playground'` to control the name of the Desktop shortcut
- Squirrel events must be handled on startup