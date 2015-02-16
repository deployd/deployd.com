# Setup Notes

After cloning the project you need to run this from its root.

    git submodule update --init
    
# Running

First run dpd in the root (this directory).

    dpd
    
Then run the watcher for development

    cd app
    ./watch
    
This will rebuild the `public` folder when files change.