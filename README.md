# Ziro State

Easy to use web app state management. View the documentation at [ziro-state.alexlockhart.me](http://ziro-state.alexlockhart.me/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/5e767f94-f7e7-4c7b-84b1-ad3c0d8462b7/deploy-status)](https://app.netlify.com/sites/ziro-state/deploys)

[A Ziro Project](https://ziro.alexlockhart.me/) 

## Install

```bash
npm install ziro-state
```

For usage, refer to the documentation.


## Contributing

Clone the repo and then run npm link.

```bash
cd ziro-state
npm link
npm run watch
cd ../../ # Some other directory
npm link ziro-state
```

### Publishing

```bash
# Bump version in package.json
npm run build
git add .
git commit -m "Something"
git push origin main
npm publish
```
