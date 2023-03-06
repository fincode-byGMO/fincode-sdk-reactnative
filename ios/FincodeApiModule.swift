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
                            securityCode: String?, holderName: String?,
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
    
    FincodePaymentRepository.sharedInstance.payment(id ?? "", request: req, header: createHeader(auth: authorization, apiKey: apiKey, apiVersion: apiVersion)) { result in
      switch result {
      case .success(let data):
        // React(JS)に情報を渡すには、配列型のみなので書式を"key:value"(区切文字 :)で設定する
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
