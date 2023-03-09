import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { SafeAreaView, findNodeHandle, PixelRatio, ScrollView, useWindowDimensions, NativeSyntheticEvent, NativeModules, Text, View } from 'react-native';
import { logApiPaymentResponse, logApiFailureResponse } from './Log';

import { FincodeVerticalView, FincodePaymentResponse, FincodeErrorResponse, BEARER, initPayment, payment, PaymentResponse, ErrorResponse } from './fincode_component/Fincode';

// **************************
// const
// **************************

const sample_apiKey = 'p_test_OTVhZDdkZTUtYTMzMy00YWU1LTk2YjktMzA5NjA0MjBmMDI3YzYyNzYyOTEtYTk3My00ZTFjLWJiMTktNTc5NzgxNzczYjgwc18yMjA1MTkwMDkxNA';
const sample_apiVersion = '';
const sample_customerId = 'User001';
const sample_payType = 'Card';
const sample_accessId = 'a_cXdVlyuOS_W8Sze3fJd4Xw';
const sample_id = 'o_1A-Scp0DTLq51qdNv1x_zg';
const sample_token = '';
const sample_cardNo = '5100000000005007';
const sample_expire = '2612';
const sample_cardId = 'id';
const sample_method = '1';
const sample_payTimes = '2';
const sample_securityCode = '1111';
const sample_holderName = 'TARO YAMADA';

const sample_tds2RetUrl = 'https://webhook.site/84979fb6-4892-4b7f-87fd-a9f35b1125bf';
const sample_tds2ChAccChange = '20230308';
const sample_tds2ChAccDate = '20230308';
const sample_tds2ChAccPwChange = '20230308';
const sample_tds2NbPurchaseAccount = '10';
const sample_tds2PaymentAccAge = '20230308';
const sample_tds2ProvisionAttemptsDay = '1';
const sample_tds2ShipAddressUsage = '20230308';
const sample_tds2ShipNameInd = '01';
const sample_tds2SuspiciousAccActivity = '01';
const sample_tds2TxnActivityDay = '1';
const sample_tds2TxnActivityYear = '1';
const sample_tds2ThreeDsReqAuthData = '';
const sample_tds2ThreeDsReqAuthMethod = '';
const sample_tds2ThreeDsReqAuthTimestamp = '';
const sample_tds2AddrMatch = 'Y';
const sample_tds2BillAddrCity = 'tds2BillAddrCity';
const sample_tds2BillAddrCountry = '392';
const sample_tds2BillAddrLine1 = 'tds2BillAddrLine1';
const sample_tds2BillAddrLine2 = 'tds2BillAddrLine2';
const sample_tds2BillAddrLine3 = 'tds2BillAddrLine3';
const sample_tds2BillAddrPostCode = '1530011';
const sample_tds2BillAddrState = '11';
const sample_tds2Email = 'tds2Email@gmo-pg.com';
const sample_tds2HomePhoneCc = '81';
const sample_tds2HomePhoneNo = '08023420784';
const sample_tds2MobilePhoneCc = '';
const sample_tds2MobilePhoneNo = '';
const sample_tds2WorkPhoneCc = '';
const sample_tds2WorkPhoneNo = '';
const sample_tds2ShipAddrCity = '';
const sample_tds2ShipAddrCountry = '392';
const sample_tds2ShipAddrLine1 = '';
const sample_tds2ShipAddrLine2 = '';
const sample_tds2ShipAddrLine3 = '';
const sample_tds2ShipAddrPostCode = '1530011';
const sample_tds2ShipAddrState = '11';
const sample_tds2DeliveryEmailAddress = '';
const sample_tds2DeliveryTimeframe = '';
const sample_tds2GiftCardAmount = '';
const sample_tds2GiftCardCount = '';
const sample_tds2GiftCardCurr = '';
const sample_tds2PreOrderDate = '';
const sample_tds2PreOrderPurchaseInd = '';
const sample_tds2ReorderItemsInd = '';
const sample_tds2ShipInd = '';
const sample_tds2RecurringExpiry = '';
const sample_tds2RecurringFrequency = '';

