package com.login;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;
import com.github.wumke.RNImmediatePhoneCall.RNImmediatePhoneCallPackage; 
public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "login";
    }
  @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
        return new ReactActivityDelegate(this, getMainComponentName()) {
            @Override
            protected ReactRootView createRootView() {
                return new RNGestureHandlerEnabledRootView(MainActivity.this);
            }
        };
    }
 
     @Override
    public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
       // RNImmediatePhoneCallPackage.onRequestPermissionsResult(requestCode, permissions, grantResults); 
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
    } 
}
