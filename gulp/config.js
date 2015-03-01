var dest = "./dist";
var src = './src';

module.exports = {
  browserSync: {
    server: {
      // Serve up our build folder
      baseDir: './styleguide'
    }
  },
  sass: {
    src: src + "/sass/**/*.{sass,scss}",
    dest: dest,
    settings: {
      indentedSyntax: true, // Enable .sass syntax!
    }
  },
  fonts: {
    src: src + '/fonts/**',
    dest: dest + '/fonts'
  },
  styleguide: {
    src: src + '/sass/**/*.{sass,scss}',
    options: {
      title: 'StyleGuide',
      overview: './resources/styleguide/styleguide.md',
      template: './resources/styleguide/index.html',
      out: './styleguide',
      css: 'rigging.css'
    }
  },
  production: {
    cssSrc: dest + '/*.css',
    dest: dest
  }
};
