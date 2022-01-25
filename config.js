const styleDictionary = require('style-dictionary')
const {minifyDictionary} = styleDictionary
styleDictionary.registerFormat({
    name: 'myCustomFormat',
    formatter: function ({dictionary}) {
        return JSON.stringify(minifyDictionary(dictionary.tokens));
    }
});


module.exports = {
    source: [`figmaInput/**/*.json`],
    // If you don't want to call the registerTransform method a bunch of times
    // you can override the whole transform object directly. This works because
    // the .extend method copies everything in the config
    // to itself, allowing you to override things. It's also doing a deep merge
    // to protect from accidentally overriding nested attributes.
    transform: {
        // Now we can use the transform 'myTransform' below
        myTransform: {
            type: 'name',
            transformer: (token) => token.path.join('_').toUpperCase()
        }
    },
    // Same with formats, you can now write them directly to this config
    // object. The name of the format is the key.
    format: {
        myFormat: ({dictionary, platform}) => {
            return dictionary.allTokens.map(token => `${token.name}: ${token.value}`).join('\n');
        }
    },
    "platforms": {
        "scss": {
            "transformGroup": "scss",
            "transforms": ["attribute/cti", "name/cti/kebab", "color/hex", "size/rem"],
            "buildPath": "build/scss/",
            "files": [{
                "destination": "_variables.scss",
                "format": "scss/variables"
            }]
        },
        // "json": {
        //     // "transformGroup": "myCustomFormat",
        //     "buildPath": "build/json/",
        //     "files": [{
        //         "destination": "output.json",
        //         "format": "myCustomFormat"
        //     }]
        // },
        "android": {
            "transformGroup": "android",
            "buildPath": "build/android/",
            "files": [{
                "destination": "font_dimens.xml",
                "format": "android/fontDimens"
            }, {
                "destination": "colors.xml",
                "format": "android/colors"
            }]
        },
        "compose": {
            "transformGroup": "compose",
            "buildPath": "build/compose/",
            "files": [{
                "destination": "StyleDictionaryColor.kt",
                "format": "compose/object",
                "className": "StyleDictionaryColor",
                "packageName": "StyleDictionaryColor",
                "filter": {
                    "attributes": {
                        "category": "color"
                    }
                }
            }, {
                "destination": "StyleDictionarySize.kt",
                "format": "compose/object",
                "className": "StyleDictionarySize",
                "packageName": "StyleDictionarySize",
                "type": "float",
                "filter": {
                    "attributes": {
                        "category": "size"
                    }
                }
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
        "ios-swift": {
            "transformGroup": "ios-swift",
            "buildPath": "build/ios-swift/",
            "files": [{
                "destination": "StyleDictionary.swift",
                "format": "ios-swift/class.swift",
                "className": "StyleDictionary",
                "filter": {}
            }]
        },
        "ios-swift-separate-enums": {
            "transformGroup": "ios-swift-separate",
            "buildPath": "build/ios-swift/",
            "files": [{
                "destination": "StyleDictionaryColor.swift",
                "format": "ios-swift/enum.swift",
                "className": "StyleDictionaryColor",
                "filter": {
                    "attributes": {
                        "category": "color"
                    }
                }
            }, {
                "destination": "StyleDictionarySize.swift",
                "format": "ios-swift/enum.swift",
                "className": "StyleDictionarySize",
                "type": "float",
                "filter": {
                    "attributes": {
                        "category": "size"
                    }
                }
            }]
        }
    }
}
