#!/usr/bin/env node
import { parseArgs } from './src/utils.js';
import { runLoadTest } from './src/runner.js';

async function main() {
  const config = parseArgs();
  console.log(`Starting load test on ${config.url}`);
  console.log(`Requests: ${config.requests}, Concurrency: ${config.concurrency}`);

  const result = await runLoadTest(config);
  console.log('\n--- Load Test Results ---');
  console.log(result);
}

main().catch(err => console.error(err));
