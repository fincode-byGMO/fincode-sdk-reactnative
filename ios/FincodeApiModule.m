//
//  FincodeApiModule.m
//  Fincode_Manual_Import
//
//  Created by 中嶋彰 on 2023/02/23.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(FincodeApiModule, NSObject)

RCT_EXTERN_METHOD(payment:(NSString *)orderId
                  authorization(NSString *)authorization
                  apiKey:(NSString *)apiKey
                  apiVersion:(NSString *)apiVersion
                  payType:(NSString *)payType
                  accessId:(NSString *)accessId
                  id:(NSString *)id
                  token:(NSString *)token
                  cardNo:(NSString *)cardNo
                  expire:(NSString *)expire
                  customerId:(NSString *)customerId
                  cardId:(NSString *)cardId
                  method:(NSString *)method
                  payTimes:(NSString *)payTimes
                  securityCode:(NSString *)securityCode
                  holderName:(NSString *)holderName
                  resolve:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject)
@end
