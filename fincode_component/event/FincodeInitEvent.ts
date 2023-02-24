import { UIManager, Platform, NativeModules } from 'react-native';
import { ConfigPayment, ConfigCardRegister, ConfigCardUpdate } from './types/FincodeTypes';

const module = NativeModules.FincodeVerticalViewManager;
const apiMocule = NativeModules.FincodeApiModule;

// ******************************
// event: ReactNative to Native
// ******************************

// UIコンポーネント: 決済時の初期化
export const initPayment = (viewId: number | null, c: ConfigPayment) => {
  if (Platform.OS === 'android') {
    UIManager.dispatchViewManagerCommand(viewId, UIManager.FincodeVerticalView.Commands.initPayment.toString(), [c.authorization, c.apiKey, c.apiVersion, c.customerId, c.payType, c.accessId, c.id]);
  } else {
    module.initPayment(c.authorization, c.apiKey, c.apiVersion, c.customerId, c.payType, c.accessId, c.id);
  }
};

// UIコンポーネント: カード登録時の初期化
export const initCardRegister = (viewId: number | null, c: ConfigCardRegister) => {
  if (Platform.OS === 'android') {
    UIManager.dispatchViewManagerCommand(viewId, UIManager.FincodeVerticalView.Commands.initCardRegister.toString(), [c.authorization, c.apiKey, c.apiVersion, c.customerId, c.defaultFlg]);
  } else {
    module.initCardRegister(c.authorization, c.apiKey, c.apiVersion, c.customerId, c.defaultFlg);
  }
};

// UIコンポーネント: カード更新時の初期化
export const initCardUpdate = (viewId: number | null, c: ConfigCardUpdate) => {
  if (Platform.OS === 'android') {
    UIManager.dispatchViewManagerCommand(viewId, UIManager.FincodeVerticalView.Commands.initCardUpdate.toString(), [c.authorization, c.apiKey, c.apiVersion, c.customerId, c.defaultFlg, c.cardId]);
  } else {
    module.initCardUpdate(c.authorization, c.apiKey, c.apiVersion, c.customerId, c.defaultFlg, c.cardId);
  }
};

// API単体実行: 決済実行
export const payment = () => {
  // TODO 実装予定
};
