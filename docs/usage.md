
# Usage
To start the server run:

## 1. Building Ember.js for first time
This will process the current [app](./app) directory into compiled static public files.

```bash
grunt build
```

## 2. Starting Server
This will start the Node.js server and will serve both the Ember.js App and the `Coders Classroom` API.

```bash
node server/index.js
```

### 3. For Developers
This will watch for file changes and re-compile your source code. Does not support `livereload`, so refresh your browser to see changes.

```bash
grunt watch
```

**Note**: The Grunt task `watch` will only update changed files, it will not `build` all other files, until they have been changed.

For an all in one command:

```bash
grunt build watch
```
