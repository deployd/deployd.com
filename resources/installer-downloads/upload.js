if (me && me.role === 'admin') {
    dpd.installer.get(function(res) {
        var inst = res[0] || {};
        
        if (fileName.indexOf('.pkg') === fileName.length - 4) {
            inst.macInstaller = fileName;
        } else if (fileName.indexOf('.exe') === fileName.length - 4) {
            inst.winInstaller = fileName;
        } else {
            cancel("Not a valid installer file!");
        }

        var match = fileName.match(/(?:osx|win)-([0-9a-zA-Z.\-]+?).(?:exe|pkg)/);
        if (match && match[1]) {
            inst.version = match[1];
        }
        
        dpd.installer.post(inst, function() {
            
        });
        
    });
} else {
    cancel("You cannot upload an installer!", 401);
}