/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

import AppPayment from './AppPayment';
import AppRegister from './AppRegister';
import AppCardUpdate from './AppCardUpdate';

AppRegistry.registerComponent(appName, () => AppRegister);
