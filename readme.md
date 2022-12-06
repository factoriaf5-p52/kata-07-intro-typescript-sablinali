https://fullstackopen.com/en/part9/first_steps_with_type_script#exercises-9-1-9-3

# TEST DRIVEN DEVELOPMENT AND OBJECT ORIENTED PROGRAMMING WITH TYPESCRIPT

## TypeScript Environment Setup --> CHECKLIST

- [ ] Create a project folder
- [ ] Initialize a node project
- [ ] Initialize git
- [ ] Include `node_modules` in `.gitignore` file
- [ ] Install dev-dependencies:
  - [ ] `typescript`,
  - [ ] `jest`,
  - [ ] `ts-jest`
  - [ ] `ts-node-dev`,
  - [ ] `tslint`
- [ ] Install types:
  - [ ] `@types/node`,
  - [ ] `@types/jest`
- [ ] Create and config `tsconfig.json` file
- [ ] Create `jest.config.js` file
- [ ] Modify `package.json`

### 1. Create a project and get into it
(_the first '$' character represents terminal: **you must not copy this**_)

```sh
#bash or linux terminal
$ mkdir miproyecto && cd $_
```
### 2. Initialize a node project
```sh
$ npm init -y
```

### 3. Initialize git
```sh
$ git init
```
### 4. Include `node_modules` in `.gitignore` file
```sh
$ echo 'node_modules' > .gitignore
```
### 5. Install dev-dependencies
```sh
$ npm i -D typescript tslint jest ts-jest ts-node-dev
```
### 6. Install types
```sh
$ npm i -D typescript @types/jest @types/node
```

### 7. Create and config `tsconfig.json` file
```sh
$ npx tsc --init --rootDir src --outDir build \
--esModuleInterop --resolveJsonModule --lib es6 \
--module commonjs --allowJs true --noImplicitAny true
```
### 8. Create and configure `jest.config.ts`
```sh
$ npx ts-jest config:init
```

### 9. Configure `package.json` file
```json
...
//"scripts": {
 //   ...
  //  "test": "jest"
 // },