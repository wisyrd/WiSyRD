# WiSyRD

[![MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[WiSyRD](https://wisyrd.herokuapp.com/)

![Imgur](https://i.imgur.com/YWSE41s.png)

## Description

Dungeons and Dragons is great, but the amount of information needed to make a character and run a campaign is unwieldy. Character sheets are useful for writing down all of that info but their large size and somewhat odd formatting can make finding the necessary info during a critical roll impossible. Enter WiSyRD: Widget Systems for Roleplaying Data. WiSyRD replaces the cluttered character sheet with a set of movable widgets. If you don't want to stare at the super-long spells list while in a non-combat stretch of the campaign, you can move it out of sight. You're in control of where your character's information is.

The widgets speak to each other, too! Modifying your character's attributes will automatically modify your skills. Increasing your level as a magic class will instantly add the correct number of spell slots. WiSyRD has all the useful functionality of D&D Beyond and Roll20's character sheets, but with a level of customizability greater than either system. Find out the power of WiSyRD by opening the app here: (https://wisyrd.herokuapp.com/).

## Table of Contents

* [Usage](#usage)
* [Technologies](#Technologies)
* [Collaborators](#collaborators)
* [Future](#future)
* [Questions/Contributions](#Questions/Contributions)
* [License](#license)

## Usage 

[WiSyRD](https://wisyrd.herokuapp.com/) is the login page for WiSyRD. It should look like the following screenshot:

![Login](https://i.imgur.com/oah0fc7.png)

Now, if this is your first time here, you'll want to register a new account by clicking this button on that login page:

![Registration-Button](https://i.imgur.com/QJ5Jc5k.png)

That'll take you to the registration page, as seen below:

![New-Account-Page](https://i.imgur.com/a0ADI4F.png)

To make a new account, we just need a username, email, and password. Once you fill out the necessary fields, hit the "create account" button, and it'll take you back to the login page where you should input your email and password. That will take you to the user dashboard which will have a list of all of your characters and a link to each of their associated widgets. It will look like my dashboard below when populated.

![User-Dashboard](https://i.imgur.com/qa30ovW.png)

Whenever you want to make a new character, just hit the "New Character" button at the bottom. But hitting the "Select Character" link will take you to where the magic happens... the widgets. At first glance, the widgets page is a little overwhelming, I understand. But the widgets are really straightforward to use. They each come with their own tutorial for how to use. Just click the button in the upper-left corner of a widget to open a tutorial.

![Tutorial-Button](https://i.imgur.com/AOzMT2o.png)

The real great thing about the widgets is that they can be dragged and dropped wherever you want. Grab onto the top bar of a widget and then move it around. It'll snap into place when you release your mouse/index finger because WiSyRD is mobile-friendly. 

## Technologies

WiSyRD is built on [React](https://reactjs.org/). It uses [Rebass](https://rebassjs.org/) for basic components and functionality, [Emotion Theming](https://emotion.sh/docs/theming) for styling, and the [React-Grid-Layout](https://github.com/STRML/react-grid-layout) React library for its drag-and-drop widget system. For the back-end, WiSyRD uses a [Mongo database](https://www.mongodb.com/) that is connected to the front-end via [Node](https://nodejs.org/en/) and [Express](https://expressjs.com/). Calls to the database are made via [Axios](https://www.npmjs.com/package/axios). The information that the spellbook widget uses came from [dnd5eapi](https://www.dnd5eapi.co/).

## Collaborators

Jacob Cowan: https://mrjcowman.github.io/

Quint Turner: https://pungry.wordpress.com/

Evan Kirkland: https://github.com/EvanK311

Magnus Appel: https://github.com/Magnus-Jay

Alex Milroy: https://github.com/ajm5099

## Future

At its core, WiSyRD is a set of adaptable, drag-and-drop widgets that can have their contents customized for any tabletop game, not just for 5th Edition Dungeons and Dragons. As of right now, the default widgets are made for keeping track of a character in a 5th Edition campaign. Our first plans are to make the WiSyRD widget grid usable for DMs that want to keep track of their own NPC or monster info by adding in the ability to add and remove widgets from the page. After that, we hope to bring WiSyRD to any and all tabletop games that require a hefty amount of tracked information for play, and adjust the game mechanic widgets as needed.

## Questions/Contributions

For any questions or ideas for contributions, please find us on GitHub or reach out by email. Also, if you're the maker of a cool tabletop RPG that wants a customized widget for your own game, we can collaborate. Reach us by the emails below: 

[Quint Turner](mailto:henryquintturner@gmail.com)

[Jacob Cowan](mailto:Mrjcowman@gmail.com)

[Evan Kirkland](mailto:EvanK311@gmail.com)

[Magnus Appel](mailto:magnus86@uw.edu)

[Alex Milroy](mailto:amilroy@gmail.com)

## License 

Copyright 2020 
        
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
        
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
        
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.