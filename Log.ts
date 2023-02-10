import { FincodePaymentResponse, FincodeCardRegisterResponse, FincodeCardUpdateResponse, FincodeErrorResponse } from './fincode_component/types/FincodeTypes';

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

export const logFincodeErrorResponse = (res: FincodePaymentResponse) => {
  console.log('■■■ failureCallback status code:  ' + res.statusCode);
  for (const value of res.errors) {
    console.log('■■■ failureCallback error code:  ' + value.code);
    console.log('■■■ failureCallback error code:  ' + value.message);
  }
};
