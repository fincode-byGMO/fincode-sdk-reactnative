import { ViewProps, NativeSyntheticEvent } from 'react-native';

export type FincodePaymentResponse = {
  acs: string;
  shopId: string;
  orderId: string;
  payType: string;
  status: string;
  accessId: string;
  processDate: string;
  jobCode: string;
  itemCode: string;
  amount: int;
  tax: int;
  totalAmount: int;
  customerGroupId: string;
  customerId: string;
  cardNo: string;
  cardId: string;
  expire: string;
  holderName: string;
  cardNoHash: string;
  method: string;
  payTimes: int;
  forward: string;
  issuer: string;
  transactionId: string;
  approve: string;
  authMaxDate: string;
  clientField1: string;
  clientField2: string;
  clientField3: string;
  tdsType: string;
  tds2Type: string;
  tds2RetUrl: string;
  tds2Status: string;
  merchantName: string;
  sendUrl: string;
  subscriptionId: string;
  bulkPaymentId: string;
  cardBrand: string;
  errorCode: string;
  acsUrl: string;
  paReq: string;
  created: string;
  updated: string;
};

export type FincodeCardRegisterResponse = {
  customerId: string;
  cardId: string;
  defaltFlag: string;
  cardNo: string;
  expire: string;
  holderName: string;
  cardNoHash: string;
  created: string;
  updated: string;
  cardType: string;
  cardBrand: string;
};

export type FincodeCardUpdateResponse = {
  customerId: string;
  cardId: string;
  defaltFlag: string;
  cardNo: string;
  expire: string;
  holderName: string;
  cardNoHash: string;
  created: string;
  updated: string;
  cardType: string;
  cardBrand: string;
};

export type FincodeErrorResponse = {
  statusCode: string;
  errors: [FincodeErrorInfo];
};

export type FincodeErrorInfo = {
  code: string;
  message: string;
};

// export type FincodeStyleProps = Readonly<
//   {
//     style: ViewStyle;
//   } & ViewProps
// >;

export type FincodeOptProps = Readonly<{
  headingHidden: boolean;
  dynamicLogDisplay: boolean;
  holderNameHidden: boolean;
  payTimesHidden: boolean;
}>;

export type FincodePaymentViewProps = Readonly<
  ViewProps &
    FincodeOptProps & {
      onPaymentSuccessCallback: (e: NativeSyntheticEvent<FincodePaymentResponse>) => void;
      onFailureCallback: (e: NativeSyntheticEvent<FincodeErrorResponse>) => void;
    }
>;

export type FincodeCardRegisterViewProps = Readonly<
  ViewProps &
    FincodeOptProps & {
      onCardRegisterSuccessCallback: (e: NativeSyntheticEvent<FincodeCardRegisterResponse>) => void;
      onFailureCallback: (e: NativeSyntheticEvent<FincodeErrorResponse>) => void;
    }
>;

export type FincodeCardUpdateViewProps = Readonly<
  ViewProps &
    FincodeOptProps & {
      onCardUpdateSuccessCallback: (e: NativeSyntheticEvent<FincodeCardUpdateResponse>) => void;
      onFailureCallback: (e: NativeSyntheticEvent<FincodeErrorResponse>) => void;
    }
>;

