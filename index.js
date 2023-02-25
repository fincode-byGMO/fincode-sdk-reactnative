/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

import AppPayment from './AppPayment'; // UIコンポーネント : 決済
import AppRegister from './AppRegister'; // UIコンポーネント : カード登録
import AppCardUpdate from './AppCardUpdate'; // UIコンポーネント : カード更新
import ApiPayment from './ApiPayment'; // API単体実行 : 決済実行API

AppRegistry.registerComponent(appName, () => ApiPayment);
