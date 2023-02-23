//
//  FincodeHorizontalViewManager.swift
//  SampleApp
//
//  Created by fincode on 2023/01/23.
//

import FincodeSDK

@objc(FincodeHorizontalViewManager)
class FincodeHorizontalViewManager: RCTFincodeViewManager {

  override init() {
    super.init()
    fincodeView = RCTFincodeHorizontalView()
  }
  
  override func view() -> UIView {
    return fincodeView!
  }

  override static func requiresMainQueueSetup() -> Bool {
    return true
  }
}

