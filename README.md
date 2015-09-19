# waveanim.js
Creates a wave animation when you hover over text. View in [Codepen.io](http://codepen.io/jbrown25/pen/Yyqyqv)




##Installation
Add [Animate.css](https://github.com/daneden/animate.css) to your CSS folder and link it in `<head>`, or simply include:

```html
<link href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.4.0/animate.css" rel="stylesheet" type="text/css">
```

in `<head>`. Also, include jQuery somewhere.  You can use this tag:

```html
<script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
```

Place waveanim.js in your javascript folder and link it somewhere below jQuery. 

##Usage
Select the text you wish to animate and invoke waveanim():

```javascript
$(".wave").waveanim();
```
waveanim.js uses "bounce" by default.  Use a different animation from Animate.css:

```javascript
$(".wave").waveanim({
  animation: "jello"
});
```

You can also change the number of seconds between triggering each letter animation:

```
$(".wave").waveanim({
  animation: "jello",
  waveOffset: .1
});
```

waveanim.js uses 0.05 seconds offset by default.




