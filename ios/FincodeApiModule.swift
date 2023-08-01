//
//  FincodeApiModule.swift
//  Fincode_Manual_Import
//
//  Created by 中嶋彰 on 2023/02/23.
//

import Foundation
import FincodeSDK

@objc(FincodeApiModule)
class FincodeApiModule: NSObject {
  
  @objc public func payment(_ authorization: String, apiKey: String, apiVersion: String?,
                            payType: String?, accessId: String?, id: String?, token: String?, cardNo: String?,
                            expire: String?, customerId: String?, cardId: String?, method: String?, payTimes: String?,
                            securityCode: String?, holderName: String?
                            ,tds2RetUrl: String?
                            ,tds2ChAccChange: String?
                            ,tds2ChAccDate: String?
                            ,tds2ChAccPwChange: String?
                            ,tds2NbPurchaseAccount: String?
                            ,tds2PaymentAccAge: String?
                            ,tds2ProvisionAttemptsDay: String?
                            ,tds2ShipAddressUsage: String?
                            ,tds2ShipNameInd: String?
                            ,tds2SuspiciousAccActivity: String?
                            ,tds2TxnActivityDay: String?
                            ,tds2TxnActivityYear: String?
                            ,tds2ThreeDsReqAuthData: String?
                            ,tds2ThreeDsReqAuthMethod: String?
                            ,tds2ThreeDsReqAuthTimestamp: String?
                            ,tds2AddrMatch: String?
                            ,tds2BillAddrCity: String?
                            ,tds2BillAddrCountry: String?
                            ,tds2BillAddrLine1: String?
                            ,tds2BillAddrLine2: String?
                            ,tds2BillAddrLine3: String?
                            ,tds2BillAddrPostCode: String?
                            ,tds2BillAddrState: String?
                            ,tds2Email: String?
                            ,tds2HomePhoneCc: String?
                            ,tds2HomePhoneNo: String?
                            ,tds2MobilePhoneCc: String?
                            ,tds2MobilePhoneNo: String?
                            ,tds2WorkPhoneCc: String?
                            ,tds2WorkPhoneNo: String?
                            ,tds2ShipAddrCity: String?
                            ,tds2ShipAddrCountry: String?
                            ,tds2ShipAddrLine1: String?
                            ,tds2ShipAddrLine2: String?
                            ,tds2ShipAddrLine3: String?
                            ,tds2ShipAddrPostCode: String?
                            ,tds2ShipAddrState: String?
                            ,tds2DeliveryEmailAddress: String?
                            ,tds2DeliveryTimeframe: String?
                            ,tds2GiftCardAmount: String?
                            ,tds2GiftCardCount: String?
                            ,tds2GiftCardCurr: String?
                            ,tds2PreOrderDate: String?
                            ,tds2PreOrderPurchaseInd: String?
                            ,tds2ReorderItemsInd: String?
                            ,tds2ShipInd: String?
                            ,tds2RecurringExpiry: String?
                            ,tds2RecurringFrequency: String?,
                            errorCallback: @escaping RCTResponseSenderBlock, successCallback: @escaping RCTResponseSenderBlock) {
    
    let req = FincodePaymentRequest()
    req.payType = payType
    req.accessId = accessId
    req.id = id
    req.token = token
    req.cardNo = cardNo
    req.expire = expire
    req.customerId = customerId
    req.cardId = cardId
    req.method = method
    req.payTimes = payTimes
    req.securityCode = securityCode
    req.holderName = holderName
    req.tds2RetUrl = tds2RetUrl
    req.tds2ChAccChange = tds2ChAccChange
    req.tds2ChAccDate = tds2ChAccDate
    req.tds2ChAccPwChange = tds2ChAccPwChange
    req.tds2NbPurchaseAccount  =  tds2NbPurchaseAccount
    req.tds2PaymentAccAge = tds2PaymentAccAge
    req.tds2ProvisionAttemptsDay = tds2ProvisionAttemptsDay
    req.tds2ShipAddressUsage = tds2ShipAddressUsage
    req.tds2ShipNameInd = tds2ShipNameInd
    req.tds2SuspiciousAccActivity = tds2SuspiciousAccActivity
    req.tds2TxnActivityDay = tds2TxnActivityDay
    req.tds2TxnActivityYear = tds2TxnActivityYear
    req.tds2ThreeDsReqAuthData = tds2ThreeDsReqAuthData
    req.tds2ThreeDsReqAuthMethod  = tds2ThreeDsReqAuthMethod
    req.tds2ThreeDsReqAuthTimestamp  = tds2ThreeDsReqAuthTimestamp
    req.tds2AddrMatch  = tds2AddrMatch
    req.tds2BillAddrCity = tds2BillAddrCity
    req.tds2BillAddrCountry  = tds2BillAddrCountry
    req.tds2BillAddrLine1  = tds2BillAddrLine1
    req.tds2BillAddrLine2  = tds2BillAddrLine2
    req.tds2BillAddrLine3 = tds2BillAddrLine3
    req.tds2BillAddrPostCode  = tds2BillAddrPostCode
    req.tds2BillAddrState  = tds2BillAddrState
    req.tds2Email  = tds2Email
    req.tds2HomePhoneCc = tds2HomePhoneCc
    req.tds2HomePhoneNo  = tds2HomePhoneNo
    req.tds2MobilePhoneCc  = tds2MobilePhoneCc
    req.tds2MobilePhoneNo  = tds2MobilePhoneNo
    req.tds2WorkPhoneCc = tds2WorkPhoneCc
    req.tds2WorkPhoneNo  = tds2WorkPhoneNo
    req.tds2ShipAddrCity = tds2ShipAddrCity
    req.tds2ShipAddrCountry  = tds2ShipAddrCountry
    req.tds2ShipAddrLine1  = tds2ShipAddrLine1
    req.tds2ShipAddrLine2  = tds2ShipAddrLine2
    req.tds2ShipAddrLine3 = tds2ShipAddrLine3
    req.tds2ShipAddrPostCode = tds2ShipAddrPostCode
    req.tds2ShipAddrState = tds2ShipAddrState
    req.tds2DeliveryEmailAddress = tds2DeliveryEmailAddress
    req.tds2DeliveryTimeframe = tds2DeliveryTimeframe
    req.tds2GiftCardAmount = tds2GiftCardAmount
    req.tds2GiftCardCount = tds2GiftCardCount
    req.tds2GiftCardCurr = tds2GiftCardCurr
    req.tds2PreOrderDate = tds2PreOrderDate
    req.tds2PreOrderPurchaseInd = tds2PreOrderPurchaseInd
    req.tds2ReorderItemsInd = tds2ReorderItemsInd
    req.tds2ShipInd = tds2ShipInd
    req.tds2RecurringExpiry = tds2RecurringExpiry
    req.tds2RecurringFrequency = tds2RecurringFrequency
    
    print(req)
    
    FincodePaymentRepository.sharedInstance.payment(id ?? "", request: req, header: createHeader(auth: authorization, apiKey: apiKey, apiVersion: apiVersion)) { result in
      switch result {
      case .success(let data):
       
        successCallback([
          FincodeUtil.param(data.acs),
          FincodeUtil.param(data.shopId),
          FincodeUtil.param(data.id),
          FincodeUtil.param(data.payType),
          FincodeUtil.param(data.status),
          FincodeUtil.param(data.accessId),
          FincodeUtil.param(data.processDate),
          FincodeUtil.param(data.jobCode),
          FincodeUtil.param(data.itemCode),
          FincodeUtil.param(data.amount),
          FincodeUtil.param(data.tax),
          FincodeUtil.param(data.totalAmount),
          FincodeUtil.param(data.customerGroupId),
          FincodeUtil.param(data.customerId),
          FincodeUtil.param(data.cardNo),
          FincodeUtil.param(data.cardId),
          FincodeUtil.param(data.expire),
          FincodeUtil.param(data.holderName),
          FincodeUtil.param(data.cardNoHash),
          FincodeUtil.param(data.method),
          FincodeUtil.param(data.payTimes),
          FincodeUtil.param(data.forward),
          FincodeUtil.param(data.issuer),
          FincodeUtil.param(data.transactionId),
          FincodeUtil.param(data.approve),
          FincodeUtil.param(data.authMaxDate),
          FincodeUtil.param(data.clientField1),
          FincodeUtil.param(data.clientField2),
          FincodeUtil.param(data.clientField3),
          FincodeUtil.param(data.tdsType),
          FincodeUtil.param(data.tds2Type),
          FincodeUtil.param(data.tds2RetUrl),
          FincodeUtil.param(data.tds2Status),
          FincodeUtil.param(data.merchantName),
          FincodeUtil.param(data.sendUrl),
          FincodeUtil.param(data.subscriptionId),
          FincodeUtil.param(data.bulkPaymentId),
          FincodeUtil.param(data.brand),
          FincodeUtil.param(data.errorCode),
          FincodeUtil.param(data.acsUrl),
          FincodeUtil.param(data.paReq),
          FincodeUtil.param(data.created),
          FincodeUtil.param(data.updated)])
      case .failure(let error):
        var params: [Any] = []
        params.append(error.errorResponse.statusCode ?? "")
        
        var errors: [Dictionary<AnyHashable, Any>] = []
        for e in error.errorResponse.errors {
          var map: Dictionary<AnyHashable, Any> = [:]
          map.updateValue(e.code ?? "", forKey: "code")
          map.updateValue(e.message, forKey: "message")
          errors.append(map)
        }
        params.append(errors)
        
        errorCallback(params)
      }
    }
  }
  
