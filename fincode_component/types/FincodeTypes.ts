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
  token: string;
  cardNo: string;
  expire: string;
  cardId: string;
  method: string;
  payTimes: string;
  securityCode: string;
  holderName: string;
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
export type ApiCardRegisterSuccessCallback = (response: CardRegisterResponse) => void;
export type ApiCardUpdateSuccessCallback = (response: CardUpdateResponse) => void;
export type ApiCardInfoListSuccessCallback = (response: CardInfoListResponse) => void;
export type ApiAuthSuccessCallback = (response: AuthResponse) => void;
export type ApiGetResultSuccessCallback = (response: GetResultResponse) => void;
export type ApiPaymentSecureSuccessCallback = (response: PaymentSecureResponse) => void;
export type ApiFailureCallback = (error: ErrorResponse) => void;
