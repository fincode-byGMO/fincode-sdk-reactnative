#import <React/RCTViewManager.h>
#import <React/RCTUIManager.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

@interface RCT_EXTERN_MODULE(FincodeHorizontalViewManager, RCTViewManager)

// オプションを設定するプロパティをReact(JS)から呼び出せるように定義する (React → swift)
RCT_EXPORT_VIEW_PROPERTY(headingHidden, BOOL)
RCT_EXPORT_VIEW_PROPERTY(dynamicLogDisplay, BOOL)
RCT_EXPORT_VIEW_PROPERTY(holderNameHidden, BOOL)
RCT_EXPORT_VIEW_PROPERTY(payTimesHidden, BOOL)

// UIコンポーネント利用の際で、決済・カード登録・カード更新をReact(JS)から呼び出せるように定義する (React → swift)
RCT_EXTERN_METHOD(initPayment:(NSString *)authorization
                  apiKey:(NSString *)apiKey
                  apiVersion:(NSString *)apiVersion
                  customerId:(NSString *)customerId
                  payType:(NSString *)payType
                  accessId:(NSString *)accessId
                  id:(NSString *)id)

RCT_EXTERN_METHOD(initCardRegister:(NSString *)authorization
                  apiKey:(NSString *)apiKey
                  apiVersion:(NSString *)apiVersion
                  customerId:(NSString *)customerId
                  defaultFlg:(NSString *)defaultFlg)

RCT_EXTERN_METHOD(initCardUpdate:(NSString *)authorization
                  apiKey:(NSString *)apiKey
                  apiVersion:(NSString *)apiVersion
                  customerId:(NSString *)customerId
                  defaultFlg:(NSString *)defaultFlg
                  cardId:(NSString *)cardId)

// 処理結果をReact(JS)に通知できるように定義する (swift → React)
RCT_EXPORT_VIEW_PROPERTY(onPaymentSuccessCallback, RCTDirectEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onCardRegisterSuccessCallback, RCTDirectEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onCardUpdateSuccessCallback, RCTDirectEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onFailureCallback, RCTDirectEventBlock)

@end
