# QR Code Generator

![units-test](https://github.com/SnowCait/qrcode/workflows/units-test/badge.svg)

This action generates a QR Code file.  
You can use the generated QR Code anywhere - upload to slack, commit to git, etc.

## Usage

```yaml
uses: SnowCait/qrcode@v1.0.0
with:
  text: 'https://github.com/SnowCait/qrcode'
  path: 'qrcode.png'
```

## Examples

```yaml
name: QRCode
on:
  push:
    branches: [ master ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2
      with:
        ref: qrcode
    - uses: SnowCait/qrcode@v1.0.0
      with:
        text: https://github.com/SnowCait/qrcode
        path: qrcode.png
    - name: You can commit it.
      run: |
        git config --global user.email "you@example.com"
        git config --global user.name "Your Name"
        git add qrcode.png
        git commit -m "QR Code"
        git push origin qrcode
    - name: You can upload it to artifact.
      uses: actions/upload-artifact@v1
      with:
        name: qrcode
        path: qrcode.png
```
