const { launch, connect } = require('openfin-adapter');
const { getCurrentPlatform } = require('./platform-helper');
const { getApplicationManifest } = require('./dynamic-manifest');

const manifestObj = {
    uuid: 'conn-1',
    runtime: {
        version: "stable"
    }
}
async function launchFin() {
    const port = await launch(manifestObj);
    console.log(port);
    const fin = await connect({ uuid: 'conn-1', address: `ws://localhost:${port}` })
    const manifest: OpenFin.PlatformOptions = getApplicationManifest("someNameForAnApp", "someUUID");
    console.log(manifest);
    const app = await fin.Platform.start(manifest);
    return app;
}

launchFin().then(() => {
    console.log("All good");
});
