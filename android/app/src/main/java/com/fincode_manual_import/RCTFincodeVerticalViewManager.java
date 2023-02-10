package com.fincode_manual_import;

import android.view.ViewGroup;

import com.epsilon.fincode.fincodesdk.views.FincodeVerticalView;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ThemedReactContext;

public class RCTFincodeVerticalViewManager extends RCTFincodeViewManager<FincodeVerticalView> {

    public RCTFincodeVerticalViewManager(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String viewName() {
        return FincodeVerticalView.class.getSimpleName();
    }

    @Override
    public FincodeVerticalView createFincodeViewInstance(ThemedReactContext themedReactContext) {
        return new FincodeVerticalView(themedReactContext);
    }
}
