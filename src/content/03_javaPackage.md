---
title: Packaging a Java Application
author: Darrell Cleveland
date: February 15, 2025
---

## Post #3 - Want to package a Java app? ☕️
*Last Updated: March 1, 2025*

*How to package a .jar into an installer?*

[JLink](https://docs.oracle.com/en/java/javase/23/docs/specs/man/jlink.html) & [JPackage](https://docs.oracle.com/en/java/javase/23/docs/specs/man/jpackage.html) 

## Lets start.
Here are the assumptions, an executable jar has already been built, the target environment does not have a JRE or has the wrong JRE, and the jar should run on the target.

As most Java folks know when we compile and run a program in Java 9 or beyond, the runtime dependencies must be included (unless the environment exist on the target machine). To keep the runtime-environment minimal, a helpful tool to look into is JLink. The JLink tool is good for obtaining the required JRE modules to run the program. We want this because it means a smaller deployment size, faster application startup, and better memory management.

```java
jlink --module-path $JAVA_HOME/jmods \
      --add-modules java.base,java.desktop \
      --output /the/output/path
```

| Arguments    | Description  |
|----------|:------------|
| --module-path <path> | the path to the JDK modules (JARs) |
| --add-modules <modules> | adds necessary modules  |
| --output <path> | the designated output directory for the runtime image |
| --compress <i> | controls the compression level 0 (default, no compression), 1 string, 2 zip |
| --no-header-files | reduces the disk space but prevents JNI |
| --no-man-pages | excludes the man pages from being included in the image |
| --strip-debug | removes debugging content to further reduce the image |

There are additional arguments to consider to completely minimize the required runtime environment. Some actions may reduce the footprint, but make cause harm to the runtime such as fully compressing (slower startup) or removing debugging information (reduced information in stack traces, no stepping code with a debugger, limited profiling, no remote debugger).

### HOLD UP ✋🏼
How do you know what modules to add to your program?  

Here is the first tool we should have looked at:  
[jdeps](https://docs.oracle.com/en/java/javase/23/docs/specs/man/jdeps.html) can be used to list the dependent modules in your program. 

```java
jdeps --list-deps daprogram.jar

output:
daprogram.jar -> java.base
daprogram.jar -> java.desktop
daprogram.jar -> whatever the modules are..
```

At this point the modules are known, so go back to using the jlink command to add the modules that are needed to create a minimal runtime image. `java.base` is added by default, the other modules are what's important . After the jlink command runs we are ready to use jpackage.

## Its Time to Package this up 📦

To create an installer we just need to run the jpackage command. 

Before doing so there is some information to cover. To keep it simple, whatever environment (linux, mac, windows) is used to run jlink (to create a runtime image) and jpackage (to create the installer), is the package compile type that is being targeted for the end JRE. So, if this is not the goal, then one option might be to build for another OS using containerization. In other words, run this in docker (or something similar) for the target OS. Do not forget to consider the architecture! The target system might be arm64v8 or amd64 or whatever. If that is the case, do not build on a different machine and expect the installer to run. Find the correct build needs for the system first.

Now what we have all been waiting for,

```java
jpackage --type deb \
         --name daapp \
         --app-version 1.0.0 \
         --main-jar daprogram.jar \
         --main-class com.company.daapp.Application \
         --runtime-image /output/path/from/jlink \
         --output /path/to/output
```

| Arguments    | Description  |
|----------|:------------|
| --type <T> | the package type (deb, pkg, msi, etc.) |
| --name <N> | the app name |
| --main-jar <jar>| the main jar of the application |
| --main-class <class-path> | the main class to run |
| --runtime-image <path> | the path to the jdk runtime image (jlink output) |
| --output <path> | the output directory for jpackage |

That is all there is to building a simple installer for your program. 
There is more to learn about the topic, the information provided here is merely to get started.

Hope this content is helpful.  
Thanks for reading!