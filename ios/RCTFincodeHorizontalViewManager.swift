//
//  FincodeHorizontalViewManager.swift
//  SampleApp
//
//  Created by 中嶋彰 on 2023/01/23.
//

import FincodeSDK

@objc(RCTFincodeHorizontalViewManager)
class RCTFincodeHorizontalViewManager: RCTFincodeViewManager {

  override func view() -> UIView {
    fincodeView = FincodeHorizontalView()
    return fincodeView!
  }

  @objc override static func requiresMainQueueSetup() -> Bool {
    return false
  }
}

