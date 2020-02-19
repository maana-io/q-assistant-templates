# Maana Q Assistant Template (Basic)

Basic template for a create-react-app to be used as a maana Q assistant.

## What's inside?

- React App
- Maana Q Assistant Client npm library installed
- `.env` file with example variable printed in console (set in `Dockerfile`)
- `Dockerfile`
- nginx conf
- Build/Run scripts

## Default Functionality

- Gets the current workspace.
- Get the active graph from the workspace.
- Creates a Function.
- Adds the function as a node to the active graph in the workspace.

## Local Development

Run locally:

```bash
# build project and watch for changes
npm run watch

# serve built assets (default port: 3000)
npm run serve
```

OR Run with Docker:

```bash
# build docker container
sh dockerBuild.sh

# run docker container
sh dockerRun.sh
```

## Learn more about using the Maana Q Assistant Client library

- https://github.com/maana-io/q-assistant-client/tree/develop
- https://www.npmjs.com/package/@io-maana/q-assistant-client
