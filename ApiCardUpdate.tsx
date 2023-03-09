import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { SafeAreaView, findNodeHandle, PixelRatio, ScrollView, useWindowDimensions, NativeSyntheticEvent, NativeModules, Text, View } from 'react-native';
import { logApiRegisterCardResponse, logApiFailureResponse } from './Log';

import { CardUpdateResponse, FincodeErrorResponse, BEARER, updateCard, ErrorResponse, CardUpdateRequest } from './fincode_component/Fincode';

// **************************
// const
// **************************

const sample_apiKey = 'p_test_NjRhNGFhYTctZDQ1YS00MzYxLTkzOTgtOWZlMjY0ODhhNWRlMGY0ZDNlMjUtMzg1Yi00ZTNlLTgyNzQtMTQ2ZDhhODAxNGVhc18yMzAyMDg2OTU1Mw';
const sample_apiVersion = '';
const sample_customerId = 'user001';
const sample_cardId = 'cs_XzZqEMyBRfK7ZGmnb785EQ';
const sample_defaultFlag = '1';
const sample_expire = '2612';
const sample_holderName = 'TARO YAMADA';
const sample_securityCode = '1111';
const sample_token = '';

// **************************
// component
// **************************
const ApiCardUpdate = () => {
  useEffect(() => {
    // カード更新APIを単体で呼び出す
    // 補足：
    //   動作確認の容易さからuseEffect内で実行しているが、加盟店様の任意のタイミングで実行してください
    console.log('■■■ カード更新 API >>>>>');
    updateCard(
      {
        authorization: BEARER,
        apiKey: sample_apiKey,
        apiVersion: sample_apiVersion,
        customerId: sample_customerId,
        cardId: sample_cardId,
        defaultFlg: sample_defaultFlag,
        expire: sample_expire,
        holderName: sample_holderName,
        securityCode: sample_securityCode,
        token: sample_token,
      },
      successCallback,
      failureCallback,
    );
  }, []);

  const successCallback = (response: CardUpdateResponse) => {
    console.log('■■■ コールバック :  成功');
    logApiRegisterCardResponse(response);
  };

  const failureCallback = (response: ErrorResponse) => {
    console.log('■■■ コールバック :  失敗');
    logApiFailureResponse(response);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View>
          <Text>カード更新API : 単体で実行</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ApiCardUpdate;