// **************************
// component
// **************************
const ApiPayment = () => {
  useEffect(() => {
    // 決済実行API(3DSパラメータ有)を単体で呼び出す
    // 補足：
    //   動作確認の容易さからuseEffect内で実行しているが、加盟店様の任意のタイミングで実行してください
    console.log('■■■ 決済実行 API >>>>>');
    payment(
      {
        authorization: BEARER,
        apiKey: sample_apiKey,
        apiVersion: sample_apiVersion,
        customerId: sample_customerId,
        payType: sample_payType,
        accessId: sample_accessId,
        id: sample_id,
        token: sample_token,
        cardNo: sample_cardNo,
        expire: sample_expire,
        cardId: sample_cardId,
        method: sample_method,
        payTimes: sample_payTimes,
        securityCode: sample_securityCode,
        holderName: sample_holderName,
        tds2RetUrl: sample_tds2RetUrl,
        tds2ChAccChange: sample_tds2ChAccChange,
        tds2ChAccDate: sample_tds2ChAccDate,
        tds2ChAccPwChange: sample_tds2ChAccPwChange,
        tds2NbPurchaseAccount: sample_tds2NbPurchaseAccount,
        tds2PaymentAccAge: sample_tds2PaymentAccAge,
        tds2ProvisionAttemptsDay: sample_tds2ProvisionAttemptsDay,
        tds2ShipAddressUsage: sample_tds2ShipAddressUsage,
        tds2ShipNameInd: sample_tds2ShipNameInd,
        tds2SuspiciousAccActivity: sample_tds2SuspiciousAccActivity,
        tds2TxnActivityDay: sample_tds2TxnActivityDay,
        tds2TxnActivityYear: sample_tds2TxnActivityYear,
        tds2ThreeDsReqAuthData: sample_tds2ThreeDsReqAuthData,
        tds2ThreeDsReqAuthMethod: sample_tds2ThreeDsReqAuthMethod,
        tds2ThreeDsReqAuthTimestamp: sample_tds2ThreeDsReqAuthTimestamp,
        tds2AddrMatch: sample_tds2AddrMatch,
        tds2BillAddrCity: sample_tds2BillAddrCity,
        tds2BillAddrCountry: sample_tds2BillAddrCountry,
        tds2BillAddrLine1: sample_tds2BillAddrLine1,
        tds2BillAddrLine2: sample_tds2BillAddrLine2,
        tds2BillAddrLine3: sample_tds2BillAddrLine3,
        tds2BillAddrPostCode: sample_tds2BillAddrPostCode,
        tds2BillAddrState: sample_tds2BillAddrState,
        tds2Email: sample_tds2Email,
        tds2HomePhoneCc: sample_tds2HomePhoneCc,
        tds2HomePhoneNo: sample_tds2HomePhoneNo,
        tds2MobilePhoneCc: sample_tds2MobilePhoneCc,
        tds2MobilePhoneNo: sample_tds2MobilePhoneNo,
        tds2WorkPhoneCc: sample_tds2WorkPhoneCc,
        tds2WorkPhoneNo: sample_tds2WorkPhoneNo,
        tds2ShipAddrCity: sample_tds2ShipAddrCity,
        tds2ShipAddrCountry: sample_tds2ShipAddrCountry,
        tds2ShipAddrLine1: sample_tds2ShipAddrLine1,
        tds2ShipAddrLine2: sample_tds2ShipAddrLine2,
        tds2ShipAddrLine3: sample_tds2ShipAddrLine3,
        tds2ShipAddrPostCode: sample_tds2ShipAddrPostCode,
        tds2ShipAddrState: sample_tds2ShipAddrState,
        tds2DeliveryEmailAddress: sample_tds2DeliveryEmailAddress,
        tds2DeliveryTimeframe: sample_tds2DeliveryTimeframe,
        tds2GiftCardAmount: sample_tds2GiftCardAmount,
        tds2GiftCardCount: sample_tds2GiftCardCount,
        tds2GiftCardCurr: sample_tds2GiftCardCurr,
        tds2PreOrderDate: sample_tds2PreOrderDate,
        tds2PreOrderPurchaseInd: sample_tds2PreOrderPurchaseInd,
        tds2ReorderItemsInd: sample_tds2ReorderItemsInd,
        tds2ShipInd: sample_tds2ShipInd,
        tds2RecurringExpiry: sample_tds2RecurringExpiry,
        tds2RecurringFrequency: sample_tds2RecurringFrequency,
      },
      successCallback,
      failureCallback,
    );
  }, []);

  const successCallback = (response: PaymentResponse) => {
    console.log('■■■ コールバック :  成功');
    logApiPaymentResponse(response);
  };

  const failureCallback = (response: ErrorResponse) => {
    console.log('■■■ コールバック :  失敗');
    logApiFailureResponse(response);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View>
          <Text>決済実行API : 単体で実行</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ApiPayment;
