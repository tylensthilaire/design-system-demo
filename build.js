const StyleDictionaryPackage = require('style-dictionary');
const StyleDictionary = require("style-dictionary");

// HAVE THE STYLE DICTIONARY CONFIG DYNAMICALLY GENERATED

StyleDictionary.registerTransform({
  name: 'shadow/spreadShadow',
  type: 'value',
  matcher: function(token) {
    return token.type === 'boxShadow';
  },
  transformer: (token) => {
    const shadow = token.value;
    return`${shadow.x} ${shadow.y} ${shadow.blur} ${shadow.spread} ${shadow.color}`;
  }
});


function getStyleDictionaryConfig(brand, platform) {
  return {
    "source": [
      `transformer-output/${brand}.json`,
    ],
    "platforms": {
      "scss": {
            "transformGroup": "scss",
            "transforms": ['shadow/spreadShadow', "attribute/cti", "name/cti/kebab", "color/hex", "size/rem", ],
            "buildPath": "build/scss/",
            "files": [{
                "destination": `${brand}-variables.scss`,
                "format": "scss/variables"
            }]
        },
      "ios": {
        "transformGroup": "ios",
        "buildPath": `build/ios/${brand}/`,
        "files": [{
          "destination": "tokens.h",
          "format": "ios/macros"
        }]
      }
    }
  };
}

console.log('Build started...');

// PROCESS THE DESIGN TOKENS FOR THE DIFFEREN BRANDS AND PLATFORMS

['moj', 'nav-cat',].map(function (brand) {
  ['scss', 'ios'].map(function (platform) {

    console.log('\n==============================================');
    console.log(`\nProcessing: [${platform}] [${brand}]`);

    const StyleDictionary = StyleDictionaryPackage.extend(getStyleDictionaryConfig(brand, platform));

    StyleDictionary.buildPlatform(platform);

    console.log('\nEnd processing');

  })
})

console.log('\n==============================================');
console.log('\nBuild completed!');
