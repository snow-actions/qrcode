const process = require('process');
const cp = require('child_process');
const path = require('path');

// shows how the runner will run a javascript action with env / stdout protocol
test('test runs', () => {
    process.env.INPUT_TEXT = 'from test';
    process.env.INPUT_PATH = 'out.svg';
    const ip = path.join(__dirname, 'index.js');
    console.log(cp.execSync(`node ${ip}`, { env: process.env }).toString());
})
