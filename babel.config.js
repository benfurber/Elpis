module.exports = {
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          app: "./app",
          assets: "./app/assets",
          components: "./app/components",
          interfaces: "./app/interfaces",
          labels: "./app/labels",
          mutations: "./app/mutations",
          queries: "./app/queries",
          routes: "./app/routes",
          screens: "./app/screens",
          styles: "./app/styles",
          utils: "./app/utils",
        },
      },
    ],
  ],
  presets: [
    "module:metro-react-native-babel-preset",
    "module:react-native-dotenv",
  ],
};
