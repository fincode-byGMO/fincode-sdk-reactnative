import { UIManager, Platform, NativeModules } from 'react-native';
import { ConfigPayment, ConfigCardRegister, ConfigCardUpdate } from './types/FincodeTypes';

const module = NativeModules.FincodeVerticalViewManager;

// ******************************
// event: ReactNative to Native
// ******************************

export const initPayment = (viewId: number | null, c: ConfigPayment) => {
  if (Platform.OS === 'android') {
    UIManager.dispatchViewManagerCommand(viewId, UIManager.FincodeVerticalView.Commands.initPayment.toString(), [c.authorization, c.apiKey, c.apiVersion, c.customerId, c.payType, c.accessId, c.id]);
  } else {
    module.initPayment(c.authorization, c.apiKey, c.apiVersion, c.customerId, c.payType, c.accessId, c.id);
  }
};

export const initCardRegister = (viewId: number | null, c: ConfigCardRegister) => {
  if (Platform.OS === 'android') {
    UIManager.dispatchViewManagerCommand(viewId, UIManager.FincodeVerticalView.Commands.initCardRegister.toString(), [c.authorization, c.apiKey, c.apiVersion, c.customerId, c.defaultFlg]);
  } else {
    module.initCardRegister(c.authorization, c.apiKey, c.apiVersion, c.customerId, c.defaultFlg);
  }
};

export const initCardUpdate = (viewId: number | null, c: ConfigCardUpdate) => {
  if (Platform.OS === 'android') {
    UIManager.dispatchViewManagerCommand(viewId, UIManager.FincodeVerticalView.Commands.initCardUpdate.toString(), [c.authorization, c.apiKey, c.apiVersion, c.customerId, c.defaultFlg, c.cardId]);
  } else {
    module.initCardUpdate(c.authorization, c.apiKey, c.apiVersion, c.customerId, c.defaultFlg, c.cardId);
  }
};

// // prettier-ignore
// const initPaymentAndroid = (viewId: number | null, c: ConfigPayment) =>
//   UIManager.dispatchViewManagerCommand(viewId, UIManager.FincodeVerticalView.Commands.initPayment.toString(), [
//     c.authorization,
//     c.apiKey,
//     c.apiVersion,
//     c.customerId,
//     c.payType,
//     c.accessId,
//     c.id,
//   ]);

// // prettier-ignore
// const initCardRegisterAndroid = (viewId: number | null, c: ConfigCardRegister) =>
//   UIManager.dispatchViewManagerCommand(viewId, UIManager.FincodeVerticalView.Commands.initCardRegister.toString(), [
//     c.authorization,
//     c.apiKey,
//     c.apiVersion,
//     c.customerId,
//     c.defaultFlg,
//   ]);

// // prettier-ignore
// const initCardUpdateAndroid = (viewId: number | null, c: ConfigCardUpdate) =>
//   UIManager.dispatchViewManagerCommand(viewId, UIManager.FincodeVerticalView.Commands.initCardUpdate.toString(), [
//     c.authorization,
//     c.apiKey,
//     c.apiVersion,
//     c.customerId,
//     c.defaultFlg,
//     c.cardId,
//   ]);
