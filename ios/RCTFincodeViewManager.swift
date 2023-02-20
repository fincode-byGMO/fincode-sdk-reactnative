//
//  RCTFincodeViewManager.swift
//  Fincode_Manual_Import
//
//  Created by 中嶋彰 on 2023/02/13.
//

import FincodeSDK

@objc(RCTFincodeViewManager)
class RCTFincodeViewManager: RCTViewManager {

  public var fincodeView: FincodeCommon? = nil;
  
//  public func auth(_ value: String) -> Authorization {
//    if value.lowercased() == "basic" {
//      return .Basic
//    } else if value.lowercased() == "bearer" {
//      return .Bearer
//    } else {
//      return .none
//    }
//  }
  
  @objc func initPayment(_ authorization: String, apiKey: String, apiVersion: String, customerId: String, payType: String, accessId: String, id: String) {
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
  
  @objc func initCardRegister(_ authorization: String, apiKey: String, apiVersion: String, customerId: String, defaultFlg: String) {
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
  
  @objc func initCardUpdate(_ authorization: String, apiKey: String, apiVersion: String, customerId: String, defaultFlg: String, cardId: String) {
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
}

extension RCTFincodeViewManager: ResultDelegate {
  func success(_ result: FincodeResponse) {
    
  }
  
  func failure(_ result: FincodeErrorResponse) {
    
  }
}
