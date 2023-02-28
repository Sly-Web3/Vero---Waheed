module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['react-native-reanimated/plugin'], //This is for chart and for bottom-screen. Make sure this is always the last plugin aswell.
  };
};
