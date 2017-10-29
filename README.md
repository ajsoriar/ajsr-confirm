# ajsr-confirm [![Build Status](https://travis-ci.org/ajsoriar/ajsr-confirm.svg?branch=master)](https://travis-ci.org/ajsoriar/ajsr-confirm)

[![npm version](https://badge.fury.io/js/ajsr-confirm.svg)](https://badge.fury.io/js/ajsr-confirm)
[![Bower version](https://badge.fury.io/bo/ajsr-confirm.svg)](https://badge.fury.io/bo/ajsr-confirm)
<!---
[![Bower version](https://badge.fury.io/bo/ajsr-confirm.svg)](https://badge.fury.io/bo/ajsr-confirm)
[![NuGet version](https://badge.fury.io/nu/ajsr-confirm.svg)](https://badge.fury.io/nu/ajsr-confirm)
-->

ajsr-confirm is a simple javascript plugin that shows a confirmation window. It offers an html skeleton that can be used as a base to personalize the UI. Some creative and fun themes are included. A pure javascript and jQuery versions are available in dist folder.  

<!--- You will get this:-->
![ajsr-confirm examples](./demo/ajsrConfirm.png?raw=true "ajsr-confirm examples")

## Use it this way

#### 1 Download and Install ajsr-confirm:

 - NPM: **npm install ajsr-confirm**
 - Bower: **bower install ajsr-confirm**
 - github: **https://github.com/ajsoriar/ajsr-confirm**
<!--- - NuGet: **PM> Install-Package ajsr-confirm** -->


#### 2 Include dependences:

2.1 ajsr-jq-confirm.min.js and ajsr-js-confirm.min.js are in `dist` folder.

- ajsr-jq-confirm.min.js depends on jQuery
- and ajsr-js-confirm.min.js is pure javascript so it doesn't need jQuery.

2.2 Initialize the plugin by referencing the necessary files:

```javascript
<script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
<script src="dist/ajsr-jq-confirm.min.js"></script>
<link rel="stylesheet" type="text/css" href="dist/ajsr-confirm.css">
```

2.3 In the case of ajsr-js-confirm.min.js (no jQuery needed) just do this:

```javascript
<script src="dist/ajsr-js-confirm.min.js"></script>
<link rel="stylesheet" type="text/css" href="dist/ajsr-confirm.css">
```

#### 3 Use it!

3.1 This way:

```javascript
$.ajsrConfirm({
    message: "Do yow want to do that?"
});
```

You will get this: (bootstrap-like theme will be used by default)

![ajsr-confirm basic usage example](./demo/ajsr-confirm-basic-example.png?raw=true "ajsr-confirm basic usage example")

3.2 More interesting example including a template and some events:

```javascript
$.ajsrConfirm({
    title: "Title",
    message: "Do yow really want to do that?",
    confirmButton: "OK",
    cancelButton : "Cancel",
    template: 'windows-98',
    onConfirm: function() {

        console.log("Confirm!");
    },
    onCancel: function() {

        console.log("Cancel!");
    }

});
```
3.3 Complete examples in `ajsrConfirm/demo` directory and plunker:

Live example in plunker: https://plnkr.co/EuKZt6


#### 4 Themes:

Default theme looks like bootstrap. By specifying the attribute `template` default theme can be changed.

Available themes are: 'prince-of-persia', 'synthwave-1', 'future-blue', 'windows-98' and 'pill'

Live example in plunker: https://plnkr.co/EuKZt6


#### 5 License

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
