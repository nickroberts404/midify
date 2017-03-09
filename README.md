**Not in development.**
Looking for a helpful MIDI library? [Check out this project by @cotejp](https://github.com/cotejp/webmidi)
# midify

I'm keeping this repo around as a reference for testing projects that require browser APIs.


This was going to be a wrapper for the WebMIDI api, but I realized there are already some fantastic libraries that do the same thing and it would not be a good use of time. I would delete the repo, but it took me a while to figure out how to automate Mocha tests that required a browser API (such as `navigator.requestMIDIAccess`).

I first used Mocha in an html file to load the tests (after being bundled by webpack). This worked okay, but would require the tests to built over and over again, and the page refreshed.

I tried PhantomJS with mocha-phantomjs-core, but learned that while PhantomJS may provide DOM access, it does not include most of the browser APIs. 

I then tried using a package to mock `navigator`, but it was not featured enough. Then I tried using a MIDI API polyfill...that one actually worked perfectly, but it logged constantly and when I found the code that was logging, hoping to remove it, I discovered the entire package was in binary. 

I ended up coming full circle, going back to mocha in the browser. BUT, with a twist. I found this page in the webpack docs on [Testing with Webpack](https://webpack.github.io/docs/testing.html#webpack-dev-server), which is where I should have checked in the first place. I ended up using webpack-dev-server with mocha-loader and Hot Module Reloading to automatically build/reload the tests, and it even creates the html page for you.
The tests won't fit into CI, I might need Karma for that. 
