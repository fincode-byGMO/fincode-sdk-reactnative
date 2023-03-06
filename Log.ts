import {
  FincodePaymentResponse,
  FincodeCardRegisterResponse,
  FincodeCardUpdateResponse,
  FincodeErrorResponse,
  FincodeErrorInfo,
  PaymentResponse,
  CardRegisterResponse,
  CardInfoListResponse,
} from './fincode_component/types/FincodeTypes';

export const logApiFailureResponse = (response: PaymentResponse) => {
  console.log('■■■ status :  ' + response.status);
  for (const error of response.errors) {
    console.log('■■■ code :  ' + error.code);
    console.log('■■■ message :  ' + error.message);
  }
};

export const logApiPaymentResponse = (response: PaymentResponse) => {
  console.log('■■■  acs  ' + response.acs);
  console.log('■■■  shopId  ' + response.shopId);
  console.log('■■■  id  ' + response.id);
  console.log('■■■  payType  ' + response.payType);
  console.log('■■■  status  ' + response.status);
  console.log('■■■  accessId  ' + response.accessId);
  console.log('■■■  processDate  ' + response.processDate);
  console.log('■■■  jobCode  ' + response.jobCode);
  console.log('■■■  itemCode  ' + response.itemCode);
  console.log('■■■  amount  ' + response.amount);
  console.log('■■■  tax  ' + response.tax);
  console.log('■■■  totalAmount  ' + response.totalAmount);
  console.log('■■■  customerGroupId  ' + response.customerGroupId);
  console.log('■■■  customerId  ' + response.customerId);
  console.log('■■■  cardNo  ' + response.cardNo);
  console.log('■■■  cardId  ' + response.cardId);
  console.log('■■■  expire  ' + response.expire);
  console.log('■■■  holderName  ' + response.holderName);
  console.log('■■■  cardNoHash  ' + response.cardNoHash);
  console.log('■■■  method  ' + response.method);
  console.log('■■■  payTimes  ' + response.payTimes);
  console.log('■■■  forward  ' + response.forward);
  console.log('■■■  issuer  ' + response.issuer);
  console.log('■■■  transactionId  ' + response.transactionId);
  console.log('■■■  approve  ' + response.approve);
  console.log('■■■  authMaxDate  ' + response.authMaxDate);
  console.log('■■■  clientField1  ' + response.clientField1);
  console.log('■■■  clientField2  ' + response.clientField2);
  console.log('■■■  clientField3  ' + response.clientField3);
  console.log('■■■  tdsType  ' + response.tdsType);
  console.log('■■■  tds2Type  ' + response.tds2Type);
  console.log('■■■  tds2RetUrl  ' + response.tds2RetUrl);
  console.log('■■■  tds2Status  ' + response.tds2Status);
  console.log('■■■  merchantName  ' + response.merchantName);
  console.log('■■■  sendUrl  ' + response.sendUrl);
  console.log('■■■  subscriptionId  ' + response.subscriptionId);
  console.log('■■■  bulkPaymentId  ' + response.bulkPaymentId);
  console.log('■■■  brand  ' + response.brand);
  console.log('■■■  errorCode  ' + response.errorCode);
  console.log('■■■  acsUrl  ' + response.acsUrl);
  console.log('■■■  paReq  ' + response.paReq);
  console.log('■■■  created  ' + response.created);
  console.log('■■■  updated  ' + response.updated);
};

export const logApiCardInfoListResponse = (response: CardInfoListResponse) => {
  let num = 1;
  for (const card of response.cardInfoList) {
    console.log('■■■  カード  ' + num + ' 枚目');
    console.log('■■■  customerId  ' + card.customerId);
    console.log('■■■  id  ' + card.id);
    console.log('■■■  defaultFlag  ' + card.defaultFlag);
    console.log('■■■  cardNo  ' + card.cardNo);
    console.log('■■■  expire  ' + card.expire);
    console.log('■■■  holderName  ' + card.holderName);
    console.log('■■■  cardNoHash  ' + card.cardNoHash);
    console.log('■■■  holderName  ' + card.holderName);
    console.log('■■■  created  ' + card.created);
    console.log('■■■  updated  ' + card.updated);
    console.log('■■■  type  ' + card.type);
    console.log('■■■  brand  ' + card.brand);
    num++;
  }
};

export const logApiRegisterCardResponse = (response: CardRegisterResponse) => {
  console.log('■■■  customerId  ' + response.customerId);
  console.log('■■■  id  ' + response.id);
  console.log('■■■  defaultFlag  ' + response.defaultFlag);
  console.log('■■■  cardNo  ' + response.cardNo);
  console.log('■■■  expire  ' + response.expire);
  console.log('■■■  holderName  ' + response.holderName);
  console.log('■■■  cardNoHash  ' + response.cardNoHash);
  console.log('■■■  created  ' + response.created);
  console.log('■■■  updated  ' + response.updated);
  console.log('■■■  type  ' + response.type);
  console.log('■■■  brand  ' + response.brand);
};

