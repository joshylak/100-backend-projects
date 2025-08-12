export function parseArgs() {
  const args = process.argv.slice(2);
  const config = {};

  for (let i = 0; i < args.length; i++) {
    if (args[i].startsWith('--')) {
      const key = args[i].replace('--', '');
      config[key] = args[i + 1];
      i++;
    }
  }

  if (!config.url) throw new Error('Missing --url parameter');
  config.requests = parseInt(config.requests || 10, 10);
  config.concurrency = parseInt(config.concurrency || 1, 10);

  return config;
}
