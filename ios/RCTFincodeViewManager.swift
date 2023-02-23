//
//  RCTFincodeViewManager.swift
//  Fincode_Manual_Import
//
//  Created by 中嶋彰 on 2023/02/13.
//

import FincodeSDK

class RCTFincodeViewManager: RCTViewManager {

  public var fincodeView: RCTFincodeCommonView?
  
  @objc func initPayment(_ authorization: String, apiKey: String, apiVersion: String, customerId: String, payType: String, accessId: String, id: String) {
    
    self.fincodeView?.initPayment(authorization, apiKey: apiKey, apiVersion: apiVersion, customerId: customerId, payType: payType, accessId: accessId, id: id)
  }
  
  @objc func initCardRegister(_ authorization: String, apiKey: String, apiVersion: String, customerId: String, defaultFlg: String) {

    self.fincodeView?.initCardRegister(authorization, apiKey: apiKey, apiVersion: apiVersion, customerId: customerId, defaultFlg: defaultFlg)
  }
  
  @objc func initCardUpdate(_ authorization: String, apiKey: String, apiVersion: String, customerId: String, defaultFlg: String, cardId: String) {
    
    self.fincodeView?.initCardUpdate(authorization, apiKey: apiKey, apiVersion: apiVersion, customerId: customerId, defaultFlg: defaultFlg, cardId: cardId)
  }
  
}