  @objc public func konbini(_ authorization: String, apiKey: String, apiVersion: String?,
                            payType: String?, accessId: String?, id: String?, customerId: String?, paymentTermDay: String?, deviceName: String?, winWidth: String?,
                            winHeight: String?, pixelRatio: String?,winSizeType: String?,
                            errorCallback: @escaping RCTResponseSenderBlock, successCallback: @escaping RCTResponseSenderBlock) {
    
    let req = FincodeKonbiniRequest()
    req.payType = payType
    req.accessId = accessId
    req.id = id
    req.customerId = customerId
    req.paymentTermDay = paymentTermDay
    req.deviceName = deviceName
    req.winWidth = winWidth
    req.winHeight = winHeight
    req.pixelRatio = pixelRatio
    req.winSizeType = winSizeType
    
    print(req)
    
    FincodePaymentRepository.sharedInstance.payment(id ?? "", request: req, header: createHeader(auth: authorization, apiKey: apiKey, apiVersion: apiVersion)) { result in
      switch result {
      case .success(let data):
       
        successCallback([
          FincodeUtil.param(data.shopId),
          FincodeUtil.param(data.id),
          FincodeUtil.param(data.payType),
          FincodeUtil.param(data.status),
          FincodeUtil.param(data.accessId),
          FincodeUtil.param(data.processDate),
          FincodeUtil.param(data.amount),
          FincodeUtil.param(data.tax),
          FincodeUtil.param(data.totalAmount),
          FincodeUtil.param(data.paymentTermDay),
          FincodeUtil.param(data.paymentTerm),
          FincodeUtil.param(data.deviceName),
          FincodeUtil.param(data.osVersion),
          FincodeUtil.param(data.winWidth),
          FincodeUtil.param(data.winHeight),
          FincodeUtil.param(data.xdpi),
          FincodeUtil.param(data.ydpi),
          FincodeUtil.param(data.clientField1),
          FincodeUtil.param(data.clientField2),
          FincodeUtil.param(data.clientField3),
          FincodeUtil.param(data.result),
          FincodeUtil.param(data.orderSerial),
          FincodeUtil.param(data.invoiceId),
          FincodeUtil.param(data.barcode),
          FincodeUtil.param(data.barcodeFormat),
          FincodeUtil.param(data.barcodeWidth),
          FincodeUtil.param(data.barcodeHeight),
          FincodeUtil.param(data.paymentDate),
          FincodeUtil.param(data.konbiniCode),
          FincodeUtil.param(data.konbiniStoreCode),
          FincodeUtil.param(data.errorCode),
          FincodeUtil.param(data.overpaymentFlag),
          FincodeUtil.param(data.cancelOverpaymentFlag),
          FincodeUtil.param(data.created),
          FincodeUtil.param(data.updated)])
      case .failure(let error):
        var params: [Any] = []
        params.append(error.errorResponse.statusCode ?? "")
        
        var errors: [Dictionary<AnyHashable, Any>] = []
        for e in error.errorResponse.errors {
          var map: Dictionary<AnyHashable, Any> = [:]
          map.updateValue(e.code ?? "", forKey: "code")
          map.updateValue(e.message, forKey: "message")
          errors.append(map)
        }
        params.append(errors)
        
        errorCallback(params)
      }
    }
  }
  
