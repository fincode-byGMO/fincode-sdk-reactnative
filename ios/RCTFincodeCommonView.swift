//
//  RCTFincodeCommonView.swift
//  Fincode_Manual_Import
//
//  Created by 中嶋彰 on 2023/02/22.
//

import Foundation
import UIKit
import FincodeSDK

class RCTFincodeCommonView: UIView {
  
  public var fincodeView: FincodeCommon? = nil;
  
  /// React(JS)側に処理結果を通知するためのオブジェクト
  @objc var onPaymentSuccessCallback: RCTDirectEventBlock?
  @objc var onCardRegisterSuccessCallback: RCTDirectEventBlock?
  @objc var onCardUpdateSuccessCallback: RCTDirectEventBlock?
  @objc var onFailureCallback: RCTDirectEventBlock?
  
  /// オプションを設定するプロパティ(見出しの表示・非表示)
  @objc public var headingHidden: Bool {
      get {
        return fincodeView!.headingHidden
      }
      set {
        fincodeView!.headingHidden = newValue
      }
  }
  
  /// オプションを設定するプロパティ(ブランド画像 動的切り替えの表示・非表示)
  @objc public var dynamicLogDisplay: Bool {
      get {
        return fincodeView!.dynamicLogDisplay
      }
      set {
        fincodeView!.dynamicLogDisplay = newValue
      }
  }
  
  /// オプションを設定するプロパティ(名義人名の表示・非表示)
  @objc public var holderNameHidden: Bool {
      get {
        return fincodeView!.holderNameHidden
      }
      set {
        fincodeView!.holderNameHidden = newValue
      }
  }
  
  /// オプションを設定するプロパティ(お支払い回数の表示・非表示)
  @objc public var payTimesHidden: Bool {
      get {
        return fincodeView!.payTimesHidden
      }
      set {
        fincodeView!.payTimesHidden = newValue
      }
  }
  
  /// UIコンポーネント利用の際で、決済向けUIの初期化を行う
  public func initPayment(_ authorization: String, apiKey: String, apiVersion: String, customerId: String, payType: String, accessId: String, id: String) {
    
    DispatchQueue.main.async {
      let config = FincodePaymentConfiguration()
      config.authorizationPublic = Authorization.getValue(authorization)
      config.apiKey = apiKey
      config.apiVersion = apiVersion
      config.customerId = customerId
      config.payType = payType
      config.accessId = accessId
      config.id = id
      
      self.fincodeView?.configuration(config, delegate: self)
    }
  }
  
  /// UIコンポーネント利用の際で、カード登録向けUIの初期化を行う
  @objc public func initCardRegister(_ authorization: String, apiKey: String, apiVersion: String, customerId: String, defaultFlg: String) {
    DispatchQueue.main.async {
      let config = FincodeCardRegisterConfiguration()
      config.authorizationPublic = Authorization.getValue(authorization)
      config.apiKey = apiKey
      config.apiVersion = apiVersion
      config.customerId = customerId
      config.defaultFlag = DefaultFlg.getValue(defaultFlg)
      
      self.fincodeView?.configuration(config, delegate: self)
    }
  }
  
  /// UIコンポーネント利用の際で、カード更新向けUIの初期化を行う
  @objc public func initCardUpdate(_ authorization: String, apiKey: String, apiVersion: String, customerId: String, defaultFlg: String, cardId: String) {
    DispatchQueue.main.async {
      let config = FincodeCardUpdateConfiguration()
      config.authorizationPublic = Authorization.getValue(authorization)
      config.apiKey = apiKey
      config.apiVersion = apiVersion
      config.customerId = customerId
      config.defaultFlag = DefaultFlg.getValue(defaultFlg)
      config.cardId = cardId
      
      self.fincodeView?.configuration(config, delegate: self)
    }
  }
  
