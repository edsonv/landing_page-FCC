module.exports= {
  plugins: [ require('postcss-import')( {
    plugins: [ require('stylelint')]
  }
  ),
  require('postcss-font-magician')( {
    variants: {
      'Lato': {
        '300': [],
        '400': [],
        '700': []
      }
    }
  }
  ),
  require('postcss-preset-env')( {
    stage: 0,
    features: {
      customProperties: false,
      calc: false,
      autoprefixer: {
        grid: true,
        flexbox:true
      }
    }
    ,
    browsers: 'last 2 versions'
  }
  ),
  require('css-mqpacker'),
  require('cssnano'),
  ]
}