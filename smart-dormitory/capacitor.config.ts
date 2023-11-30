import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'smart-dormitory',
  webDir: 'out',
  server: {
    androidScheme: 'https'
  }
};

export default config;
