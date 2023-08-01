import 'dotenv/config';

export default{
  "expo": {
    "name": "AwesomeProject",
    "slug": "AwesomeProject",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "expoClientId": "560622160114-hqf982shq1hh8hlgq0moh8i2nkagn09b.apps.googleusercontent.com",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.anonymous.AwesomeProject"
    },
    "GoogleAuthRequestConfig":{
      "expoClientId": "560622160114-hqf982shq1hh8hlgq0moh8i2nkagn09b.apps.googleusercontent.com"
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      },
      "package": "com.anonymous.AwesomeProject"
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "plugins": ["@react-native-google-signin/google-signin"],
    "extra": {
      "eas": {
        "projectId": "8ca11ee0-d854-4604-aafa-8dc96a256b87"
      }
    },
    "scheme": "AwesomeProject"
  }
}
