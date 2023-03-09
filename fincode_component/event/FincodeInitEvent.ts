import { UIManager, Platform, NativeModules } from 'react-native';
import {
  ConfigPayment,
  ConfigCardRegister,
  ConfigCardUpdate,
  PaymentRequest,
  PaymentResponse,
  CardRegisterRequest,
  CardRegisterResponse,
  ErrorResponse,
  Error,
  ApiPaymentSuccessCallback,
  ApiCardRegisterSuccessCallback,
  ApiCardInfoListSuccessCallback,
  ApiAuthSuccessCallback,
  ApiFailureCallback,
} from './types/FincodeTypes';

//const module = NativeModules.FincodeVerticalViewManager;
const module = NativeModules.FincodeViewModule;
const apiModule = NativeModules.FincodeApiModule;

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

  apiModule.payment(
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
    req.tds2RetUrl,
    req.tds2ChAccChange,
    req.tds2ChAccDate,
    req.tds2ChAccPwChange,
    req.tds2NbPurchaseAccount,
    req.tds2PaymentAccAge,
    req.tds2ProvisionAttemptsDay,
    req.tds2ShipAddressUsage,
    req.tds2ShipNameInd,
    req.tds2SuspiciousAccActivity,
    req.tds2TxnActivityDay,
    req.tds2TxnActivityYear,
    req.tds2ThreeDsReqAuthData,
    req.tds2ThreeDsReqAuthMethod,
    req.tds2ThreeDsReqAuthTimestamp,
    req.tds2AddrMatch,
    req.tds2BillAddrCity,
    req.tds2BillAddrCountry,
    req.tds2BillAddrLine1,
    req.tds2BillAddrLine2,
    req.tds2BillAddrLine3,
    req.tds2BillAddrPostCode,
    req.tds2BillAddrState,
    req.tds2Email,
    req.tds2HomePhoneCc,
    req.tds2HomePhoneNo,
    req.tds2MobilePhoneCc,
    req.tds2MobilePhoneNo,
    req.tds2WorkPhoneCc,
    req.tds2WorkPhoneNo,
    req.tds2ShipAddrCity,
    req.tds2ShipAddrCountry,
    req.tds2ShipAddrLine1,
    req.tds2ShipAddrLine2,
    req.tds2ShipAddrLine3,
    req.tds2ShipAddrPostCode,
    req.tds2ShipAddrState,
    req.tds2DeliveryEmailAddress,
    req.tds2DeliveryTimeframe,
    req.tds2GiftCardAmount,
    req.tds2GiftCardCount,
    req.tds2GiftCardCurr,
    req.tds2PreOrderDate,
    req.tds2PreOrderPurchaseInd,
    req.tds2ReorderItemsInd,
    req.tds2ShipInd,
    req.tds2RecurringExpiry,
    req.tds2RecurringFrequency,
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

// API単体実行: カード登録
let apiCardRegisterSuccessCallback: ApiCardRegisterSuccessCallback;

export const register = (req: CardRegisterRequest, successCallback: ApiCardRegisterSuccessCallback, failureCallback: ApiFailureCallback) => {
  apiCardRegisterSuccessCallback = successCallback;
  apiFailureCallback = failureCallback;

  apiModule.registerCard(
    req.authorization,
    req.apiKey,
    req.apiVersion,
    req.customerId,
    req.defaultFlg,
    req.cardNo,
    req.expire,
    req.holderName,
    req.securityCode,
    req.token,
    apiFailure,
    apiCardRegisterSuccess,
  );
};

const apiCardRegisterSuccess = (
  customerId: string,
  id: string,
  defaultFlag: string,
  cardNo: string,
  expire: string,
  holderName: string,
  cardNoHash: string,
  created: string,
  updated: string,
  type: string,
  brand: string,
) => {
  apiCardRegisterSuccessCallback({
    customerId: customerId,
    id: id,
    defaultFlag: defaultFlag,
    cardNo: cardNo,
    expire: expire,
    holderName: holderName,
    cardNoHash: cardNoHash,
    created: created,
    updated: updated,
    type: type,
    brand: brand,
  });
};

// API単体実行: カード更新
let apiCardUpdateSuccessCallback: ApiCardUpdateSuccessCallback;

export const updateCard = (req: CardUpdateRequest, successCallback: ApiCardUpdateSuccessCallback, failureCallback: ApiFailureCallback) => {
  apiCardUpdateSuccessCallback = successCallback;
  apiFailureCallback = failureCallback;

  apiModule.updateCard(
    req.authorization,
    req.apiKey,
    req.apiVersion,
    req.customerId,
    req.cardId,
    req.defaultFlg,
    req.expire,
    req.holderName,
    req.securityCode,
    req.token,
    apiFailure,
    apiCardUpdateSuccess,
  );
};

const apiCardUpdateSuccess = (
  customerId: string,
  id: string,
  defaultFlag: string,
  cardNo: string,
  expire: string,
  holderName: string,
  cardNoHash: string,
  created: string,
  updated: string,
  type: string,
  brand: string,
) => {
  apiCardUpdateSuccessCallback({
    customerId: customerId,
    id: id,
    defaultFlag: defaultFlag,
    cardNo: cardNo,
    expire: expire,
    holderName: holderName,
    cardNoHash: cardNoHash,
    created: created,
    updated: updated,
    type: type,
    brand: brand,
  });
};

// API単体実行: カード一覧取得
let apiCardInfoListSuccessCallback: ApiCardInfoListSuccessCallback;

export const cardInfoList = (req: CardInfoListRequest, successCallback: ApiCardInfoListSuccessCallback, failureCallback: ApiFailureCallback) => {
  apiCardInfoListSuccessCallback = successCallback;
  apiFailureCallback = failureCallback;
  console.log('request');
  apiModule.cardInfoList(req.authorization, req.apiKey, req.apiVersion, req.customerId, apiFailure, apiCardInfoListSuccess);
};

const apiCardInfoListSuccess = cards => {
  console.log(cards);
  console.log('response');
  let list: CardInfo[] = [];
  if (cards !== undefined) {
    for (var card of cards) {
      let v: CardInfo = {
        customerId: card.customerId,
        id: card.id,
        defaultFlag: card.defaltFlag,
        cardNo: card.cardNo,
        expire: card.expire,
        holderName: card.holderName,
        cardNoHash: card.cardNoHash,
        created: card.created,
        updated: card.updated,
        type: card.cardType,
        brand: card.cardBrand,
      };
      list.push(v);
    }
  }
  apiCardInfoListSuccessCallback({ cardInfoList: list });
};

// API単体実行: 3DS2.0認証実行
let apiAuthSuccessCallback: ApiAuthSuccessCallback;

export const authentication = (req: AuthRequest, successCallback: ApiAuthSuccessCallback, failureCallback: ApiFailureCallback) => {
  apiAuthSuccessCallback = successCallback;
  apiFailureCallback = failureCallback;

  apiModule.authentication(req.authorization, req.apiKey, req.apiVersion, req.id, req.param, apiFailure, apiAuthSuccess);
};

const apiAuthSuccess = (tds2TransResult: string, tds2TransResultReason: string, challengeUrl: string) => {
  apiAuthSuccessCallback({
    tds2TransResult: tds2TransResult,
    tds2TransResultReason: tds2TransResultReason,
    challengeUrl: challengeUrl,
  });
};

// API単体実行: 3DS2.0認証結果取得
let apiGetResultCallback: ApiGetResultCallback;

export const getResult = (req: GetResultRequest, successCallback: ApiGetResultCallback, failureCallback: ApiFailureCallback) => {
  apiGetResultSuccessCallback = successCallback;
  apiFailureCallback = failureCallback;

  apiModule.getResult(req.authorization, req.apiKey, req.apiVersion, req.id, apiFailure, apiGetResultSuccess);
};

const apiGetResultSuccess = (tds2TransResult: string, tds2TransResultReason: string, challengeUrl: string) => {
  apiGetResultCallback({
    tds2TransResult: tds2TransResult,
    tds2TransResultReason: tds2TransResultReason,
  });
};

// API単体実行: 認証後決済
let apiPaymentSecureCallback: ApiPaymentSecureCallback;

export const paymentSecure = (req: PaymentSecureRequest, successCallback: ApiPaymentSecureCallback, failureCallback: ApiFailureCallback) => {
  apiPaymentSecureCallback = successCallback;
  apiFailureCallback = failureCallback;

  apiModule.paymentSecure(req.authorization, req.apiKey, req.apiVersion, req.id, req.payType, req.accessId, apiFailure, apiPaymentSecureSuccess);
};

const apiPaymentSecureSuccess = (
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
  //brand: string,
  errorCode: string,
  created: string,
  updated: string,
) => {
  apiPaymentSuccessCallback({
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
    //brand: brand,
    errorCode: errorCode,
    created: created,
    updated: updated,
  });
};

const apiFailure = (status, errors) => {
  console.log(errors);
  let err: Error[] = [];
  if (errors !== undefined) {
    for (var value of errors) {
      let v: Error = { code: value.code, message: value.message };
      err.push(v);
    }
  }

  apiFailureCallback({ status: status, errors: err });
};
