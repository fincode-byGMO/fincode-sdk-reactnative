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
      paymentSuccessCallback: (e: NativeSyntheticEvent<FincodePaymentResponse>) => void;
      paymentFailureCallback: (e: NativeSyntheticEvent<FincodeErrorResponse>) => void;
    }
>;

export type FincodeCardRegisterViewProps = Readonly<
  ViewProps &
    FincodeOptProps & {
      cardRegisterSuccessCallback: (e: NativeSyntheticEvent<FincodeCardRegisterResponse>) => void;
      paymentFailureCallback: (e: NativeSyntheticEvent<FincodeErrorResponse>) => void;
    }
>;

export type FincodeCardUpdateViewProps = Readonly<
  ViewProps &
    FincodeOptProps & {
      cardUpdateSuccessCallback: (e: NativeSyntheticEvent<FincodeCardUpdateResponse>) => void;
      paymentFailureCallback: (e: NativeSyntheticEvent<FincodeErrorResponse>) => void;
    }
>;

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