export type PaymentRequest = ConfigPayment & {
  token: String;
  cardNo: String;
  expire: String;
  customerId: String;
  cardId: String;
  method: String;
  payTimes: String;
  securityCode: String;
  holderName: String;
  tds2RetUrl: String;
  tds2ChAccChange: String;
  tds2ChAccDate: String;
  tds2ChAccPwChange: String;
  tds2NbPurchaseAccount: String;
  tds2PaymentAccAge: String;
  tds2ProvisionAttemptsDay: String;
  tds2ShipAddressUsage: String;
  tds2ShipNameInd: String;
  tds2SuspiciousAccActivity: String;
  tds2TxnActivityDay: String;
  tds2TxnActivityYear: String;
  tds2ThreeDsReqAuthData: String;
  tds2ThreeDsReqAuthMethod: String;
  tds2ThreeDsReqAuthTimestamp: String;
  tds2AddrMatch: String;
  tds2BillAddrCity: String;
  tds2BillAddrCountry: String;
  tds2BillAddrLine1: String;
  tds2BillAddrLine2: String;
  tds2BillAddrLine3: String;
  tds2BillAddrPostCode: String;
  tds2BillAddrState: String;
  tds2Email: String;
  tds2HomePhoneCc: String;
  tds2HomePhoneNo: String;
  tds2MobilePhoneCc: String;
  tds2MobilePhoneNo: String;
  tds2WorkPhoneCc: String;
  tds2WorkPhoneNo: String;
  tds2ShipAddrCity: String;
  tds2ShipAddrCountry: String;
  tds2ShipAddrLine1: String;
  tds2ShipAddrLine2: String;
  tds2ShipAddrLine3: String;
  tds2ShipAddrPostCode: String;
  tds2ShipAddrState: String;
  tds2DeliveryEmailAddress: String;
  tds2DeliveryTimeframe: String;
  tds2GiftCardAmount: String;
  tds2GiftCardCount: String;
  tds2GiftCardCurr: String;
  tds2PreOrderDate: String;
  tds2PreOrderPurchaseInd: String;
  tds2ReorderItemsInd: String;
  tds2ShipInd: String;
  tds2RecurringExpiry: String;
  tds2RecurringFrequency: String;
};

export type PaymentResponse = {
  acs: string;
  shopId: string;
  id: string;
  payType: string;
  status: string;
  accessId: string;
  processDate: string;
  jobCode: string;
  itemCode: string;
  amount: string;
  tax: string;
  totalAmount: string;
  customerGroupId: string;
  customerId: string;
  cardNo: string;
  cardId: string;
  expire: string;
  holderName: string;
  cardNoHash: string;
  method: string;
  payTimes: string;
  forward: string;
  issuer: string;
  transactionId: string;
  approve: string;
  authMaxDate: string;
  clientField1: string;
  clientField2: string;
  clientField3: string;
  tdsType: string;
  tds2Type: string;
  tds2RetUrl: string;
  tds2Status: string;
  merchantName: string;
  sendUrl: string;
  subscriptionId: string;
  bulkPaymentId: string;
  brand: string;
  errorCode: string;
  acsUrl: string;
  paReq: string;
  created: string;
  updated: string;
};

export type KonbiniRequest = ConfigPayment & {
  paymentTermDay: String;
  deviceName: String;
  winWidth: String;
  winHeight: String;
  pixelRatio: String;
  winSizeType: String;
};

export type KonbiniResponse = {
  shopId: String;
  id: String;
  payType: String;
  status: String;
  accessId: String;
  processDate: String;
  amount: String;
  tax: String;
  totalAmount: String;
  paymentTermDay: String;
  paymentTerm: String;
  deviceName: String;
  osVersion: String;
  winWidth: String;
  winHeight: String;
  xdpi: String;
  ydpi: String;
  clientField1: String;
  clientField2: String;
  clientField3: String;
  result: String;
  orderSerial: String;
  invoiceId: String;
  barcode: String;
  barcodeFormat: String;
  barcodeWidth: String;
  barcodeHeight: String;
  paymentDate: String;
  konbiniCode: String;
  konbiniStoreCode: String;
  errorCode: String;
  overpaymentFlag: String;
  cancelOverpaymentFlag: String;
  created: String;
  updated: String;
};

export type PaypayRequest = ConfigPayment & {
  redirectUrl: String;
  redirectType: String;
  userAgent: String;
};

export type PaypayResponse = {
  shopId: String;
  id: String;
  payType: String;
  status: String;
  accessId: String;
  processDate: String;
  jobCode: String;
  amount: String;
  tax: String;
  totalAmount: String;
  customerId: String;
  codeExpiryDate: String;
  authMaxDate: String;
  orderDescription: String;
  captureDescription: String;
  updateDescription: String;
  cancelDescription: String;
  redirectUrl: String;
  redirectType: String;
  clientField1: String;
  clientField2: String;
  clientField3: String;
  storeId: String;
  codeId: String;
  codeUrl: String;
  paymentId: String;
  paypayResultCode: String;
  merchantPaymentId: String;
  merchantCaptureId: String;
  merchantUpdateId: String;
  merchantRevertId: String;
  merchantRefundId: String;
  paymentDate: String;
  errorCode: String;
  created: String;
  updated: String;
};

