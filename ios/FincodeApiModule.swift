//
//  FincodeApiModule.swift
//  Fincode_Manual_Import
//
//  Created by 中嶋彰 on 2023/02/23.
//

import Foundation
import FincodeSDK

class FincodeApiModule {
  
  @objc public func payment(_ orderId: String, authorization: String, apiKey: String, apiVersion: String?,
                            payType: String?, accessId: String?, id: String?, token: String?, cardNo: String?,
                            expire: String?, customerId: String?, cardId: String?, method: String?, payTimes: String?,
                            securityCode: String?, holderName: String?,
                            resolve: @escaping RCTPromiseResolveBlock, reject : @escaping RCTPromiseRejectBlock) {
    
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
    
    FincodePaymentRepository.sharedInstance.payment(orderId, request: req, header: createHeader(auth: authorization, apiKey: apiKey, apiVersion: apiVersion)) { result in
      switch result {
      case .success(let data):
        // React(JS)に情報を渡すには、配列型のみなので書式を"key:value"(区切文字 :)で設定する
        resolve(["", ""])
      case .failure(let error):
        reject("", "", nil)
      }
    }
  }
  
  private func createHeader(auth: String, apiKey: String, apiVersion: String?) -> [String : String] {
    var h: [String : String] = [:]
    h.updateValue(auth, forKey: "Authorization")
    if let v = apiVersion {
      h.updateValue(v, forKey: "Api-Version")
    }
    
    return h
  }
}
