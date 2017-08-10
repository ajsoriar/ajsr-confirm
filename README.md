# ajsr-confirm [![Build Status](https://travis-ci.org/ajsoriar/angular-avatar.svg?branch=master)](https://travis-ci.org/ajsoriar/angular-avatar)

[![npm version](https://badge.fury.io/js/angular-avatar.svg)](https://badge.fury.io/js/ajsr-confirm)
[![Bower version](https://badge.fury.io/bo/angular-avatar.svg)](https://badge.fury.io/bo/ajsr-confirm)
<!---
[![Bower version](https://badge.fury.io/bo/angular-avatar.svg)](https://badge.fury.io/bo/angular-avatar)
[![NuGet version](https://badge.fury.io/nu/angular-avatar.svg)](https://badge.fury.io/nu/angular-avatar)
-->

This is a simple plug in that shows a confirmation alert.

<!--- You will get this:-->
![angular-avatar basic usage example](./demo/all-in-one-example.gif?raw=true "angular-avatar basic usage example")

## Use it this way

#### 1 Download and Install ajsr-confirm:
<!--- - Bower: **bower install angular-avatar** -->
 - NPM: **npm install ajsr-confirm**
 - github: **https://github.com/ajsoriar/ajsr-confirm**
<!--- - NuGet: **PM> Install-Package angular-avatar** -->

#### 2 Include dependences:

2.1 ajsr-confirm.min.js is under `dist` folder.

2.2 Initialize the plugin by referencing the necessary files:

```javascript
<script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
<script src="dist/ajsr-confirm.min.js"></script>
<link rel="stylesheet" type="text/css" href="dist/ajsr-confirm.css">
```

#### 3 Use it!

3.1 This way:

```javascript
$.ajsrConfirm({
    text: "Do yow want to do that?"
});
```

You will get this:
![angular-avatar basic usage example](./demo/ajsr-confirm-basic-example.png?raw=true "angular-avatar basic usage example")

3.2 More interesting example including a template and some events:

```javascript
$.ajsrConfirm({

    text: "Do yow want to do that?",
    confirmButton: "OK",
    cancelButton : "Cancel",
    template: templateName,
    nineCorners: nineCorners,
    onConfirm: function() {

        console.log("Confirm!");
    },
    onCancel: function() {

        console.log("Cancel!");
    }

});
```
3.3 Complete examples in `ajsrConfirm/demo` directory and plunker:

#### 4 License

MIT

Copyright (c) 2017 

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

**Free Software, Yeah!**