  @objc public func paypay(_ authorization: String, apiKey: String, apiVersion: String?,
                            payType: String?, accessId: String?, id: String?,
                           customerId: String?,redirectUrl: String?, redirectType: String?, userAgent: String?,
                            errorCallback: @escaping RCTResponseSenderBlock, successCallback: @escaping RCTResponseSenderBlock) {

    let req = FincodePaypayRequest()
    req.payType = payType
    req.accessId = accessId
    req.id = id
    req.customerId = customerId
    req.redirectUrl = redirectUrl
    req.redirectType = redirectType
    req.userAgent = userAgent
    
    print(req)
    
    FincodePaymentRepository.sharedInstance.payment(id ?? "", request: req, header: createHeader(auth: authorization, apiKey: apiKey, apiVersion: apiVersion)) { result in
      switch result {
      case .success(let data):
       
        successCallback([
          FincodeUtil.param(data.shopId),
          FincodeUtil.param(data.id),
          FincodeUtil.param(data.payType),
          FincodeUtil.param(data.status),
          FincodeUtil.param(data.accessId),
          FincodeUtil.param(data.processDate),
          FincodeUtil.param(data.jobCode),
          FincodeUtil.param(data.amount),
          FincodeUtil.param(data.tax),
          FincodeUtil.param(data.totalAmount),
          FincodeUtil.param(data.customerId),
          FincodeUtil.param(data.codeExpiryDate),
          FincodeUtil.param(data.authMaxDate),
          FincodeUtil.param(data.orderDescription),
          FincodeUtil.param(data.captureDescription),
          FincodeUtil.param(data.updateDescription),
          FincodeUtil.param(data.cancelDescription),
          FincodeUtil.param(data.redirectUrl),
          FincodeUtil.param(data.redirectType),
          FincodeUtil.param(data.clientField1),
          FincodeUtil.param(data.clientField2),
          FincodeUtil.param(data.clientField3),
          FincodeUtil.param(data.storeId),
          FincodeUtil.param(data.codeId),
          FincodeUtil.param(data.codeUrl),
          FincodeUtil.param(data.paymentId),
          FincodeUtil.param(data.paypayResultCode),
          FincodeUtil.param(data.merchantPaymentId),
          FincodeUtil.param(data.merchantCaptureId),
          FincodeUtil.param(data.merchantUpdateId),
          FincodeUtil.param(data.merchantRevertId),
          FincodeUtil.param(data.merchantRefundId),
          FincodeUtil.param(data.paymentDate),
          FincodeUtil.param(data.errorCode),
          FincodeUtil.param(data.created),
          FincodeUtil.param(data.updated)])
      case .failure(let error):
        var params: [Any] = []
        params.append(error.errorResponse.statusCode ?? "")
        
        var errors: [Dictionary<AnyHashable, Any>] = []
        for e in error.errorResponse.errors {
          var map: Dictionary<AnyHashable, Any> = [:]
          map.updateValue(e.code ?? "", forKey: "code")
          map.updateValue(e.message, forKey: "message")
          errors.append(map)
        }
        params.append(errors)
        
        errorCallback(params)
      }
    }
  }
  
