//
//  FincodeHorizontalViewManager.swift
//  SampleApp
//
//  Created by 中嶋彰 on 2023/01/23.
//

import FincodeSDK

@objc(FincodeHorizontalViewManager)
class FincodeHorizontalViewManager: RCTViewManager {

  override func view() -> FincodeHorizontalView {
    return FincodeHorizontalView()
  }

  @objc override static func requiresMainQueueSetup() -> Bool {
    return false
  }
}
