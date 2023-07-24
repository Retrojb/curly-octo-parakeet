# Notes: 

### Builds: 
Would be more efficent with a monorepo package manager, but the purpose of this repo is to understand what the package managers (lerna, turbo) do under the hood that reduces stress. also the concepts of this repo are to better understand how both of those managers respectfully handle bundling and publishing to NPM registry with such ease.

### Tooling: 
NPM 9 - Could have used Yarn 3+ here to better handle working with workspaces, choose to stick with NPM as the problem I am trying to solve uses NPM as it's dependency manager

Vite - To handle bundling wuth Rollup.js and HMR server for React apps