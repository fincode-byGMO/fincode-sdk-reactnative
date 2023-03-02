import { UIManager, Platform, NativeModules } from 'react-native';
import { ConfigPayment, ConfigCardRegister, ConfigCardUpdate, PaymentRequest, PaymentResponse, ErrorResponse, Error, ApiPaymentSuccessCallback, ApiFailureCallback } from './types/FincodeTypes';

//const module = NativeModules.FincodeVerticalViewManager;
const module = NativeModules.FincodeViewModule;
const apiMocule = NativeModules.FincodeApiModule;

// ******************************
// event: ReactNative to Native
// ******************************

// UIコンポーネント: 決済時の初期化
export const initPayment = (viewId: number | null, viewType: string, c: ConfigPayment) => {
  if (Platform.OS === 'android') {
    UIManager.dispatchViewManagerCommand(viewId, UIManager.FincodeVerticalView.Commands.initPayment.toString(), [c.authorization, c.apiKey, c.apiVersion, c.customerId, c.payType, c.accessId, c.id]);
  } else {
    module.initPayment(viewType, c.authorization, c.apiKey, c.apiVersion, c.customerId, c.payType, c.accessId, c.id);
  }
};

// UIコンポーネント: カード登録時の初期化
export const initCardRegister = (viewId: number | null, viewType: string, c: ConfigCardRegister) => {
  if (Platform.OS === 'android') {
    UIManager.dispatchViewManagerCommand(viewId, UIManager.FincodeVerticalView.Commands.initCardRegister.toString(), [c.authorization, c.apiKey, c.apiVersion, c.customerId, c.defaultFlg]);
  } else {
    module.initCardRegister(viewType, c.authorization, c.apiKey, c.apiVersion, c.customerId, c.defaultFlg);
  }
};

// UIコンポーネント: カード更新時の初期化
export const initCardUpdate = (viewId: number | null, viewType: string, c: ConfigCardUpdate) => {
  if (Platform.OS === 'android') {
    UIManager.dispatchViewManagerCommand(viewId, UIManager.FincodeVerticalView.Commands.initCardUpdate.toString(), [c.authorization, c.apiKey, c.apiVersion, c.customerId, c.defaultFlg, c.cardId]);
  } else {
    module.initCardUpdate(viewType, c.authorization, c.apiKey, c.apiVersion, c.customerId, c.defaultFlg, c.cardId);
  }
};

// API単体実行: 決済実行

let apiPaymentSuccessCallback: ApiPaymentSuccessCallback;
let apiFailureCallback: ApiFailureCallback;

export const payment = (req: PaymentRequest, successCallback: ApiPaymentSuccessCallback, failureCallback: ApiFailureCallback) => {
  apiPaymentSuccessCallback = successCallback;
  apiFailureCallback = failureCallback;

  apiMocule.payment(
    req.authorization,
    req.apiKey,
    req.apiVersion,
    req.payType,
    req.accessId,
    req.id,
    req.token,
    req.cardNo,
    req.expire,
    req.customerId,
    req.cardId,
    req.method,
    req.payTimes,
    req.securityCode,
    req.holderName,
    apiFailure,
    apiPaymentSuccess,
  );
};

const apiPaymentSuccess = (
  acs: string,
  shopId: string,
  id: string,
  payType: string,
  status: string,
  accessId: string,
  processDate: string,
  jobCode: string,
  itemCode: string,
  amount: string,
  tax: string,
  totalAmount: string,
  customerGroupId: string,
  customerId: string,
  cardNo: string,
  cardId: string,
  expire: string,
  holderName: string,
  cardNoHash: string,
  method: string,
  payTimes: string,
  forward: string,
  issuer: string,
  transactionId: string,
  approve: string,
  authMaxDate: string,
  clientField1: string,
  clientField2: string,
  clientField3: string,
  tdsType: string,
  tds2Type: string,
  tds2RetUrl: string,
  tds2Status: string,
  merchantName: string,
  sendUrl: string,
  subscriptionId: string,
  bulkPaymentId: string,
  brand: string,
  errorCode: string,
  acsUrl: string,
  paReq: string,
  created: string,
  updated: string,
) => {
  apiPaymentSuccessCallback({
    acs: acs,
    shopId: shopId,
    id: id,
    payType: payType,
    status: status,
    accessId: accessId,
    processDate: processDate,
    jobCode: jobCode,
    itemCode: itemCode,
    amount: amount,
    tax: tax,
    totalAmount: totalAmount,
    customerGroupId: customerGroupId,
    customerId: customerId,
    cardNo: cardNo,
    cardId: cardId,
    expire: expire,
    holderName: holderName,
    cardNoHash: cardNoHash,
    method: method,
    payTimes: payTimes,
    forward: forward,
    issuer: issuer,
    transactionId: transactionId,
    approve: approve,
    authMaxDate: authMaxDate,
    clientField1: clientField1,
    clientField2: clientField2,
    clientField3: clientField3,
    tdsType: tdsType,
    tds2Type: tds2Type,
    tds2RetUrl: tds2RetUrl,
    tds2Status: tds2Status,
    merchantName: merchantName,
    sendUrl: sendUrl,
    subscriptionId: subscriptionId,
    bulkPaymentId: bulkPaymentId,
    brand: brand,
    errorCode: errorCode,
    acsUrl: acsUrl,
    paReq: paReq,
    created: created,
    updated: updated,
  });
};
// API単体実行: カード一覧取得

let apiCardInfoListSuccessCallback: ApiCardInfoListSuccessCallback;

export const cardInfoList = (req: CardInfoListRequest, successCallback: ApiCardInfoListSuccessCallback, failureCallback: ApiFailureCallback) => {
  apiCardInfoListSuccessCallback = successCallback;
  apiFailureCallback = failureCallback;

  apiMocule.cardInfoList(req.authorization, req.apiKey, req.apiVersion, req.customerId, apiFailure, apiCardInfoListSuccess);
};

const apiCardInfoListSuccess = (...cards) => {
  let list: CardInfo[] = [];
  if (cards !== undefined) {
    for (var card of cards) {
      let v: CardInfo = {
        customerId: card[0],
        id: card[1],
        defaultFlag: card[2],
        cardNo: card[3],
        expire: card[4],
        holderName: card[5],
        cardNoHash: card[6],
        created: card[7],
        updated: card[8],
        type: card[9],
        brand: card[10],
      };
      list.push(v);
    }
  }

  apiCardInfoListSuccessCallback({ cardInfoList: list });
};
const apiFailure = (status, errors) => {
  let err: Error[] = [];
  if (errors !== undefined) {
    for (var value of errors) {
      let v: Error = { code: value.code, message: value.message };
      err.push(v);
    }
  }

  apiFailureCallback({ status: status, errors: err });
};
