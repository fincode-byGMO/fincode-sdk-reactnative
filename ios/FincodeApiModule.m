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
                  tds2RetUrl: (NSString *)tds2RetUrl
                  tds2ChAccChange: (NSString *)tds2ChAccChange
                  tds2ChAccDate: (NSString *)tds2ChAccDate
                  tds2ChAccPwChange: (NSString *)tds2ChAccPwChange
                  tds2NbPurchaseAccount: (NSString *)tds2NbPurchaseAccount
                  tds2PaymentAccAge: (NSString *)tds2PaymentAccAge
                  tds2ProvisionAttemptsDay: (NSString *)tds2ProvisionAttemptsDay
                  tds2ShipAddressUsage: (NSString *)tds2ShipAddressUsage
                  tds2ShipNameInd: (NSString *)tds2ShipNameInd
                  tds2SuspiciousAccActivity: (NSString *)tds2SuspiciousAccActivity
                  tds2TxnActivityDay: (NSString *)tds2TxnActivityDay
                  tds2TxnActivityYear: (NSString *)tds2TxnActivityYear
                  tds2ThreeDsReqAuthData: (NSString *)tds2ThreeDsReqAuthData
                  tds2ThreeDsReqAuthMethod: (NSString *)tds2ThreeDsReqAuthMethod
                  tds2ThreeDsReqAuthTimestamp: (NSString *)tds2ThreeDsReqAuthTimestamp
                  tds2AddrMatch: (NSString *)tds2AddrMatch
                  tds2BillAddrCity: (NSString *)tds2BillAddrCity
                  tds2BillAddrCountry: (NSString *)tds2BillAddrCountry
                  tds2BillAddrLine1: (NSString *)tds2BillAddrLine1
                  tds2BillAddrLine2: (NSString *)tds2BillAddrLine2
                  tds2BillAddrLine3: (NSString *)tds2BillAddrLine3
                  tds2BillAddrPostCode: (NSString *)tds2BillAddrPostCode
                  tds2BillAddrState: (NSString *)tds2BillAddrState
                  tds2Email: (NSString *)tds2Email
                  tds2HomePhoneCc: (NSString *)tds2HomePhoneCc
                  tds2HomePhoneNo: (NSString *)tds2HomePhoneNo
                  tds2MobilePhoneCc: (NSString *)tds2MobilePhoneCc
                  tds2MobilePhoneNo: (NSString *)tds2MobilePhoneNo
                  tds2WorkPhoneCc: (NSString *)tds2WorkPhoneCc
                  tds2WorkPhoneNo: (NSString *)tds2WorkPhoneNo
                  tds2ShipAddrCity: (NSString *)tds2ShipAddrCity
                  tds2ShipAddrCountry: (NSString *)tds2ShipAddrCountry
                  tds2ShipAddrLine1: (NSString *)tds2ShipAddrLine1
                  tds2ShipAddrLine2: (NSString *)tds2ShipAddrLine2
                  tds2ShipAddrLine3: (NSString *)tds2ShipAddrLine3
                  tds2ShipAddrPostCode: (NSString *)tds2ShipAddrPostCode
                  tds2ShipAddrState: (NSString *)tds2ShipAddrState
                  tds2DeliveryEmailAddress: (NSString *)tds2DeliveryEmailAddress
                  tds2DeliveryTimeframe: (NSString *)tds2DeliveryTimeframe
                  tds2GiftCardAmount: (NSString *)tds2GiftCardAmount
                  tds2GiftCardCount: (NSString *)tds2GiftCardCount
                  tds2GiftCardCurr: (NSString *)tds2GiftCardCurr
                  tds2PreOrderDate: (NSString *)tds2PreOrderDate
                  tds2PreOrderPurchaseInd: (NSString *)tds2PreOrderPurchaseInd
                  tds2ReorderItemsInd: (NSString *)tds2ReorderItemsInd
                  tds2ShipInd: (NSString *)tds2ShipInd
                  tds2RecurringExpiry: (NSString *)tds2RecurringExpiry
                  tds2RecurringFrequency: (NSString *)tds2RecurringFrequency
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
