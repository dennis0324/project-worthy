module.exports = function override(config,env){
  config.module.rules = [...config.module.rules,
    {
      test: /\.css?$/,
      exclude: [],
      use: ["style-loader", "css-loader", "postcss-loader"],
    }
  ]

  return config
};