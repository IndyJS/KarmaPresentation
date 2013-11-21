// Karma configuration used for running on locally
module.exports = function (config) {
    config.set({
        basePath: '',

        frameworks: ['qunit'],

        // list of files / patterns to load in the browser
        files: [
			//App scripts
			'CoinChanger.js',

			//Test files
			'CoinChangerTests.js'
        ],

        // list of files to exclude
        exclude: [

        ],

        preprocessors: {
            'Scripts/CoinChanger.js': ['coverage'],
        },
        
        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit'
        reporters: ['teamcity', 'coverage'],

        coverageReporter: {
            type : 'html',
             dir : 'coverage/'
        },

        // web server port
        port: 9876,

        // cli runner port
        runnerPort: 9100,

        // enable / disable colors in the output (reporters and logs)
        colors: false,

        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['PhantomJS'],

        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: true,

        plugins: [
		    'karma-qunit',
			'karma-phantomjs-launcher',
			'karma-teamcity-reporter',
			'karma-coverage'
        ]
    });
};