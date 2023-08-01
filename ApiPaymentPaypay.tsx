import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { SafeAreaView, findNodeHandle, PixelRatio, ScrollView, useWindowDimensions, NativeSyntheticEvent, NativeModules, Text, View } from 'react-native';
import { logApiPaymentResponse, logApiFailureResponse } from './Log';

import { FincodeVerticalView, FincodePaymentResponse, FincodeErrorResponse, BEARER, paypay, ErrorResponse, PaypayResponse } from './fincode_component/Fincode';

// **************************
// const
// **************************

const sample_apiKey = 'p_test_MTE1NjYzZDAtNWU0Ny00ZGM5LTgzNTEtMmYxMTY5NDI0ZTBhNzgxMDhiMDYtZThlMy00YzM1LWI1ZmQtNTczMTRjZDk3NmY2c18yMzA1MjM4NzUzNg';
const sample_apiVersion = '';
const sample_customerId = 'User001';
const sample_payType = 'Paypay';
const sample_accessId = 'a_8nQ043vWQBa7ysQgVej3tQ';
const sample_id = 'o_ILGvc-FlTAqhim4f5H9Xqg';
const sample_redirectUrl = 'https://webhook.site/3ee6e787-064e-4758-ae36-a9fc93930794';
const sample_redirectType = '2';
const sample_userAgent = 'safary';

// **************************
// component
// **************************
const ApiPaymentPaypay = () => {
  useEffect(() => {
    // 決済実行APIを単体で呼び出す
    // 補足：
    //   動作確認の容易さからuseEffect内で実行しているが、加盟店様の任意のタイミングで実行してください
    console.log('■■■ 決済実行(PayPay) API >>>>>');
    paypay(
      {
        authorization: BEARER,
        apiKey: sample_apiKey,
        apiVersion: sample_apiVersion,
        payType: sample_payType,
        accessId: sample_accessId,
        id: sample_id,
        customerId: sample_customerId,
        redirectUrl: sample_redirectUrl,
        redirectType: sample_redirectType,
        userAgent: sample_userAgent,
      },
      successCallback,
      failureCallback,
    );
  }, []);

  const successCallback = (response: PaypayResponse) => {
    console.log('■■■ コールバック :  成功');
    console.log(response);
  };

  const failureCallback = (response: ErrorResponse) => {
    console.log('■■■ コールバック :  失敗');
    logApiFailureResponse(response);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View>
          <Text>決済実行API(PayPay) : 単体で実行</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ApiPaymentPaypay;
