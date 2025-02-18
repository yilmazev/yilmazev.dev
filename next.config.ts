module.exports = {
  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: [ "@svgr/webpack" ],
          as: "*.ts"
        }
      }
    }
  }
}