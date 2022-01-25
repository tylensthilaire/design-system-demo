
//
// StyleDictionaryColor.m
//

// Do not edit directly
// Generated on Tue, 25 Jan 2022 10:04:27 GMT


#import "StyleDictionaryColor.h"

@implementation StyleDictionaryColor

+ (UIColor *)color:(StyleDictionaryColorName)colorEnum{
  return [[self values] objectAtIndex:colorEnum];
}

+ (NSArray *)values {
  static NSArray* colorArray;
  static dispatch_once_t onceToken;

  dispatch_once(&onceToken, ^{
    colorArray = @[
[UIColor colorWithRed:0.012f green:0.000f blue:0.596f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.620f green:0.224f blue:0.804f alpha:1.000f],
[UIColor colorWithRed:0.012f green:0.000f blue:0.596f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.620f green:0.224f blue:0.804f alpha:1.000f]
    ];
  });

  return colorArray;
}

@end
