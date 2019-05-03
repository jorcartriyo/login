package com.login;

import android.app.Application;

import com.facebook.react.ReactApplication;
import io.invertase.firebase.RNFirebasePackage;
import com.dieam.reactnativepushnotification.ReactNativePushNotificationPackage;
import com.rt2zz.reactnativecontacts.ReactNativeContacts;
import com.reactlibrary.RNAudiosPackage;
import net.no_mad.tts.TextToSpeechPackage;
import com.github.wumke.RNImmediatePhoneCall.RNImmediatePhoneCallPackage;
import com.imagepicker.ImagePickerPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.reactnativecommunity.asyncstorage.AsyncStoragePackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import java.util.Arrays;
import java.util.List;
import com.wmjmc.reactspeech.VoicePackage;
import com.lynxit.contactswrapper.ContactsWrapperPackage;
import com.facebook.react.ReactInstanceManager;
import io.invertase.firebase.notifications.RNFirebaseNotificationsPackage;
import io.invertase.firebase.messaging.RNFirebaseMessagingPackage;
import com.google.firebase.messaging.FirebaseMessaging;



public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),          
            new ReactNativePushNotificationPackage(),
            new ReactNativeContacts(),
            new RNAudiosPackage(),
            new TextToSpeechPackage(),
            new RNImmediatePhoneCallPackage(),
            new ImagePickerPackage(),
            new VectorIconsPackage(),
            new AsyncStoragePackage(),
            new RNGestureHandlerPackage(),
            new VoicePackage(),
            new ContactsWrapperPackage(),
            new RNFirebasePackage(),
            new RNFirebaseMessagingPackage(), 
            new RNFirebaseNotificationsPackage() 
            
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    FirebaseMessaging.getInstance().setAutoInitEnabled(true);
    SoLoader.init(this, /* native exopackage */ false);
  }
}
