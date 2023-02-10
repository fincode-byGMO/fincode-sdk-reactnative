package com.fincode_manual_import;

import com.epsilon.fincode.fincodesdk.views.FincodeHorizontalView;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ThemedReactContext;

public class RCTFincodeHorizontalViewManager extends RCTFincodeViewManager<FincodeHorizontalView> {

    public RCTFincodeHorizontalViewManager(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String viewName() {
        return FincodeHorizontalView.class.getSimpleName();
    }

    @Override
    public FincodeHorizontalView createFincodeViewInstance(ThemedReactContext themedReactContext) {
        return new FincodeHorizontalView(themedReactContext);
    }
}