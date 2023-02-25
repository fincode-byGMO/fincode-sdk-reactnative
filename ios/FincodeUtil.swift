//
//  FincodeUtil.swift
//  Fincode_Manual_Import
//
//  Created by 中嶋彰 on 2023/02/24.
//

import Foundation
import FincodeSDK

class FincodeUtil {
  
  public static func toString(_ value: Date?) -> String? {
    guard let value = value else { return nil }
    
    let dateFormatter = DateFormatter()
    dateFormatter.dateFormat = "yyyy-MM-dd'T'HH:mm:ss.SSSXXX"
    
    return dateFormatter.string(from: value)
  }
  
  public static func toString(_ value: Int64?) -> String? {
    guard let value = value else { return nil }
    
    return String(value)
  }
  
  public static func param(_ value: Int?) -> String {
    guard let value = value else { return "" }
    return String(value)
  }
  
  public static func param(_ value: Int64?) -> String {
    let v = FincodeUtil.toString(value) ?? ""
    return v
  }
  
  public static func param(_ value: String?) -> String {
    guard let value = value else { return "" }
    return String(value)
  }
  
  public static func param(_ value: Date?) -> String {
    let v = FincodeUtil.toString(value) ?? ""
    return v
  }
  
  public static func param(value: FincodeErrorInfo) -> String {
    let v = value.code ?? "null" + "&" + value.message
    return v
  }
}
