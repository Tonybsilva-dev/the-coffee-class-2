
"use client"

import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
    applicationId: String(process.env.ENV_NAME),
    clientToken: String(process.env.ENV_NAME),
    site: 'datadoghq.com',
    service: process.env.ENV_NAME,
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


export default function DatadogInit() {
  // Render nothing - this component is only included so that the init code
  // above will run client-side
  return null;
}