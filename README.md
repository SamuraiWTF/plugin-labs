# Plugin Labs

## Overview

The purpose of this project is to produce a series of web application scenarios for finding web application security flaws using 
an interception proxy (such as OWASP  ZAP or BurpSuite). The scenarios are mostly corner cases where the standard interception 
proxy functionality is insufficient, and therefore requires a custom plugin or extension. These scenarios can also be solved 
with custom scripts that run outside of the interception proxy.

## Running
The easiest way to use this lab is to run it in a Docker container. To do this, clone this repository then build and start 
the docker container. For example:

```
docker build -t plugin-lab . && docker run -p 127.0.0.1:8081:3000 plugin-lab
```

Then you should be able access the lab on port localhost:8081.

_Requires Docker_