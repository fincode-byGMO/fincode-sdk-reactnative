/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

import AppPayment from './AppPayment'; // UIコンポーネント : 決済
import AppRegister from './AppRegister'; // UIコンポーネント : カード登録
import AppCardUpdate from './AppCardUpdate'; // UIコンポーネント : カード更新
import ApiPayment from './ApiPayment'; // API単体実行 : 決済実行API
import ApiRegister from './ApiRegister'; // API単体実行 : カード登録API
import ApiCardUpdate from './ApiCardUpdate'; // API単体実行 : カード更新API
import ApiCardInfoList from './ApiCardInfoList'; // API単体実行 : カード一覧取得API
import ApiAuthentication from './ApiAuthentication'; // API単体実行 : 3DS2.0認証実行API
import ApiGetResult from './ApiGetResult'; // API単体実行 : 3DS2.0認証実行API
import ApiPaymentSecure from './ApiPaymentSecure'; // API単体実行 : 認証後決済API

AppRegistry.registerComponent(appName, () => ApiCardInfoList);