export type PaymentSecureRequest = {
  payType: string;
  accessId: string;
  id: string;
};

export type PaymentSecureResponse = {
  shopId: string;
  id: string;
  payType: string;
  status: string;
  accessId: string;
  processDate: string;
  jobCode: string;
  itemCode: string;
  amount: string;
  tax: string;
  totalAmount: string;
  customerGroupId: string;
  customerId: string;
  cardNo: string;
  cardId: string;
  expire: string;
  holderName: string;
  cardNoHash: string;
  method: string;
  payTimes: string;
  forward: string;
  issuer: string;
  transactionId: string;
  approve: string;
  authMaxDate: string;
  clientField1: string;
  clientField2: string;
  clientField3: string;
  tdsType: string;
  tds2Type: string;
  tds2RetUrl: string;
  tds2Status: string;
  merchantName: string;
  sendUrl: string;
  subscriptionId: string;
  //brand: string;
  errorCode: string;
  created: string;
  updated: string;
};

export type CardRegisterRequest = ConfigCardRegister & {
  cardNo: string;
  expire: string;
  holderName: string;
  securityCode: string;
  token: string;
};

export type CardRegisterResponse = {
  customerId: string;
  id: string;
  defaultFlag: string;
  cardNo: string;
  expire: string;
  holderName: string;
  cardNoHash: string;
  created: string;
  updated: string;
  type: string;
  brand: string;
};

export type CardUpdateRequest = ConfigCardUpdate & {
  expire: string;
  holderName: string;
  securityCode: string;
  token: string;
};

export type CardUpdateResponse = {
  customerId: string;
  id: string;
  defaultFlag: string;
  cardNo: string;
  expire: string;
  holderName: string;
  cardNoHash: string;
  created: string;
  updated: string;
  type: string;
  brand: string;
};

export type CardInfoListRequest = {
  authorization: string;
  apiKey: string;
  apiVersion: string;
  customerId: string;
};

export type CardInfoListResponse = {
  cardInfoList: CardInfo[];
};

export type CardInfo = {
  customerId: string;
  id: string;
  defaultFlag: string;
  cardNo: string;
  expire: string;
  holderName: string;
  cardNoHash: string;
  created: string;
  updated: string;
  type: string;
  brand: string;
};

export type AuthRequest = {
  authorization: string;
  apiKey: string;
  apiVersion: string;
  id: string;
  param: string;
};

export type AuthResponse = {
  tds2TransResult: string;
  tds2TransResultReason: string;
  challengeUrl: string;
};

export type GetResultRequest = {
  authorization: string;
  apiKey: string;
  apiVersion: string;
  id: string;
};

export type GetResultResponse = {
  tds2TransResult: string;
  tds2TransResultReason: string;
};

export type ErrorResponse = {
  status: string;
  errors: Error[];
};

export type Error = {
  code: string;
  message: string;
};

export type ConfigPayment = {
  authorization: string;
  apiKey: string;
  apiVersion: string;
  customerId: string;
  payType: string;
  accessId: string;
  id: string;
};

export type ConfigCardRegister = {
  authorization: string;
  apiKey: string;
  apiVersion: string;
  customerId: string;
  defaultFlg: string;
};

export type ConfigCardUpdate = {
  authorization: string;
  apiKey: string;
  apiVersion: string;
  customerId: string;
  defaultFlg: string;
  cardId: string;
};

export type ApiPaymentSuccessCallback = (response: PaymentResponse) => void;
export type ApiKonbiniSuccessCallback = (response: KonbiniResponse) => void;
export type ApiPaypaySuccessCallback = (response: PaypayResponse) => void;
export type ApiCardRegisterSuccessCallback = (response: CardRegisterResponse) => void;
export type ApiCardUpdateSuccessCallback = (response: CardUpdateResponse) => void;
export type ApiCardInfoListSuccessCallback = (response: CardInfoListResponse) => void;
export type ApiAuthSuccessCallback = (response: AuthResponse) => void;
export type ApiGetResultSuccessCallback = (response: GetResultResponse) => void;
export type ApiPaymentSecureSuccessCallback = (response: PaymentSecureResponse) => void;
export type ApiFailureCallback = (error: ErrorResponse) => void;
