---
marp: true
---

<style>
section {
  background: gray;
  color: white;
},
h1 {
    color: #c678dd;
}
</style>

# VSFormatDisable

### An exercise in frustration. But also a VS Code extension.
***
## Problem
### VS Code autoformats java code, this is a problem.
***
## Solution
### Turn that off by adding this to your user settings.json

 "[java]": {
 "editor.formatOnSave": false
 }

***
## Easy right? 
## But what if it was easier? 
***
# It's not.
***
##### Jon and I embarked on a 3 day google odyssey. 
##### We wanted to create an extension to allow us to change the auto formatting settings for VS Code with ease.

##### To find that one piece of code that would make it all happen in the extension the way we wanted it to, which we eventually found

# Here.  

***
![here](https://i.imgur.com/vcTc7R3.png)

*** 
# Use my extension
![install it](https://i.imgur.com/P7hX3Tw.png)

