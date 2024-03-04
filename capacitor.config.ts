import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.arabicmandi.app',
  appName: 'ArabicMandi',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
