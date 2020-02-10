# VSFormatDisable

## What is it? 
VSFormatDisable is a VSCode extension to prevent auto-formatting from occurring in your files based on file extension. 

This is to prevent code bases being formatted in such a way that could cause errors for other members in your team who could be using an IDE or build that only accepts certain types of code formatting. 

## Devs

Make sure to run ```npm install``` when you clone the repo onto your machine, and please work in your own branch.

## Goals 
* To disable auto-formatting on a per file extension type basis
* Use the existing settings.json file for VSCode with the extensions selections/its' own .json file
* Flush out the README.md for the VSC extension once the extension is done to show how to use it and to explain what it is
* Publish on the extensions store in VSC 

## Challenges 
* How do we override other plugins/settings
* Recognizing file extensions
* Picking and choosing file extensions to disable formatting on
* How do we access the settings file from within the extension so that it does it automattically
* How will me make sure that the extension works with other types of formatters rather than the VSC default 

## Icebox 
* Toggle boxes rather than a .json files with extension types
* Ensure compatibility with formatting addons such as tslint etc

## Technologies used
* Yo generate-code 
* TypeScript
* VSC extension API

