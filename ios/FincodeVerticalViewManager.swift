//
//  FincodeHorizontalViewManager.swift
//  SampleApp
//
//  Created by 中嶋彰 on 2023/01/23.
//

import FincodeSDK

@objc(FincodeVerticalViewManager)
class FincodeVerticalViewManager: RCTFincodeViewManager {
  
  override init() {
    super.init()
    let view = RCTFincodeVerticalView()
    fincodeView = view
    FincodeViewHolder.sharedInstance.vertical = view
  }
  
  override func view() -> UIView {
    return fincodeView!
  }

  override static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
