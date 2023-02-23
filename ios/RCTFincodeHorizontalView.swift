//
//  RCTFincodeHorizontalView.swift
//  Fincode_Manual_Import
//
//  Created by 中嶋彰 on 2023/02/23.
//

import Foundation

import Foundation
import UIKit
import FincodeSDK

class RCTFincodeHorizontalView: RCTFincodeCommonView {
  
  let mView = FincodeHorizontalView()
  
  override public init(frame: CGRect) {
    super.init(frame: frame)
    
    fincodeView = mView
    
    mView.frame = bounds
    mView.autoresizingMask = [.flexibleWidth, .flexibleHeight]
    addSubview(mView)
  }
  
  required public init?(coder: NSCoder) {
    super.init(coder: coder)
  }
}
