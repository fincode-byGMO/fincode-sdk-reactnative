#import <React/RCTViewManager.h>
#import <React/RCTUIManager.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTLog.h>
#import <FincodeSDK/FincodeSDK-Swift.h>

@interface RCT_EXTERN_MODULE(FincodeVerticalViewManager, RCTViewManager)

//RCT_EXPORT_VIEW_PROPERTY(placeHolderName, NSString)
RCT_EXPORT_VIEW_PROPERTY(headingHidden, BOOL)
RCT_EXPORT_VIEW_PROPERTY(dynamicLogDisplay, BOOL)
RCT_EXPORT_VIEW_PROPERTY(holderNameHidden, BOOL)
RCT_EXPORT_VIEW_PROPERTY(payTimesHidden, BOOL)

RCT_EXTERN_METHOD(initPayment:(NSString *)authorization
                  apiKey:(NSString *)apiKey
                  apiVersion:(NSString *)apiVersion
                  customerId:(NSString *)customerId
                  payType:(NSString *)payType
                  accessId:(NSString *)accessId
                  id:(NSString *)id)

//RCT_EXPORT_METHOD(initPayment:(nonnull NSNumber*)reactTag
//                  authorization:(NSString *)authorization
//                  apiKey:(NSString *)apiKey
//                  apiVersion:(NSString *)apiVersion
//                  customerId:(NSString *)customerId
//                  payType:(NSString *)payType
//                  accessId:(NSString *)accessId
//                  id:(NSString *)id){
//
//  RCTLogInfo(@"obj-c initPayment", reactTag);
//
//  [self.bridge.uiManager addUIBlock:^(RCTUIManager *uiManager, NSDictionary<NSNumber *,UIView *> *viewRegistry) {
//    FincodePaymentConfiguration *view = viewRegistry[reactTag];
////      if (!view || ![view isKindOfClass:[NativeView class]]) {
////          RCTLogError(@"Cannot find NativeView with tag #%@", reactTag);
////          return;
////      }
//
//    FincodePaymentConfiguration *config = [[FincodePaymentConfiguration alloc] init];
////      [view callNativeMethod];
//  }];
//
//}

//RCT_EXTERN_METHOD(initPayment:(NSString *)authorization
//                  apiKey:(NSString *)apiKey
//                  apiVersion:(NSString *)apiVersion
//                  customerId:(NSString *)customerId
//                  payType:(NSString *)payType
//                  accessId:(NSString *)accessId
//                  id:(NSString *)id)

//RCT_EXTERN_METHOD(initPayment)

@end
