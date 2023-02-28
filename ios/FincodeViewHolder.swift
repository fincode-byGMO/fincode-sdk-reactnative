//
//  FincodeViewHolder.swift
//  Fincode_Manual_Import
//
//  Created by 中嶋彰 on 2023/02/27.
//

import Foundation
import FincodeSDK

class FincodeViewHolder {
  
  public static let sharedInstance = FincodeViewHolder()
  
  public var vertical: RCTFincodeVerticalView?
  public var horizontal: RCTFincodeHorizontalView?
  
  private init() {
  }
  
  public func getView(_ value: String) -> RCTFincodeCommonView? {
  
    if value == "vertical" {
      return vertical
    } else {
      return horizontal
    }
  }
}
