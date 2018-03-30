# ajsr-confirm [![Build Status](https://travis-ci.org/ajsoriar/ajsr-confirm.svg?branch=master)](https://travis-ci.org/ajsoriar/ajsr-confirm)

[![npm version](https://badge.fury.io/js/ajsr-confirm.svg)](https://badge.fury.io/js/ajsr-confirm)
[![Bower version](https://badge.fury.io/bo/ajsr-confirm.svg)](https://badge.fury.io/bo/ajsr-confirm)
<!---
[![Bower version](https://badge.fury.io/bo/ajsr-confirm.svg)](https://badge.fury.io/bo/ajsr-confirm)
[![NuGet version](https://badge.fury.io/nu/ajsr-confirm.svg)](https://badge.fury.io/nu/ajsr-confirm)
-->

ajsr-confirm is a simple javascript plugin that shows a confirmation window. It offers an html skeleton that can be used as a base to personalize the UI. Some creative and fun themes are included. Pure javascript and jQuery versions are available in dist folder.  

<!--- You will get this:-->
![ajsr-confirm examples](./demo/ajsrConfirm.png?raw=true "ajsr-confirm examples")

## Use it this way

#### 1 Download and Install ajsr-confirm:

 - NPM: **npm install ajsr-confirm**
 - Bower: **bower install ajsr-confirm**
 - Yarn: **yarn add ajsr-confirm**
 - github: **https://github.com/ajsoriar/ajsr-confirm**
<!--- - NuGet: **PM> Install-Package ajsr-confirm** -->


#### 2 Include dependences:

2.1 Use ajsr-jq-confirm.min.js or ajsr-js-confirm.min.js. Both are in `dist` folder.

- `ajsr-jq-confirm.min.js` depends on jQuery
- `ajsr-js-confirm.min.js` is pure javascript so it doesn't need jQuery.

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

#### 3 Use it:

3.1.1 In the case of `ajsr-jq-confirm.min.js` that depends on jQuery:

```javascript
$.ajsrConfirm({
    message: "Do yow want to do that?"
});
```

3.1.2 In the case of `ajsr-js-confirm.min.js` just javascript was used so:

```javascript
window.ajsrConfirm({
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

ajsr-confirm is [MIT licensed](./LICENSE).
