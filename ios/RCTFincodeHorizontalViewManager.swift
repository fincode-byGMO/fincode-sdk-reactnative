//
//  FincodeHorizontalViewManager.swift
//  SampleApp
//
//  Created by fincode on 2023/01/23.
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

