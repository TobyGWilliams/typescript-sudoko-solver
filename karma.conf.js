module.exports = function(config) {
  config.set({
    frameworks: ['jasmine', 'karma-typescript'],
    files: [{ pattern: 'src/**.ts' }],
    preprocessors: {
      'src/**.ts': ['karma-typescript']
    },
    reporters: ['dots', 'kjhtml'],
    browsers: ['Chrome'],
    client: { clearContext: false },
    exclude: ['node_modules'],
    port: 9000,
    singleRun: false
  });
};