export const logPaymentResponse = (res: FincodePaymentResponse) => {
  console.log('■■■ successCallback  acs  ' + res.acs);
  console.log('■■■ successCallback  shopId  ' + res.shopId);
  console.log('■■■ successCallback  orderId  ' + res.orderId);
  console.log('■■■ successCallback  payType  ' + res.payType);
  console.log('■■■ successCallback  status  ' + res.status);
  console.log('■■■ successCallback  accessId  ' + res.accessId);
  console.log('■■■ successCallback  processDate  ' + res.processDate);
  console.log('■■■ successCallback  jobCode  ' + res.jobCode);
  console.log('■■■ successCallback  itemCode  ' + res.itemCode);
  console.log('■■■ successCallback  amount  ' + res.amount);
  console.log('■■■ successCallback  tax  ' + res.tax);
  console.log('■■■ successCallback  totalAmount  ' + res.totalAmount);
  console.log('■■■ successCallback  customerGroupId  ' + res.customerGroupId);
  console.log('■■■ successCallback  customerId  ' + res.customerId);
  console.log('■■■ successCallback  cardNo  ' + res.cardNo);
  console.log('■■■ successCallback  cardId  ' + res.cardId);
  console.log('■■■ successCallback  expire  ' + res.expire);
  console.log('■■■ successCallback  holderName  ' + res.holderName);
  console.log('■■■ successCallback  cardNoHash  ' + res.cardNoHash);
  console.log('■■■ successCallback  method  ' + res.method);
  console.log('■■■ successCallback  payTimes  ' + res.payTimes);
  console.log('■■■ successCallback  forward  ' + res.forward);
  console.log('■■■ successCallback  issuer  ' + res.issuer);
  console.log('■■■ successCallback  transactionId  ' + res.transactionId);
  console.log('■■■ successCallback  approve  ' + res.approve);
  console.log('■■■ successCallback  authMaxDate  ' + res.authMaxDate);
  console.log('■■■ successCallback  clientField1  ' + res.clientField1);
  console.log('■■■ successCallback  clientField2  ' + res.clientField2);
  console.log('■■■ successCallback  clientField3  ' + res.clientField3);
  console.log('■■■ successCallback  tdsType  ' + res.tdsType);
  console.log('■■■ successCallback  tds2Type  ' + res.tds2Type);
  console.log('■■■ successCallback  tds2RetUrl  ' + res.tds2RetUrl);
  console.log('■■■ successCallback  tds2Status  ' + res.tds2Status);
  console.log('■■■ successCallback  merchantName  ' + res.merchantName);
  console.log('■■■ successCallback  sendUrl  ' + res.sendUrl);
  console.log('■■■ successCallback  subscriptionId  ' + res.subscriptionId);
  console.log('■■■ successCallback  bulkPaymentId  ' + res.bulkPaymentId);
  console.log('■■■ successCallback  cardBrand  ' + res.cardBrand);
  console.log('■■■ successCallback  errorCode  ' + res.errorCode);
  console.log('■■■ successCallback  acsUrl  ' + res.acsUrl);
  console.log('■■■ successCallback  paReq  ' + res.paReq);
  console.log('■■■ successCallback  created  ' + res.created);
  console.log('■■■ successCallback  updated  ' + res.updated);
};

export const logFincodeCardRegisterResponse = (res: FincodeCardRegisterResponse) => {
  console.log('■■■ successCallback  customerId  ' + res.customerId);
  console.log('■■■ successCallback  cardId  ' + res.cardId);
  console.log('■■■ successCallback  defaltFlag  ' + res.defaltFlag);
  console.log('■■■ successCallback  cardNo  ' + res.cardNo);
  console.log('■■■ successCallback  expire  ' + res.expire);
  console.log('■■■ successCallback  holderName  ' + res.holderName);
  console.log('■■■ successCallback  cardNoHash  ' + res.cardNoHash);
  console.log('■■■ successCallback  created  ' + res.created);
  console.log('■■■ successCallback  updated  ' + res.updated);
  console.log('■■■ successCallback  cardType  ' + res.cardType);
  console.log('■■■ successCallback  cardBrand  ' + res.cardBrand);
};

export const logFincodeCardUpdateResponse = (res: FincodeCardUpdateResponse) => {
  console.log('■■■ successCallback  customerId  ' + res.customerId);
  console.log('■■■ successCallback  cardId  ' + res.cardId);
  console.log('■■■ successCallback  defaltFlag  ' + res.defaltFlag);
  console.log('■■■ successCallback  cardNo  ' + res.cardNo);
  console.log('■■■ successCallback  expire  ' + res.expire);
  console.log('■■■ successCallback  holderName  ' + res.holderName);
  console.log('■■■ successCallback  cardNoHash  ' + res.cardNoHash);
  console.log('■■■ successCallback  created  ' + res.created);
  console.log('■■■ successCallback  updated  ' + res.updated);
  console.log('■■■ successCallback  cardType  ' + res.cardType);
  console.log('■■■ successCallback  cardBrand  ' + res.cardBrand);
};

export const logFincodeErrorResponse = (res: FincodeErrorResponse) => {
  console.log('■■■ failureCallback status code:  ' + res.statusCode);
  for (const value of res.errors) {
    console.log('■■■ failureCallback error code:  ' + value.code);
    console.log('■■■ failureCallback error code:  ' + value.message);
  }
};
