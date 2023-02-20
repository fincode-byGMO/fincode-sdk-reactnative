//
//  FincodeHorizontalViewManager.swift
//  SampleApp
//
//  Created by 中嶋彰 on 2023/01/23.
//

import FincodeSDK

@objc(FincodeVerticalViewManager)
class FincodeVerticalViewManager: RCTFincodeViewManager {
  
  override func view() -> UIView {
    fincodeView = FincodeVerticalView()
    return fincodeView!
  }

  override static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
