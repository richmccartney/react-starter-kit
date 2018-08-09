// Docs: https://facebook.github.io/jest/docs/en/configuration.html

module.exports = {
  // Indicates whether each individual test should be reported during the run.
  // All errors will also still be shown on the bottom after execution.
  verbose: false,

  // Activates notifications for test results.
  notify: false,

  // This option sets the URL for the jsdom environment. It is reflected in
  // properties such as location.href.
  testURL: 'http://localhost',

  // The glob patterns Jest uses to detect test files.
  testMatch: ['<rootDir>/**/*.(spec|test).js?(x)'],

  // testPathIgnorePatterns: ['/node_modules/'],
  setupFiles: ['<rootDir>/config/polyfills.js', '<rootDir>/jest.setup.js'],

  // A list of paths to directories that Jest should use to search for files in.
  projects: ['./src'],

  // An array of regexp pattern strings that are matched against all source
  // file paths before transformation. If the test path matches any of the
  // patterns, it will not be transformed.
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/shared/__mocks__/fileMock.js',
    '\\.(s?)css$': '<rootDir>/shared/__mocks__/styleMock.js',
    'react-css-modules': '<rootDir>/shared/__mocks__react-css-modules.js',
  },

  // A list of paths to snapshot serializer modules Jest should use for snapshot
  // testing. Jest has default serializers for built-in JavaScript types, HTML
  // elements (Jest 20.0.0+), ImmutableJS (Jest 20.0.0+) and for React elements.
  snapshotSerializers: ['<rootDir>/node_modules/enzyme-to-json/serializer'],
}
