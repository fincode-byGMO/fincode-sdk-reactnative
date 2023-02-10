import { requireNativeComponent } from 'react-native';
import { FincodePaymentViewProps, FincodeCardRegisterViewProps, FincodeCardUpdateViewProps } from './types/FincodeTypes';

export const FincodeVerticalView = requireNativeComponent<FincodePaymentViewProps | FincodeCardRegisterViewProps | FincodeCardUpdateViewProps>('FincodeVerticalView');

export const FincodeHorizontalView = requireNativeComponent<FincodePaymentViewProps | FincodeCardRegisterViewProps | FincodeCardUpdateViewProps>('FincodeHorizontalView');
