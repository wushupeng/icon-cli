import os from "os";
async function onBeforeRender(pageContext) {
  const pageProps = {
    userInfo: os.userInfo(),
    osInfo: {
      hostname: os.hostname(),
      cpuCount: os.cpus().length,
      totalMemory: os.totalmem(),
      freeMemory: os.freemem(),
      osType: os.type(),
      osPlatform: os.platform(),
      osRelease: os.release()
    },
    nodeInfo: {
      version: process.version,
      platform: process.platform,
      arch: process.arch
    }
  };
  return {
    pageContext: {
      pageProps
    }
  };
}
export {
  onBeforeRender
};