  @objc public func registerCard(_ authorization: String, apiKey: String, apiVersion: String?,
                                 customerId: String?,defaultFlag: String?, cardNo: String?,
                                 expire: String?,holderName: String?,
                                 securityCode: String?, token: String?,
                                 errorCallback: @escaping RCTResponseSenderBlock,
                                 successCallback: @escaping RCTResponseSenderBlock) {
    
    let req = FincodeCardRegisterRequest()
    req.defaultFlag = defaultFlag
    req.cardNo = cardNo
    req.expire = expire
    req.holderName = holderName
    req.securityCode = securityCode
    req.token = token
    print(req)
    FincodeCardOperateRepository.sharedInstance.registerCard(customerId ?? "", request: req, header: createHeader(auth: authorization, apiKey: apiKey, apiVersion: apiVersion)) { result in
      switch result {
      case .success(let data):
        
        successCallback([
          FincodeUtil.param(data.customerId),
          FincodeUtil.param(data.id),
          FincodeUtil.param(data.defaultFlag),
          FincodeUtil.param(data.cardNo),
          FincodeUtil.param(data.expire),
          FincodeUtil.param(data.holderName),
          FincodeUtil.param(data.cardNoHash),
          FincodeUtil.param(data.created),
          FincodeUtil.param(data.updated),
          FincodeUtil.param(data.type),
          FincodeUtil.param(data.brand)
        ])
      case .failure(let error):
        var params: [Any] = []
        params.append(error.errorResponse.statusCode ?? "")
        
        var errors: [Dictionary<AnyHashable, Any>] = []
        for e in error.errorResponse.errors {
          var map: Dictionary<AnyHashable, Any> = [:]
          map.updateValue(e.code ?? "", forKey: "code")
          map.updateValue(e.message, forKey: "message")
          errors.append(map)
        }
        params.append(errors)
        
        errorCallback(params)
      }
    }
  }
  
  
  @objc public func updateCard(_ authorization: String, apiKey: String, apiVersion: String?,
                               customerId: String?, cardId: String?, defaultFlag: String?,
                               expire: String?,holderName: String?,
                               securityCode: String?, token: String?,
                               errorCallback: @escaping RCTResponseSenderBlock,
                               successCallback: @escaping RCTResponseSenderBlock) {
    
    let req = FincodeCardUpdateRequest()
    req.defaultFlag = defaultFlag
    req.expire = expire
    req.holderName = holderName
    req.securityCode = securityCode
    req.token = token
    print(req)
    FincodeCardOperateRepository.sharedInstance.updateCard(customerId ?? "", cardId: cardId ?? "" , request: req, header: createHeader(auth: authorization, apiKey: apiKey, apiVersion: apiVersion)) { result in
      switch result {
      case .success(let data):
        
        successCallback([
          FincodeUtil.param(data.customerId),
          FincodeUtil.param(data.id),
          FincodeUtil.param(data.defaultFlag),
          FincodeUtil.param(data.cardNo),
          FincodeUtil.param(data.expire),
          FincodeUtil.param(data.holderName),
          FincodeUtil.param(data.cardNoHash),
          FincodeUtil.param(data.created),
          FincodeUtil.param(data.updated),
          FincodeUtil.param(data.type),
          FincodeUtil.param(data.brand)
        ])
      case .failure(let error):
        var params: [Any] = []
        params.append(error.errorResponse.statusCode ?? "")
        
        var errors: [Dictionary<AnyHashable, Any>] = []
        for e in error.errorResponse.errors {
          var map: Dictionary<AnyHashable, Any> = [:]
          map.updateValue(e.code ?? "", forKey: "code")
          map.updateValue(e.message, forKey: "message")
          errors.append(map)
        }
        params.append(errors)
        
        errorCallback(params)
      }
    }
  }
  
