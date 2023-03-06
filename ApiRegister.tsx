import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { SafeAreaView, findNodeHandle, PixelRatio, ScrollView, useWindowDimensions, NativeSyntheticEvent, NativeModules, Text, View } from 'react-native';
import { logApiRegisterCardResponse, logApiFailureResponse } from './Log';

import { FincodeVerticalView, CardRegisterResponse, FincodeErrorResponse, BEARER, register, ErrorResponse, CardRegisterRequest } from './fincode_component/Fincode';

// **************************
// const
// **************************

const sample_apiKey = 'p_test_OTVhZDdkZTUtYTMzMy00YWU1LTk2YjktMzA5NjA0MjBmMDI3YzYyNzYyOTEtYTk3My00ZTFjLWJiMTktNTc5NzgxNzczYjgwc18yMjA1MTkwMDkxNA';
const sample_apiVersion = '';
const sample_customerId = 'User001';
const sample_defaultFlag = '1';
const sample_cardNo = '4111111111111111';
const sample_expire = '2612';
const sample_holderName = 'TARO YAMADA';
const sample_securityCode = '1111';
const sample_token = '';

// **************************
// component
// **************************
const ApiRegister = () => {
  useEffect(() => {
    // カード登録APIを単体で呼び出す
    // 補足：
    //   動作確認の容易さからuseEffect内で実行しているが、加盟店様の任意のタイミングで実行してください
    console.log('■■■ カード登録 API >>>>>');
    register(
      {
        authorization: BEARER,
        apiKey: sample_apiKey,
        apiVersion: sample_apiVersion,
        customerId: sample_customerId,
        defaultFlg: sample_defaultFlag,
        cardNo: sample_cardNo,
        expire: sample_expire,
        holderName: sample_holderName,
        securityCode: sample_securityCode,
        token: sample_token,
      },
      successCallback,
      failureCallback,
    );
  }, []);

  const successCallback = (response: CardRegisterResponse) => {
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
          <Text>カード登録API : 単体で実行</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ApiRegister;
