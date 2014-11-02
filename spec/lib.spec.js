/*jshint node:true, jasmine:true */

var jodoclib = require('../lib/jodoc-lib'),
    path = require('path');

describe('docker', function () {
    'use strict';
});
describe('html_header', function () {
    'use strict';
});
describe('munge filename', function () {
    'use strict';
    var munge_filename = jodoclib.munge_filename;
    it('simple file', function () {
        var actual = munge_filename('simple');
        var expected = "simple.html";
        expect(actual).toEqual(expected);
    });
    it('file in the nested folders', function () {
        // Create path in the OS specific style.
        var os_path = path.join('simple', 'test', 'test');
        var actual = munge_filename(os_path);
        var expected = "simple_test_test.html";
        expect(actual).toEqual(expected);
    });
});
describe('h1finder', function () {
    'use strict';
});
describe('indexer', function () {
    'use strict';
});
describe('toclinker', function () {
    'use strict';
});
describe('autolink', function () {
    'use strict';
});