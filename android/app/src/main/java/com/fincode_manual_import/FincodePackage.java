package com.fincode_manual_import;

import androidx.annotation.NonNull;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.List;

public class FincodePackage implements ReactPackage {

    @NonNull
    @Override
    public List<NativeModule> createNativeModules(@NonNull ReactApplicationContext reactApplicationContext) {
        List<NativeModule> list = new ArrayList<NativeModule>();
        list.add(new FincodeApiModule(reactApplicationContext));

        return list;
    }

    @NonNull
    @Override
    public List<ViewManager> createViewManagers(@NonNull ReactApplicationContext reactApplicationContext) {
        List<ViewManager> list = new ArrayList<ViewManager>();
        list.add(new RCTFincodeVerticalViewManager(reactApplicationContext));
        list.add(new RCTFincodeHorizontalViewManager(reactApplicationContext));

        return list;
    }
}
