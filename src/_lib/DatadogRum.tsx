
import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
    applicationId: '703566b5-f3a1-4a06-b09e-ffae241a6544',
    clientToken: 'pub04930b66115c354dbd3e9a6478b0e2d0',
    site: 'datadoghq.com',
    service: 'next-the-coffee-class',
    env: process.env.ENV_NAME || 'Development',
    // Specify a version number to identify the deployed version of your application in Datadog 
    // version: '1.0.0', 
    sessionSampleRate: 100,
    sessionReplaySampleRate: 20,
    trackUserInteractions: true,
    trackResources: true,
    trackLongTasks: true,
    defaultPrivacyLevel: 'mask-user-input',
});