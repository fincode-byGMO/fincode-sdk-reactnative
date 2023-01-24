import {ViewStyle, UIManager, requireNativeComponent} from 'react-native';

// ******************************
// FincodeVerticalView
// ******************************
type FincodeVerticalViewProps = {
  style: ViewStyle;
};

export const FincodeVerticalView =
  UIManager.getViewManagerConfig('FincodeVerticalView') != null
    ? requireNativeComponent<FincodeVerticalViewProps>('FincodeVerticalView')
    : () => {
        throw new Error('LINKING_ERROR');
      };

// ******************************
// FincodeHorizontalView
// ******************************
type FincodeHorizontalViewProps = {
  style: ViewStyle;
};

export const FincodeHorizontalView =
  UIManager.getViewManagerConfig('FincodeHorizontalView') != null
    ? requireNativeComponent<FincodeHorizontalViewProps>(
        'FincodeHorizontalView',
      )
    : () => {
        throw new Error('LINKING_ERROR');
      };
