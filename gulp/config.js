var dest = "./dist";
var src = './src';

module.exports = {
  browserSync: {
    server: {
      // Serve up our build folder
      baseDir: './'
    }
  },
  sass: {
    src: src + "/**/*.{sass,scss}",
    dest: dest,
    settings: {
      indentedSyntax: true, // Enable .sass syntax!
    }
  },
  production: {
    cssSrc: dest + '/*.css'
  }
};
