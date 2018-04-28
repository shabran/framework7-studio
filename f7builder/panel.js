panel.getPanels().reset([{
    id: 'options',
    buttons: [{
        id: 'new-file',
        className: 'fa fa-plus-square',
        command: 'new',
        attributes: {
            title: 'New File'
        }
    }, {
        id: 'open-file',
        className: 'fa fa-folder-open',
        command: 'open-file',
        attributes: {
            title: 'Open File'
        }
    }, {
        id: 'save-code',
        className: 'fa fa-save',
        command: 'save-code',
        attributes: {
            title: 'Save File'
        }
    }, {
        id: 'undo',
        className: 'fa fa-undo',
        command: e => e.runCommand('core:undo'),
        attributes: {
            title: 'Undo'
        }
    }, {
        id: 'redo',
        className: 'fa fa-repeat',
        command: e => e.runCommand('core:redo'),
        attributes: {
            title: 'Redo'
        }
    }, {
        id: 'clean-all',
        className: 'fa fa-trash',
        command: 'clean-all',
        attributes: {
            title: 'Clear Canvas'
        }
    }, {
        id: 'sw-visibility',
        command: 'sw-visibility',
        className: 'fa fa-object-group',
        attributes: {
            title: 'Show Elements'
        }
    }, {
        id: 'preview',
        context: 'preview',
        command: e => e.runCommand('preview'),
        className: 'fa fa-eye',
        attributes: {
            title: 'Preview'
        }
    }, {
        id: 'fullscreen',
        command: 'fullscreen',
        className: 'fa fa-expand',
        attributes: {
            title: 'Full Screen'
        }
    }, {
        id: 'export-template',
        className: 'fa fa-code',
        command: e => e.runCommand('export-template'),
        attributes: {
            title: 'Code'
        }
    }, {
        id: 'open-vscode',
        className: 'fa fa-terminal',
        command: 'open-vscode',
        attributes: {
            title: 'Open Visual Studio Code'
        }
    }]
}, {
    id: 'views',
    buttons: [{
        id: 'open-blocks',
        command: 'open-blocks',
        active: true,
        className: 'fa fa-th-large',
        attributes: {
            title: 'Components'
        }
    }, {
        id: 'open-layers',
        command: 'open-layers',
        className: 'fa fa-bars',
        attributes: {
            title: 'Layers'
        }
    }, {
        id: 'open-sm',
        command: 'open-sm',
        className: 'fa fa-paint-brush',
        attributes: {
            title: 'Styles'
        }
    }, {
        id: 'open-tm',
        command: 'open-tm',
        className: 'fa fa-cog',
        attributes: {
            title: 'Configs'
        }
    }]
}])

var device_panel = panel.addPanel({
    id: 'device_panel',
    visible: true,
    buttons: [{
        id: 'deviceDesktop',
        command: 'set-device-desktop',
        className: 'fa fa-desktop',
        attributes: { 'title': 'Desktop' },
        active: 1,
    }, {
        id: 'deviceTablet',
        command: 'set-device-tablet',
        className: 'fa fa-tablet',
        attributes: { 'title': 'Tablet' },
    }, {
        id: 'deviceMobile',
        command: 'set-device-mobile',
        className: 'fa fa-mobile',
        attributes: { 'title': 'Mobile' },
    }],
});