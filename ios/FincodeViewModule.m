//
//  FincodeViewModule.m
//  Fincode_Manual_Import
//
//  Created by 中嶋彰 on 2023/02/27.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(FincodeViewModule, NSObject)

// UIコンポーネント利用の際で、決済・カード登録・カード更新をReact(JS)から呼び出せるように定義する (React → swift)
RCT_EXTERN_METHOD(initPayment:(NSString *)viewType
                  authorization:(NSString *)authorization
                  apiKey:(NSString *)apiKey
                  apiVersion:(NSString *)apiVersion
                  customerId:(NSString *)customerId
                  payType:(NSString *)payType
                  accessId:(NSString *)accessId
                  id:(NSString *)id)

RCT_EXTERN_METHOD(initCardRegister:(NSString *)viewType
                  authorization:(NSString *)authorization
                  apiKey:(NSString *)apiKey
                  apiVersion:(NSString *)apiVersion
                  customerId:(NSString *)customerId
                  defaultFlg:(NSString *)defaultFlg)

RCT_EXTERN_METHOD(initCardUpdate:(NSString *)viewType
                  authorization:(NSString *)authorization
                  apiKey:(NSString *)apiKey
                  apiVersion:(NSString *)apiVersion
                  customerId:(NSString *)customerId
                  defaultFlg:(NSString *)defaultFlg
                  cardId:(NSString *)cardId)

@end
