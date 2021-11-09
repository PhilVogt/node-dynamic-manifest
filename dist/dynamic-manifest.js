"use strict";
exports.__esModule = true;
exports.getApplicationManifest = void 0;
function getApplicationManifest(name, uuid) {
    return {
        name: name,
        uuid: uuid,
        autoShow: true,
        snapshot: {
            windows: [{
                    name: "Hello",
                    defaultWidth: 800,
                    defaultHeight: 600,
                    defaultLeft: 0,
                    defaultTop: 0,
                    saveWindowState: false,
                    layout: {
                        content: [{
                                type: "row",
                                id: "mainRow",
                                isClosable: true,
                                reorderEnabled: true,
                                title: "",
                                content: [{
                                        type: "stack",
                                        width: 50,
                                        isClosable: true,
                                        reorderEnabled: true,
                                        title: "",
                                        activeItemIndex: 0,
                                        content: [{
                                                type: "component",
                                                componentName: "view",
                                                componentState: {
                                                    url: "http://www.bbc.co.uk",
                                                    name: "component_1636383389711"
                                                },
                                                isClosable: true,
                                                reorderEnabled: true,
                                                title: "view"
                                            }]
                                    },
                                    {
                                        type: "column",
                                        isClosable: true,
                                        reorderEnabled: true,
                                        title: "", width: 50,
                                        content: [{
                                                type: "stack",
                                                height: 50,
                                                isClosable: true,
                                                reorderEnabled: true,
                                                title: "",
                                                activeItemIndex: 0,
                                                content: [{
                                                        type: "component",
                                                        componentName: "view",
                                                        componentState: {
                                                            url: "https://www.washingtonpost.com/",
                                                            name: "component_1636383396531"
                                                        },
                                                        isClosable: true,
                                                        reorderEnabled: true,
                                                        title: "view"
                                                    }]
                                            },
                                            {
                                                type: "stack",
                                                height: 50, isClosable: true,
                                                reorderEnabled: true,
                                                title: "",
                                                activeItemIndex: 0,
                                                content: [{
                                                        type: "component",
                                                        componentName: "view",
                                                        componentState: {
                                                            url: "http://www.google.com",
                                                            name: "component_1636383406761"
                                                        },
                                                        isClosable: true,
                                                        reorderEnabled: true,
                                                        title: "view"
                                                    }]
                                            }]
                                    }]
                            }]
                    }
                }]
        }
    };
}
exports.getApplicationManifest = getApplicationManifest;
