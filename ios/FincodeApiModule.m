//
//  FincodeApiModule.m
//  Fincode_Manual_Import
//
//  Created by 中嶋彰 on 2023/02/23.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(FincodeApiModule, NSObject)

RCT_EXTERN_METHOD(payment:(NSString *)authorization
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
                  errorCallback:(RCTResponseSenderBlock)errorCallback
                  successCallback:(RCTResponseSenderBlock)successCallback)

RCT_EXTERN_METHOD(cardInfoList:(NSString *)authorization
                  apiKey:(NSString *)apiKey
                  apiVersion:(NSString *)apiVersion
                  customerId:(NSString *)customerId
                  errorCallback:(RCTResponseSenderBlock)errorCallback
                  successCallback:(RCTResponseSenderBlock)successCallback)

RCT_EXTERN_METHOD(registerCard:(NSString *)authorization
                  apiKey:(NSString *)apiKey
                  apiVersion:(NSString *)apiVersion
                  customerId:(NSString *)customerId
                  defaultFlag:(NSString *)defaultFlag
                  cardNo:(NSString *)cardNo
                  expire:(NSString *)expire
                  holderName:(NSString *)holderName
                  securityCode:(NSString *)securityCode
                  token:(NSString *)token
                  errorCallback:(RCTResponseSenderBlock)errorCallback
                  successCallback:(RCTResponseSenderBlock)successCallback)

RCT_EXTERN_METHOD(updateCard:(NSString *)authorization
                  apiKey:(NSString *)apiKey
                  apiVersion:(NSString *)apiVersion
                  customerId:(NSString *)customerId
                  cardId:(NSString *)cardId
                  defaultFlag:(NSString *)defaultFlag
                  expire:(NSString *)expire
                  holderName:(NSString *)holderName
                  securityCode:(NSString *)securityCode
                  token:(NSString *)token
                  errorCallback:(RCTResponseSenderBlock)errorCallback
                  successCallback:(RCTResponseSenderBlock)successCallback)

RCT_EXTERN_METHOD(authentication:(NSString *)authorization
                  apiKey:(NSString *)apiKey
                  apiVersion:(NSString *)apiVersion
                  id:(NSString *)id
                  param:(NSString *)param
                  errorCallback:(RCTResponseSenderBlock)errorCallback
                  successCallback:(RCTResponseSenderBlock)successCallback)

RCT_EXTERN_METHOD(getResult:(NSString *)authorization
                  apiKey:(NSString *)apiKey
                  apiVersion:(NSString *)apiVersion
                  id:(NSString *)id
                  errorCallback:(RCTResponseSenderBlock)errorCallback
                  successCallback:(RCTResponseSenderBlock)successCallback)

RCT_EXTERN_METHOD(paymentSecure:(NSString *)authorization
                  apiKey:(NSString *)apiKey
                  apiVersion:(NSString *)apiVersion
                  id:(NSString *)id
                  payType:(NSString *)payType
                  accessId:(NSString *)accessId
                  errorCallback:(RCTResponseSenderBlock)errorCallback
                  successCallback:(RCTResponseSenderBlock)successCallback)
@end
