Windows Packaging Lessons Learned:

- When running electron-packager, use `--asar=true` option to prevent mono-sgen taking forever to run.
- When running electron-packager, use `--version-string.ProductName='electron-playground'` to control the name of the Desktop shortcut
- Squirrel events must be handled on startup