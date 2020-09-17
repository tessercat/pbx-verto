/*
 *  Copyright (c) 2020 Peter Christensen. All Rights Reserved.
 *  CC BY-NC-ND 4.0.
 */
function logPrefix() {
  if (!document.pbxLogPrefix) {
    const pbxScript = document.querySelector('#pbx-client-script');
    if (pbxScript) {
      document.pbxLogPrefix = pbxScript.src.split('/').pop().split('.')[0];
    } else {
      document.pbxLogPrefix = 'pbx-client';
    }
  }
  return `[${document.pbxLogPrefix} ${new Date().toLocaleTimeString()}]`;
}

let logger = {
  debug: (...args) => {
    if (document.pbxDebugEnabled) {
      console.debug(logPrefix(), ...args);
    }
  },
  info: (...args) => {
    console.log(logPrefix(), ...args);
  },
  error: (...args) => {
    console.error(logPrefix(), ...args);
  }
}
export default logger;
