REM set PATH=%PATH%;F:\Programs\SuperCollider\

set PATH=%PATH%;..\SuperCollider
set JAVA_HOME=F:\java\JDK\jdk1.7

@Echo off
REM # CREATED BY:	Kasim 
REM # CREATED ON:	4/14/2010 
REM # VERSION:	1.1.0 (intended to stay in sync with Clojure)
REM # LICENSE:	Same with Clojure License
REM #-----------------------------------------------------------------
SetLocal EnableDelayedExpansion

REM # Check for CLOJURE_HOME and try to set it by checking for 
REM # clojure.jar file within a parent folder of current dir
set CURRENT_DIR=%~dp0..
set PARENT_DIR=%CURRENT_DIR%
IF (%CLOJURE_HOME%)==() (
	IF EXIST %PARENT_DIR%\clojure.jar (
		set CLOJURE_HOME=%PARENT_DIR%
		Echo CLOJURE_HOME is set to %PARENT_DIR%
	) ELSE (
		Echo Please set CLOJURE_HOME. For Example:
		Echo 	set CLOJURE_HOME=C:\ClojureW	
		Exit /B
	)
)
 
set CLOJURE_JAR=%CLOJURE_HOME%\clojure.jar
set CLOJURE_LIB=%CLOJURE_HOME%\lib

REM # Add all jars in CLOJURE_HOME\lib folder to the classpath
set CP=
for %%i in (%CLOJURE_LIB%\*) do set CP=!CP!%%i;

Echo CLASSPATH = %CP%

IF(%1) == () goto CLJ
IF(%1) == (jline) goto CLJ_JLINE

REM # IF there is a param and it is not jline
java -cp "%CP%";%CLOJURE_JAR% clojure.main %1 %*
goto :eof 

:CLJ
java -cp "%CP%";%CLOJURE_JAR% clojure.main
goto :eof

:CLJ_JLINE
java -cp "%CP%";%CLOJURE_JAR% jline.ConsoleRunner clojure.main
goto :eof

EndLocal