  @objc public func authentication(_ authorization: String, apiKey: String, apiVersion: String,
                                   id: String?, param: String?,
                                   errorCallback: @escaping RCTResponseSenderBlock,
                                   successCallback: @escaping RCTResponseSenderBlock) {
    
    let req = FincodeAuthRequest()
    req.param = param
    print(req)
    FincodePaymentRepository.sharedInstance.authentication(id ?? "", request: req, header: createHeader(auth: authorization, apiKey: apiKey, apiVersion: apiVersion)) { result in
      switch result {
      case .success(let data):
        
        successCallback([
          FincodeUtil.param(data.tds2TransResult),
          FincodeUtil.param(data.tds2TransResultReason),
          FincodeUtil.param(data.challengeUrl)
        ])
      case .failure(let error):
        var params: [Any] = []
        params.append(error.errorResponse.statusCode ?? "")
        
        var errors: [Dictionary<AnyHashable, Any>] = []
        for e in error.errorResponse.errors {
          var map: Dictionary<AnyHashable, Any> = [:]
          map.updateValue(e.code ?? "", forKey: "code")
          map.updateValue(e.message, forKey: "message")
          errors.append(map)
        }
        params.append(errors)
        
        errorCallback(params)
      }
    }
  }
  
  @objc public func cardInfoList(_ authorization: String, apiKey: String, apiVersion: String?, customerId: String?,errorCallback: @escaping RCTResponseSenderBlock, successCallback: @escaping RCTResponseSenderBlock) {

    FincodeCardOperateRepository.sharedInstance.cardInfoList(customerId ?? "", header: createHeader(auth: authorization, apiKey: apiKey, apiVersion: apiVersion)) { result in
      switch result {
      case .success(let data):
        var params: [Any] = []
        var cards: [Dictionary<AnyHashable, Any>] = []
        for cardInfo in data.cardInfoList {
          var map: Dictionary<AnyHashable, Any> = [:]
          map.updateValue(FincodeUtil.param(cardInfo.customerId) ?? "", forKey: "customerId")
          map.updateValue(FincodeUtil.param(cardInfo.id), forKey: "id")
          map.updateValue(FincodeUtil.param(cardInfo.defaultFlag.rawValue), forKey: "defaltFlag")
          map.updateValue(FincodeUtil.param(cardInfo.cardNo), forKey: "cardNo")
          map.updateValue(FincodeUtil.param(cardInfo.expire), forKey: "expire")
          map.updateValue(FincodeUtil.param(cardInfo.holderName), forKey: "holderName")
          map.updateValue(FincodeUtil.param(cardInfo.cardNoHash), forKey: "cardNoHash")
          map.updateValue(FincodeUtil.param(cardInfo.created), forKey: "created")
          map.updateValue(FincodeUtil.param(cardInfo.updated), forKey: "updated")
          map.updateValue(FincodeUtil.param(cardInfo.type), forKey: "cardType")
          map.updateValue(FincodeUtil.param(cardInfo.brand), forKey: "cardBrand")
          cards.append(map)
        }
        params.append(cards)
        successCallback(
          params
        )
        
      case .failure(let error):
        var params: [Any] = []
        params.append(error.errorResponse.statusCode ?? "")
        
        var errors: [Dictionary<AnyHashable, Any>] = []
        for e in error.errorResponse.errors {
          var map: Dictionary<AnyHashable, Any> = [:]
          map.updateValue(e.code ?? "", forKey: "code")
          map.updateValue(e.message, forKey: "message")
          errors.append(map)
        }
        params.append(errors)
        
        errorCallback(params)
      }
    }
  }
  
