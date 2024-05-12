module.exports = function(api) {
  api.cache(true);
  return {
    presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript", "@babel/preset-flow"],
    plugins: ["nativewind/babel", "react-native-reanimated/plugin" ]
  };
};
