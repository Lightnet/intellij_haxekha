Last Update: 2018-06-09

# Partly working prototype but used command line and bat test.
 * for window 10 64 bit tested.
 * Html5 build tested.
 * Window App build tested.

# Required:
 * Haxe
 * Git

# Information:
 Kha with IntelliJ IDEA does not work correctly since kha lib in haxe lib folder is out date version 16.1.2. Kha Git Current version for Kha is 18.x.

 Unless you wanted to used command all the time.

Command line on current project folder.
```
haxelib run kha html5
```

# Current project folder and command line (html5):
```
node "C:/HaxeToolkit/haxe/lib/kha/git/make.js" debug-html5
```
 Build project.
```
node "C:/HaxeToolkit/haxe/lib/kha/git/make.js" debug-html5 --server
```
 Start Server Html5. http://localhost:8080/

# Current project folder and command line (window 10):
```
node "C:/HaxeToolkit/haxe/lib/kha/git/make.js"
```
 Build project.
```
node "C:/HaxeToolkit/haxe/lib/kha/git/make.js" --run
```
If get an error, you might need to install window 10 sdk and Visual Studio Community, c++.

# command kha options:
```
--run
--compile
--server (for browser client)
```

# Other command lines:
```
node "C:/HaxeToolkit/haxe/lib/kha/git/make" html5
node "C:/HaxeToolkit/haxe/lib/kha/git/make" html5 --server
node "C:/HaxeToolkit/haxe/lib/kha/git/make" debug-html5 
node "C:/HaxeToolkit/haxe/lib/kha/git/make" debug-html5 --server
node "C:/HaxeToolkit/haxe/lib/kha/git/make.js" debug-html5 --run
node "C:/HaxeToolkit/haxe/lib/kha/git/make.js" debug-html5 --server
```

# Notes:
 * Window 10 64 bit. Might not compile if building window application.
  * Install Visual Studio Community
  * Need to install window 10 SDK (The Windows SDK version 10.0.16299.0)
 * gulp.js and server.js are just test build. It might be out date for gulp 4.0 release.
 * It is recommend to use Visual Studio Code or Kode Studio for easy compile and run builds.
 * If you have Security Auto-Containment on make sure you allow tools to compile.

# Links:
 * http://forum.kode.tech/topic/72/dead-simple-way-of-installing-and-running-kha-from-zero-to-final-build-windows-7-using-haxelib
 * https://github.com/RblSb/khaguide/blob/master/docs/book.md#build-options
 * https://github.com/RblSb/khaguide/tree/master/projects
 * https://try.haxe.org/#87e1a