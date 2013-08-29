Welcome 

ClojureW is preconfigured Clojure developement environment that works on following
platforms:
	Window
	Cygwin
	Mac OS X
	Linux

The easiest way to get ClojureW from command line is:
1. hg clone https://kasim@bitbucket.org/kasim/clojurew 
2. run clojurew/bin/clj

Here is little verbose way to set it up in case you do not have mercurial:

1. Download from http://bitbucket.org/kasim/clojurew/get/tip.zip
2. Set CLOJURE_HOME = path/to/unzipped/folder
    Note: You do not even need to set CLOJURE_HOME. Just expand
	the zip and run the clj script. If you still have issues, just run 
	set CLOJURE_HOME=path/to/unzipped/folder for Windows. If you are not on Windows,
	put following in .profile file for OS X and .bash-profile file for Linux:
	---------------------------------------- 
    	CLOJURE_HOME=path/to/unzipped/folder
    	export CLOJURE_HOME
    	PATH=$PATH:$CLOJURE_HOME/bin
	export PATH
	----------------------------------------
3. Just run clj to get a REPL or clj cljfile.clj to execute your script
    Note: For Windows, you need to add path/to/unzipped/folder/bin to your path so
	 you can invoke clj from anywhere.

It also includes optional Jline so you can have better command line experience such as
command history. To get a REPL with Jline just run: clj jline

Any jar files will be automatically added to the class path just by copying them to
the path/to/unzipped/folder/lib folder.

Have fun!

