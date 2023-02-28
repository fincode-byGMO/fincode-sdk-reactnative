//
//  FincodeViewModule.swift
//  Fincode_Manual_Import
//
//  Created by 中嶋彰 on 2023/02/27.
//

import Foundation
import FincodeSDK

@objc(FincodeViewModule)
class FincodeViewModule: NSObject { 
   
  /// UIコンポーネント利用の際で、決済向けUIの初期化を行う
  @objc public func initPayment(_ viewType: String, authorization: String, apiKey: String, apiVersion: String, customerId: String, payType: String, accessId: String, id: String) {
    
    let rct: RCTFincodeCommonView? =  FincodeViewHolder.sharedInstance.getView(viewType)
    rct?.initPayment(authorization, apiKey: apiKey, apiVersion: apiVersion, customerId: customerId, payType: payType, accessId: accessId, id: id)
  }
  
  /// UIコンポーネント利用の際で、カード登録向けUIの初期化を行う
  @objc public func initCardRegister(_ viewType: String, authorization: String, apiKey: String, apiVersion: String, customerId: String, defaultFlg: String) {
    
    let rct: RCTFincodeCommonView? =  FincodeViewHolder.sharedInstance.getView(viewType)
    rct?.initCardRegister(authorization, apiKey: apiKey, apiVersion: apiVersion, customerId: customerId, defaultFlg: defaultFlg)
  }
  
  /// UIコンポーネント利用の際で、カード更新向けUIの初期化を行う
  @objc public func initCardUpdate(_ viewType: String, authorization: String, apiKey: String, apiVersion: String, customerId: String, defaultFlg: String, cardId: String) {
    
    let rct: RCTFincodeCommonView? =  FincodeViewHolder.sharedInstance.getView(viewType)
    rct?.initCardUpdate(authorization, apiKey: apiKey, apiVersion: apiVersion, customerId: customerId, defaultFlg: defaultFlg, cardId: cardId)
  }
}
