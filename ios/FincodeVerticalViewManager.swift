import FincodeSDK

@objc(FincodeVerticalViewManager)
class FincodeVerticalViewManager: RCTViewManager {

  override func view() -> FincodeVerticalView {
    return FincodeVerticalView()
  }

  @objc override static func requiresMainQueueSetup() -> Bool {
    return false
  }
}
