overtone-repl
=============

Standalone REPL for clojure/overtone


Introduction to Overtone
========================

4-min Overtone Live demo:
http://vimeo.com/22798433

17-min Overtone Live demo:
http://vimeo.com/46867490

43-min video on Overtone:
https://www.youtube.com/watch?v=imoWGsipe4k


Overtone Installation
=====================

Installation of Clojure/Leiningen and Overtone in Windows is actually challenging.
We wanted to customize a ZIP package pretty much ready to run for our Coderdojo class.

Hence, I took the following steps to create this ZIP package.

Just download the ZIP file, uncompress, and double-click on /bin/clj-1.bat


How to re-create a standalone Overtone REPL
-------------------------------------------

1) Clojure REPL
I found the following clojure REPL, pretty much ready to run:
http://bitbucket.org/kasim/clojurew/get/tip.zip

2) Add Overtone JAR libraries
a) Update the clojure.jar (from 1.3 to 1.5.1)
b) Install Leiningen/Overtone and collect all the JARs from %HOME%/.m2 (Maven repository)
c) Move all those JARs (except conflicting older clojure.jar's) into the clojurew environment

3) Integrate with SuperCollider
a) Install SuperCollider
b) Move the SuperCollider into the ZIP folder
c) Customize the path environment in bin/clj-1.bat to include the SuperCollider binaries


