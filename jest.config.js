/* eslint-disable max-len */
module.exports = {
    preset: 'react-native',
    setupFiles: ['./jest.config.js'],
    transformIgnorePatterns: [
      'node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@sentry/.*)',
    ],
  };