  /// UIコンポーネント利用の際で、決済が成功した場合にReact(JS)側に結果を通知する
  public func paymentSuccessEvent(_ result: FincodeResponse){
    guard let onPaymentSuccessCallback = onPaymentSuccessCallback, let result = result as? FincodePaymentResponse else { return }
    
    let map: Dictionary<String, Any?> = [
      "acs" : result.acs,
      "shopId" : result.shopId,
      "orderId" : result.id,
      "payType" : result.payType,
      "status" : result.status,
      "accessId" : result.accessId,
      "processDate" : FincodeUtil.toString(result.processDate),
      "jobCode" : result.jobCode,
      "itemCode" : result.itemCode,
      "amount" : result.amount,
      "tax" : result.tax,
      "totalAmount" : result.totalAmount,
      "customerGroupId" : result.customerGroupId,
      "customerId" : result.customerId,
      "cardNo" : result.cardNo,
      "cardId" : result.cardId,
      "expire" : result.expire,
      "holderName" : result.holderName,
      "cardNoHash" : result.cardNoHash,
      "method" : result.method,
      "payTimes" : result.payTimes,
      "forward" : result.forward,
      "issuer" : result.issuer,
      "transactionId" : result.transactionId,
      "approve" : result.approve,
      "authMaxDate" : FincodeUtil.toString(result.authMaxDate),
      "clientField1" : result.clientField1,
      "clientField2" : result.clientField2,
      "clientField3" : result.clientField3,
      "tdsType" : result.tdsType,
      "tds2Type" : result.tds2Type,
      "tds2RetUrl" : result.tds2RetUrl,
      "tds2Status" : result.tds2Status,
      "merchantName" : result.merchantName,
      "sendUrl" : result.sendUrl,
      "subscriptionId" : result.subscriptionId,
      "bulkPaymentId" : result.bulkPaymentId,
      "cardBrand" : result.brand,
      "errorCode" : result.errorCode,
      "acsUrl" : result.acsUrl,
      "paReq" : result.paReq,
      "created" : result.created,
      "updated" : result.updated
    ]
    
    onPaymentSuccessCallback(map as [AnyHashable : Any])
  }
  
  /// UIコンポーネント利用の際で、カード登録が成功した場合にReact(JS)側に結果を通知する
  public func cardRegisterSuccessEvent(_ result: FincodeResponse){
    guard let onCardRegisterSuccessCallback = onCardRegisterSuccessCallback, let result = result as? FincodeCardRegisterResponse else { return }
    
    let map: Dictionary<String, Any?> = [
      "customerId" : result.customerId,
      "cardId" : result.id,
      "defaltFlag" : result.defaultFlag,
      "cardNo" : result.cardNo,
      "expire" : result.expire,
      "holderName" : result.holderName,
      "cardNoHash" : result.cardNoHash,
      "created" : result.created,
      "updated" : result.updated,
      "cardType" : result.type,
      "cardBrand" : result.brand
    ]
    
    onCardRegisterSuccessCallback(map as [AnyHashable : Any])
  }
  
  /// UIコンポーネント利用の際で、カード更新が成功した場合にReact(JS)側に結果を通知する
  public func cardUpdateSuccessEvent(_ result: FincodeResponse){
    guard let onCardUpdateSuccessCallback = onCardUpdateSuccessCallback, let result = result as? FincodeCardUpdateResponse else { return }
    
    let map: Dictionary<String, Any?> = [
      "customerId" : result.customerId,
      "cardId" : result.id,
      "defaltFlag" : result.defaultFlag,
      "cardNo" : result.cardNo,
      "expire" : result.expire,
      "holderName" : result.holderName,
      "cardNoHash" : result.cardNoHash,
      "created" : result.created,
      "updated" : result.updated,
      "cardType" : result.type,
      "cardBrand" : result.brand
    ]
    
    onCardUpdateSuccessCallback(map as [AnyHashable : Any])
  }
  
  /// UIコンポーネント利用の際で、決済・カード登録・カード更新で失敗した場合にReact(JS)側に結果を通知する
  public func failureEvent(_ result: FincodeErrorResponse){
    guard let onFailureCallback = onFailureCallback else { return }
    
    var list: [[AnyHashable : Any]] = []
    
    for error in result.errors {
      var errorsMap: [AnyHashable : Any] = [:]
      errorsMap.updateValue(error.code as Any, forKey: "code")
      errorsMap.updateValue(error.message as Any, forKey: "message")
      
      list.append(errorsMap)
    }
    
    var map: [AnyHashable : Any] = [:]
    map.updateValue(result.statusCode as Any, forKey: "statusCode")
    map.updateValue(list as Any, forKey: "errors")
    
    onFailureCallback(map)
  }
}

extension RCTFincodeCommonView: ResultDelegate {
  
  /// UIコンポーネント利用の際で、iOS SDKから処理成功を受け取る
  func success(_ result: FincodeResponse) {
    
    if result is FincodePaymentResponse {
      paymentSuccessEvent(result)
    } else if result is FincodeCardRegisterResponse {
      cardRegisterSuccessEvent(result)
    } else if result is FincodeCardUpdateResponse {
      cardUpdateSuccessEvent(result)
    } else {
      // do nothing
    }
  }
  
  /// UIコンポーネント利用の際で、iOS SDKから処理失敗を受け取る
  func failure(_ result: FincodeErrorResponse) {
    failureEvent(result)
  }
}
