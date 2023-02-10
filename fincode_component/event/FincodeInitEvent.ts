import { UIManager } from 'react-native';

import { ConfigPayment, ConfigCardRegister, ConfigCardUpdate } from './types/FincodeTypes';

// ******************************
// event: ReactNative to Native
// ******************************

// prettier-ignore
export const initPayment = (viewId: number | null, c: ConfigPayment) =>
  UIManager.dispatchViewManagerCommand(viewId, UIManager.FincodeVerticalView.Commands.initPayment.toString(), [
    c.authorization,
    c.apiKey,
    c.apiVersion,
    c.customerId,
    c.payType,
    c.accessId,
    c.id,
  ]);

// prettier-ignore
export const initCardRegister = (viewId: number | null, c: ConfigCardRegister) =>
  UIManager.dispatchViewManagerCommand(viewId, UIManager.FincodeVerticalView.Commands.initCardRegister.toString(), [
    c.authorization,
    c.apiKey,
    c.apiVersion,
    c.customerId,
    c.defaultFlg,
  ]);

// prettier-ignore
export const initCardUpdate = (viewId: number | null, c: ConfigCardUpdate) =>
  UIManager.dispatchViewManagerCommand(viewId, UIManager.FincodeVerticalView.Commands.initCardUpdate.toString(), [
    c.authorization,
    c.apiKey,
    c.apiVersion,
    c.customerId,
    c.defaultFlg,
    c.cardId,
  ]);