  @objc public func getResult(_ authorization: String, apiKey: String, apiVersion: String,
                              id: String?,
                              errorCallback: @escaping RCTResponseSenderBlock,
                              successCallback: @escaping RCTResponseSenderBlock) {
    
    FincodePaymentRepository.sharedInstance.getResult(id ?? "", header: createHeader(auth: authorization, apiKey: apiKey, apiVersion: apiVersion)) { result in
      switch result {
      case .success(let data):
        
        successCallback([
          FincodeUtil.param(data.tds2TransResult),
          FincodeUtil.param(data.tds2TransResultReason)
        ])
      case .failure(let error):
        var params: [Any] = []
        params.append(error.errorResponse.statusCode ?? "")
        
        var errors: [Dictionary<AnyHashable, Any>] = []
        for e in error.errorResponse.errors {
          var map: Dictionary<AnyHashable, Any> = [:]
          map.updateValue(e.code ?? "", forKey: "code")
          map.updateValue(e.message, forKey: "message")
          errors.append(map)
        }
        params.append(errors)
        
        errorCallback(params)
      }
    }
  }
  
  @objc public func paymentSecure(_ authorization: String, apiKey: String, apiVersion: String?,
                                  id: String?, payType: String?, accessId: String?,
                                  errorCallback: @escaping RCTResponseSenderBlock, successCallback: @escaping RCTResponseSenderBlock) {
    
    let req = FincodePaymentSecureRequest()
    req.payType = payType
    req.accessId = accessId
    req.id = id
    print(req)
    FincodePaymentRepository.sharedInstance.paymentSecure(id ?? "", request: req, header: createHeader(auth: authorization, apiKey: apiKey, apiVersion: apiVersion)) { result in
      switch result {
      case .success(let data):
        // React(JS)に情報を渡すには、配列型のみなので書式を"key:value"(区切文字 :)で設定する
        successCallback([
          FincodeUtil.param(data.shopId),
          FincodeUtil.param(data.id),
          FincodeUtil.param(data.payType),
          FincodeUtil.param(data.status),
          FincodeUtil.param(data.accessId),
          FincodeUtil.param(data.processDate),
          FincodeUtil.param(data.jobCode),
          FincodeUtil.param(data.itemCode),
          FincodeUtil.param(data.amount),
          FincodeUtil.param(data.tax),
          FincodeUtil.param(data.totalAmount),
          FincodeUtil.param(data.customerGroupId),
          FincodeUtil.param(data.customerId),
          FincodeUtil.param(data.cardNo),
          FincodeUtil.param(data.cardId),
          FincodeUtil.param(data.expire),
          FincodeUtil.param(data.holderName),
          FincodeUtil.param(data.cardNoHash),
          FincodeUtil.param(data.method),
          FincodeUtil.param(data.payTimes),
          FincodeUtil.param(data.forward),
          FincodeUtil.param(data.issuer),
          FincodeUtil.param(data.transactionId),
          FincodeUtil.param(data.approve),
          FincodeUtil.param(data.authMaxDate),
          FincodeUtil.param(data.clientField1),
          FincodeUtil.param(data.clientField2),
          FincodeUtil.param(data.clientField3),
          FincodeUtil.param(data.tdsType),
          FincodeUtil.param(data.tds2Type),
          FincodeUtil.param(data.tds2RetUrl),
          FincodeUtil.param(data.tds2Status),
          FincodeUtil.param(data.merchantName),
          FincodeUtil.param(data.sendUrl),
          FincodeUtil.param(data.subscriptionId),
          //FincodeUtil.param(data.brand),
          FincodeUtil.param(data.errorCode),
          FincodeUtil.param(data.created),
          FincodeUtil.param(data.updated)])
      case .failure(let error):
        var params: [Any] = []
        params.append(error.errorResponse.statusCode ?? "")
        
        var errors: [Dictionary<AnyHashable, Any>] = []
        for e in error.errorResponse.errors {
          var map: Dictionary<AnyHashable, Any> = [:]
          map.updateValue(e.code ?? "", forKey: "code")
          map.updateValue(e.message, forKey: "message")
          errors.append(map)
        }
        params.append(errors)
        
        errorCallback(params)
      }
    }
  }
  
  
  private func createHeader(auth: String, apiKey: String, apiVersion: String?) -> [String : String] {
    var h: [String : String] = [:]
    h.updateValue(Authorization.getValue(auth).authorization(apiKey), forKey: "Authorization")
    if let v = apiVersion {
      h.updateValue(v, forKey: "Api-Version")
    }
    
    return h
  }
}
