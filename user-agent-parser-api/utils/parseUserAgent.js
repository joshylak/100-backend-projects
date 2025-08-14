import { UAParser } from "ua-parser-js";

export const parseUserAgent = (userAgentString) => {
  const parser = new UAParser(userAgentString);
  return {
    browser: parser.getBrowser(),
    os: parser.getOS(),
    device: parser.getDevice(),
    engine: parser.getEngine(),
    cpu: parser.getCPU()
  };
};
