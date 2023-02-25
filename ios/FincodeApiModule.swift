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
  
  private func createHeader(auth: String, apiKey: String, apiVersion: String?) -> [String : String] {
    var h: [String : String] = [:]
    h.updateValue(Authorization.getValue(auth).authorization(apiKey), forKey: "Authorization")
    if let v = apiVersion {
      h.updateValue(v, forKey: "Api-Version")
    }
    
    return h
  }
}
