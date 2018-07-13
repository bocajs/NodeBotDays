# Windows files

On windows there's more than just installing Node to do.
Yes. You can do that by simple running the installer over at https://nodejs.org 

But once you've done that, you need to run the following commands BEFORE running any kind of "npm i" to install the dependancies of any Johnny-Five device.

You need to run the following commands *IN AN ELIVATED (run as administrator) COMMAND LINE*, that will install software for you to "BUILD" the two dependencies in this example project (and most other johnny-five projects)

npm --add-python-to-path install --global --production windows-build-tools

After run this command to install node-gyp which connects node with python (which is used mainly to BUILD johnny-five on your computer)

npm install -g node-gyp

i've done something you're not suppose to, and have added my windows node_modules directory. This is ON PURPOSE, because the steps above are hard for some people and so I've done it for you.

Once it's copied and you're in this diretory you can run the actual example app by running:

node johnnyFiveSample.js

Do NOT use that app. copy (if you wish or make your own) and work on a your own file so you can REFER to the original.

Now go make something impressive!!!