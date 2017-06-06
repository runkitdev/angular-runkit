# angular-runkit

Angular RunKit Component.

## Install

Install the package.

```sh
$ npm i -S angular-runkit
```

Add the RunKit embed library to your index page:

**`src/index.html`**
```html
<head>
    ...
    <script src="https://embed.runkit.com"></script>
    ...
</head>
```

Whitelist `angular-runkit` in your System.js config:

**`src/systemjs.config.js`**
```js
map: {
    ...
    'angular-runkit': 'npm:angular-runkit/dist/index.js',
    ...
}
```

Declare the component in your module:

**`src/app/app.module.ts`**
```ts
import { RunKitEmbedComponent } from 'angular-runkit'

...

@NgModule({
	...
	declarations: [
		...
		RunKitEmbedComponent,
		...
	],
	...
})
```

## Usage

```html
<runkit-embed source='console.log("Hello, world!")'></runkit-embed>
```

![](http://i.imgur.com/7mH8e6o.png)

Don't forget to check out the [RunKit embed docs](https://runkit.com/docs/embed#options).

## Inputs

### source : string

Specify the source code that the notebook will use.

```html
<runkit-embed source='console.log("Hello, world!")'></runkit-embed>
```

### readOnly : boolean

If `true`, the user will not be able to edit or run the embed.

```html
<runkit-embed
    source='console.log("Hello, world!")'
    readOnly=true>
</runkit-embed>
```

### mode : string

If `'endpoint'`, the notebook will be run as an endpoint and a link to the served page will be shown.

```html
<runkit-embed
    source='exports.endpoint = (req, res) => res.end("Hello, world!")'
    mode='endpoint'>
</runkit-embed>
```

### nodeVersion : string

Request a version or semver range for the node engine.

```html
<runkit-embed
    source='console.log("Hello, world!")'
    nodeVersion='7'>
</runkit-embed>
```

### env : [string]

Provide a list of environment variables accessible in the notebook through process.env.

```html
<runkit-embed
    source='console.log(`Hello, ${ process.env.FIRST_NAME } ${ process.env.LAST_NAME }!`)'
    [env]='["FIRST_NAME=Haskell", "LAST_NAME=Curry"]'
    nodeVersion='7'>
</runkit-embed>
```

### title : string

Provide a title for the notebook when opened on RunKit.

```html
<runkit-embed
    source='console.log("Hello, world!")'
    title='Hello'>
</runkit-embed>
```

### minHeight : string

Provide a minimum height for the embed (`'130px'` by default).

```html
<runkit-embed
    source='console.log("Hello, world!")'
    minHeight='200px'>
</runkit-embed>
```

### packageTimestamp : number

Specify the Unix time in milliseconds at which packages should resolved. Packages published after the date will be ignored.

```html
<runkit-embed
    source='require("babel-core")'
    packageTimestamp=1468195200000>
</runkit-embed>
```

### preamble : string

Specify source code that is run before the main source. This code will not be shown in the embed.


```html
<runkit-embed
    source='console.log(_.map(_.add(1), [1, 2, 3]))'
    preamble='const _ = require("lodash/fp")'>
</runkit-embed>
```

## Outputs

### onLoad : function

Provide a callback that is run when the embed is loaded.

```js
<runkit-embed
    source='console.log("Hello, world!")'
    (onLoad)='loaded()'>
</runkit-embed>
```

### onURLChanged : function

Provide a callback that is run whenever the embed's URL changes.

```js
<runkit-embed
    source='console.log("Hello, world!")'
    (onURLChanged)='urlChanged()'>
</runkit-embed>
```

### onEvaluate : function

Provide a callback that is run whenever the embed is evaluated.

```js
<runkit-embed
    source='console.log("Hello, world!")'
    (onEvaluate)='evaluated()'>
</runkit-embed>
```

## Methods

### evaluate(callback : function) : void

Evaluate the notebook.

```html
<runkit-embed
    #embed
    source='console.log("Hello, world!")'>
</runkit-embed>
<button (click)='embed.evaluate()'>Run</button>
```
