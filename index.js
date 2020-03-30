const core = require('@actions/core');
const QRCode = require('qrcode');
const wait = require('./wait');


// most @actions toolkit packages have async methods
async function run() {
  try { 
    const text = core.getInput('text');
    const path = core.getInput('path');
    QRCode.toString(text, { type: 'terminal' }, function (err, string) {
      if (err) throw err
      console.log(string)
    })
    QRCode.toFile(
      path,
      text
    )

    const ms = core.getInput('milliseconds');
    console.log(`Waiting ${ms} milliseconds ...`)

    core.debug((new Date()).toTimeString())
    await wait(parseInt(ms));
    core.debug((new Date()).toTimeString())

    core.setOutput('time', new Date().toTimeString());
  } 
  catch (error) {
    core.setFailed(error.message);
  }
}

run()
