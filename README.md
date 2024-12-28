# QR Code Generator

[![Test](https://github.com/snow-actions/qrcode/actions/workflows/test.yml/badge.svg)](https://github.com/snow-actions/qrcode/actions/workflows/test.yml)

This action generates a QR Code file.  
You can use the generated QR Code anywhere - upload to slack, commit to git, etc.

## Usage

```yaml
uses: snow-actions/qrcode@v1.1.0
with:
  text: 'https://github.com/snow-actions/qrcode'
  path: 'qrcode.png'
```

## Example

```yaml
name: QRCode
on:
  push:
    branches: [ master ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v4
      with:
        ref: qrcode
    - uses: snow-actions/qrcode@v1.1.0
      with:
        text: https://github.com/snow-actions/qrcode
        path: qrcode.png
    - uses: snow-actions/git-config-user@v1.0.0
    - name: You can commit it.
      run: |
        git add qrcode.png
        git commit -m "QR Code"
        git push origin qrcode
    - name: You can upload it to artifact.
      uses: actions/upload-artifact@v1
      with:
        name: qrcode
        path: qrcode.png
```
