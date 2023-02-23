//
//  RCTFincodeVerticalView.swift
//  Fincode_Manual_Import
//
//  Created by 中嶋彰 on 2023/02/21.
//

import Foundation
import UIKit
import FincodeSDK

class RCTFincodeVerticalView: RCTFincodeCommonView {
  
  let mView = FincodeVerticalView()
  
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
