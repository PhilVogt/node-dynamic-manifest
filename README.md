# node-dynamic-manifest

1) Run `npm install`.
2) Run `npm run build`.
3) Run `node .`

## Overview
The dist folder will contain your js files after tsc compilation. The connect.ts file will bootstrap a runtime, using the `launch` command. No windows will be opened at this point, calling `connect` will give you back a `fin` object which you can then use to start a platform from an in memory `OpenFin.PlatformOptions` object. You could have used `fin.Application.start`, if you wanted to launch our single window, container.

Not much else to it. :thumbsup: