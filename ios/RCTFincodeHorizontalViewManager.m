//
//  FincodeHorizontalViewManager.m
//  SampleApp
//
//  Created by 中嶋彰 on 2023/01/23.
//

#import <React/RCTViewManager.h>

@interface RCT_EXTERN_MODULE(RCTFincodeHorizontalViewManager, RCTViewManager)

//RCT_EXPORT_VIEW_PROPERTY(placeHolderName, NSString)
RCT_EXPORT_VIEW_PROPERTY(headingHidden, BOOL)
RCT_EXPORT_VIEW_PROPERTY(dynamicLogDisplay, BOOL)
RCT_EXPORT_VIEW_PROPERTY(holderNameHidden, BOOL)
RCT_EXPORT_VIEW_PROPERTY(payTimesHidden, BOOL)

@end
