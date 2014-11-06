
# github-repo-from-config

  Parse the github repo from `.git/config`.

## Example

```js
var parse = require('github-repo-from-config');
var fs = require('fs');

var config = fs.readFileSync('.git/config');
var info = parse(config);
// => {
//      "account": "micnews",
//      "repo": "github-repo-from-config",
//      "path": "micnews/github-repo-from-config"
//    }
```

## Installation

```bash
$ npm install github-repo-from-config
```

## License

  MIT

