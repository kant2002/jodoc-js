/*jshint node:true, jasmine:true */

var jodoclib = require('../lib/jodoc-lib'),
    fs = require('fs'),
    path = require('path');

function getHtml(name) {
    var filename = path.join('spec', 'files', 'html', name + ".html");
    return {
        name: filename,
        content: fs.readFileSync(filename, "utf8")
    };
}
        
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
    var h1finder = jodoclib.h1finder;
    it('find simple h1', function () {
        function getHtml(name) {
            var filename = path.join('spec', 'files', 'html', name + ".html");
            return {
                name: filename,
                content: fs.readFileSync(filename)
            };
        }
        var files = [
            getHtml('file1')
        ],h1s;
        
        h1s = h1finder(files);
        expect(h1s.h1s['Test header']).toEqual(files[0].name);
    });
    it('find h1 with atrributes', function () {
        var files = [
            getHtml('h1WithId')
        ],h1s;
        
        h1s = h1finder(files);
        expect(h1s.h1s['Header with id']).toEqual(files[0].name);
    });
});
describe('indexer', function () {
    'use strict';
});
describe('toclinker', function () {
    'use strict';
});
describe('autolink', function () {
    'use strict';
    var h1finder = jodoclib.h1finder,
        autolink = jodoclib.autolink;
    it('Replace only full words', function () { 
        var file1Content = getHtml('file1'), 
            files = [
                file1Content
            ],h1s;
        
        h1s = h1finder(files);
        var linked_files = autolink(files, h1s.h1s, true, true);
        expect(file1Content.content).toEqual(linked_files[0].content);
    });
});