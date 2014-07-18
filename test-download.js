var download = require('index');

// download and extract `foo.tar.gz` into `bar/`
download('foo.tar.gz', 'bar', { extract: true });