var spawn = require('child_process').spawn;
var path = require('path');
var os = require('os');
var fs = require('fs');

var file_open_active = '';

var editor = grapesjs.init({
    container: '#gjs',
    height: '100%',
    canvas: {
        styles: ['f7/css/framework7.css', 'f7/css/card.css', 'css/icons.css'],
        scripts: ['f7/js/framework7.js', 'f7/js/app.js']
    },
    allowScripts: 1
});

var config = editor.getConfig();

var blockManager = editor.BlockManager;

var command = editor.Commands;

var panel = editor.Panels;

config.showDevices = 0;

panel.getButton('views', 'open-blocks').set('active', true);

var updateTooltip = function(coll, pos) {
    coll.each(function(item) {
        var attrs = item.get('attributes');
        attrs['data-tooltip-pos'] = pos || 'bottom';
        item.set('attributes', attrs);
    });
}

command.add('undo', {
    run: function(editor, sender) {
        sender.set('active', 0);
        editor.UndoManager.undo(1);
    }
});

command.add('redo', {
    run: function(editor, sender) {
        sender.set('active', 0);
        editor.UndoManager.redo(1);
    }
});

command.add('set-device-desktop', {
    run: function(editor) {
        editor.setDevice('Desktop');
    }
});

command.add('set-device-tablet', {
    run: function(editor) {
        editor.setDevice('Tablet');
    }
});

command.add('set-device-mobile', {
    run: function(editor) {
        editor.setDevice('Mobile portrait');
    }
});

command.add('clean-all', {
    run: function(editor, sender) {
        sender && sender.set('active', false);
        if (confirm('Are you sure to clean the canvas?')) {
            var comps = editor.DomComponents.clear();
            setTimeout(function() {
                localStorage.clear()
            }, 0)
        }
    }
});

command.add('new', {
    run: function(editor, sender) {
        sender && sender.set('active', false);
        var comps = editor.DomComponents.clear();
        setTimeout(function() {
            localStorage.clear()
        }, 0)

        file_open_active = '';
    }
});

command.add('open-vscode', {
    run: function(editor, sender) {
        sender && sender.set('active', false);

        spawn('cmd.exe', ['/c', 'code ' + path.join(__dirname)]);
    }
});

command.add('save-code', {
    run: function(editor, btn) {
        btn.set('active', false);

        var html = editor.getHtml();

        var prompt = require('electron-prompt');

        if (file_open_active === '') {
            prompt({
                title: 'Save File',
                label: 'File Name',
                inputAttrs: {
                    type: 'text'
                },
                type: 'input'
            }).then((filename) => {
                if (filename === null) {
                    //Do Nothing
                } else if (filename === ' ' || filename === '') {
                    alert('Please Type Filename');
                } else {
                    lower_filename = filename.toLowerCase();
                    sanitize_filename = lower_filename.replace(/ /g, "_");
                    if (sanitize_filename.slice(-5) === '.html') {
                        fs.writeFileSync(path.join(__dirname, 'pages/' + sanitize_filename), html, 'utf-8');
                        file_open_active = sanitize_filename;
                        alert('Successfully Storing the File');
                    } else {
                        fs.writeFileSync(path.join(__dirname, 'pages/' + sanitize_filename + '.html'), html, 'utf-8');
                        file_open_active = sanitize_filename;
                        alert('Successfully Storing the File');
                    }
                }
            }).catch(console.error);
        } else {
            fs.writeFileSync(path.join(__dirname, 'pages/' + file_open_active), html, 'utf-8');
            alert('Successfully Updating the File');
        }
    }
});

command.add('open-file', {
    run: function(editor, btn) {
        btn.set('active', false);

        var html = editor.getHtml();

        var prompt = require('electron-prompt');

        fs.readdir(path.join(__dirname, 'pages/'), (err, dir) => {
            if (dir.length === 0) {
                //Do Nothing
            } else {
                var fileList = {};
                for (var i = 0; i < dir.length; i++) {
                    let fileName = dir[i];
                    fileList[fileName] = fileName;
                }
                prompt({
                    title: 'Open File',
                    label: 'File Name:',
                    type: 'select',
                    selectOptions: fileList
                }).then((r) => {
                    if (r === null) {
                        //Do Nothing
                    } else {
                        fs.readFile(path.join(__dirname, 'pages/' + r), 'utf-8', (err, data) => {
                            if (err) {
                                console.log(err);
                                return;
                            }
                            file_open_active = r;
                            editor.setComponents(data);
                        })
                    }
                }).catch(console.error);
            }
        });
    }
});

panel.addButton('options', [{
    id: 'open-vscode',
    className: 'fa fa-credit-card',
    command: 'open-vscode',
    attributes: {
        title: 'Open Visual Studio Code'
    }
}, {
    id: 'new-file',
    className: 'fa fa-file',
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
        title: 'Save'
    }
}, {
    id: 'undo',
    className: 'fa fa-undo',
    command: 'undo',
    attributes: {
        title: 'Undo (CTRL/CMD + Z)'
    }
}, {
    id: 'redo',
    className: 'fa fa-repeat',
    command: 'redo',
    attributes: {
        title: 'Redo (CTRL/CMD + SHIFT + Z)'
    }
}, {
    id: 'clean-all',
    className: 'fa fa-eraser',
    command: 'clean-all',
    attributes: {
        title: 'Empty canvas'
    }
}]);

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

document.addEventListener('keydown', function(event) {
    if (event.code == 'KeyS' && (event.ctrlKey || event.metaKey)) {
        var html = editor.getHtml();

        var prompt = require('electron-prompt');

        if (file_open_active === '') {
            prompt({
                title: 'Save File',
                label: 'File Name',
                inputAttrs: {
                    type: 'text'
                },
                type: 'input'
            }).then((filename) => {
                if (filename === null) {
                    //Do Nothing
                } else if (filename === ' ' || filename === '') {
                    alert('Please Type Filename');
                } else {
                    lower_filename = filename.toLowerCase();
                    sanitize_filename = lower_filename.replace(/ /g, "_");
                    if (sanitize_filename.slice(-5) === '.html') {
                        fs.writeFileSync(path.join(__dirname, 'pages/' + sanitize_filename), html, 'utf-8');
                        file_open_active = sanitize_filename;
                        alert('Successfully Storing the File');
                    } else {
                        fs.writeFileSync(path.join(__dirname, 'pages/' + sanitize_filename + '.html'), html, 'utf-8');
                        file_open_active = sanitize_filename;
                        alert('Successfully Storing the File');
                    }
                }
            }).catch(console.error);
        } else {
            fs.writeFileSync(path.join(__dirname, 'pages/' + file_open_active), html, 'utf-8');
            alert('Successfully Updating the File');
        }
    }
});