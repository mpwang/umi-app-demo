# umi with typescript project demo

## devDependencies
project created by `yarn create umi` by default comes with packages of old versions in devDependencies.

`eslint-config-umi` just use `eslint-config-react-app` under the hook, this demo remove eslint-config-umi
and use new version of eslint-config-react-app.

update eslint to 6.x and babel-eslint to 10.x

## typescript support
use @typescript-eslint for eslint to parse typescript codes, as tslint will be deprecated by 2020


# vscode extensions

required extensions:
- Debugger for chrome
- ESLint

recommended extensions:
- AutoTrim
- indent-rainbow
- indenticator
- Path Autocomplete
- Path Intellisense
- Rainbow Brackets
- React Standard Style code snippets

# vsocde settings
merge those settings into your vscode settings file

```js
{
    "javascript.format.enable": false,
     "[javascript]": {
        "editor.tabSize": 2,
        "editor.formatOnSave": false
    },
    "[javascriptreact]": {
        "editor.tabSize": 2,
        "editor.formatOnSave": false
    },
    "[typescript]": {
        "editor.tabSize": 2,
        "editor.formatOnSave": false
    },
    "[typescriptreact]": {
        "editor.tabSize": 2,
        "editor.formatOnSave": false
    },
    "typescript.format.insertSpaceAfterFunctionKeywordForAnonymousFunctions": false,
    "typescript.format.insertSpaceBeforeFunctionParenthesis": true,
    "typescript.updateImportsOnFileMove.enabled": "always",
    "eslint.autoFixOnSave": true,
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        {
            "autoFix": true,
            "language": "typescript"
        },
        {
            "autoFix": true,
            "language": "typescriptreact"
        }
}
```


# notes
- use eslint for linting typescript files, DO NOT install tslint(vscode extension)
- use indent size of 2
- prefer to no semicolon style

# references
- [Type-safe es2015 module import path aliasing with Webpack, Typescript and Jest](https://medium.com/@martin_hotell/type-safe-es2015-module-import-path-aliasing-with-webpack-typescript-and-jest-fe461347e010)
- [Setting up ESLint with Prettier, TypeScript, and Visual Studio Code](https://levelup.gitconnected.com/setting-up-eslint-with-prettier-typescript-and-visual-studio-code-d113bbec9857)
- [Import statements in TypeScript: which syntax to use](https://blog.atomist.com/typescript-imports/)