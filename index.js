import TestWorker from 'worker-loader?inline=no-fallback!./worker';

let worker = new TestWorker();
console.log(worker);