
//
// StyleDictionaryColor.h
//

// Do not edit directly
// Generated on Tue, 25 Jan 2022 10:04:27 GMT


#import <UIKit/UIKit.h>

typedef NS_ENUM(NSInteger, StyleDictionaryColorName) {
ColorPrimary,
ColorText,
ColorStroke,
ColorSecondary,
ColorColorPrimary,
ColorColorText,
ColorColorStroke,
ColorColorSecondary
};

@interface StyleDictionaryColor : NSObject
+ (NSArray *)values;
+ (UIColor *)color:(StyleDictionaryColorName)color;
@end
