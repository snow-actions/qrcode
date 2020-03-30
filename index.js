const core = require('@actions/core');
const QRCode = require('qrcode');


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
  } 
  catch (error) {
    core.setFailed(error.message);
  }
}

run()
