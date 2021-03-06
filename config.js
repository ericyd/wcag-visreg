module.exports = {
    // an array of browsers to use for testcafe
    // full options at https://devexpress.github.io/testcafe/documentation/using-testcafe/common-concepts/browsers/browser-support.html#officially-supported-browsers
    // At time of writing, these are acceptable browser options (may depend on system availability)
    // * chromium
    // * chrome
    // * chrome:headless
    // * canary
    // * ie
    // * edge
    // * firefox
    // * firefox:headless
    // * opera
    // * safari
    browsers: ['firefox:headless'],

    // when truthy, will not capture or compare screenshots
    // skipScreenshots: true,

    // when truthy, will not capture page HTML or run accessibility audit
    // skipWCAG: true,

    // when truthy, will get html from the client. Better when testing client-rendered content.
    // NOTE: authenticated paths MUST get HTML from client. Setting to `false` will not work.
    // If you only need to test public paths and you do not need to test client-rendered content,
    // you can comment this out or set to false
    getHTMLFromClient: true,

    // directories to which screenshots will be saved
    screenshots: {
        expected: 'screenshots/expected',
        actual: 'screenshots/actual',
        diff: 'screenshots/result',
        threshold: 0.1
    },

    // specify single page for test
    // if none exists, it will use the public and auth objects below
    // singlePage: 'http://www.duckduckgo.com/',

    // definitions for public pages
    public: {
        baseURL: 'http://www.testsite.com/',

        // path segments to define pages. Will be appended to baseURL
        paths: [
            '',
            'path1'
        ],

        // true will skip testing for all public pages
        // skip: true
    },

    // definitions for authenticated pages
    auth: {
        baseURL: 'https://github.com/ericyd/',

        // if loginURL is blank, will use baseURL instead
        loginURL: 'https://github.com/login/',

        un: {
            // css selector for username form element
            selector: '#login_field',

            // username to use to log in
            value: 'myusername'
        },
        pw: {
            // css selector for password form element
            selector: '#password',

            // password to use to log in
            value: 'mypassword'
        },

        // path segments to define pages. Will be appended to baseURL
        paths: [
            'accessibility-boilerplate'
        ],

        // true will skip testing for all auth pages
        skip: true
    },

    // override default screen resolutions for screenshot capture
    // resolutions: [
    //     [1920, 1080],
    //     [1600, 900],
    //     [1440, 900],
    //     [1440, 1024],
    //     [1366, 768],
    //     [1280, 1024],
    //     [1280, 800],
    //     [1024, 768],
    //     [768, 1024],
    //     [320, 480]
    // ],
}