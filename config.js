const StyleDictionary = require('style-dictionary')
const {minifyDictionary} = StyleDictionary

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

module.exports = {
    source: [`transformer-output/**/*.json`],
    transform: {},
    format: {},
    "platforms": {
        "scss": {
            "transformGroup": "scss",
            "transforms": ['shadow/spreadShadow', "attribute/cti", "name/cti/kebab", "color/hex", "size/rem", ],
            "buildPath": "build/scss/",
            "files": [{
                "destination": "_variables.scss",
                "format": "scss/variables"
            }]
        },
        "ios": {
            "transformGroup": "ios",
            "buildPath": "build/ios/",
            "files": [{
                "destination": "StyleDictionaryColor.h",
                "format": "ios/colors.h",
                "className": "StyleDictionaryColor",
                "type": "StyleDictionaryColorName",
                "filter": {
                    "attributes": {
                        "category": "color"
                    }
                }
            }, {
                "destination": "StyleDictionaryColor.m",
                "format": "ios/colors.m",
                "className": "StyleDictionaryColor",
                "type": "StyleDictionaryColorName",
                "filter": {
                    "attributes": {
                        "category": "color"
                    }
                }
            }, {
                "destination": "StyleDictionarySize.h",
                "format": "ios/static.h",
                "className": "StyleDictionarySize",
                "type": "float",
                "filter": {
                    "attributes": {
                        "category": "size"
                    }
                }
            }, {
                "destination": "StyleDictionarySize.m",
                "format": "ios/static.m",
                "className": "StyleDictionarySize",
                "type": "float",
                "filter": {
                    "attributes": {
                        "category": "size"
                    }
                }
            }]
        },
    }
}
