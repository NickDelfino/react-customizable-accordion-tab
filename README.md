# Table of Contents

- [Introduction](#Introduction)
- [Usage](#Usage)
- [Documentation](#Documentation)
- [Acknowledgements](#Acknowledgements)
  - [FontAwesome](#FontAwesome)
  - [How to Create an npm package article](#How-to-Create-a-React-Component-for-npm)

## Introduction

When working on my other GitHub project, [USBillTrack](https://github.com/NickDelfino/usbilltrack),
I created my own accordion system. I decided it might be useful
to break that specific component out into its own package for others to use. My goal is to make every part of
this customizable and add animation. This is currently just a single tab but can
be implemented as a full accordion widget. If there is interest, I could make such an example and maybe
turn that into its own package.

As of now, this project isn't on npm but the end goal is for this to be there.

## Usage

Since this isn't an npm package yet the following instructions detail how to connect
this npm package locally to a new test project.

<pre><code>
git pull https://github.com/NickDelfino/react-customizable-accordion-tab.git react-customizable-accordion-tab
cd react-customizable-accordion-tab
npm install
npm run build
npm link
npm start
</code></pre>

This starts up the webpack server. This will watch for updates and "reload" the project as necessary.
The changes will then show up in your test project.

The series of actions above sets up the package to be used by a local project for testing.
To setup a local project for testing, perform the following:

The first action back out of the newly created project directory.
<pre><code>
cd ..
create-react-app test-project
cd test-project
npm link react-customizable-accordion-tab
npm start
</code></pre>

The test project is now running the basic react app.

Now the component can be imported into the test project as you would any other npm package.

To understand more about this process please see the mentioned article in the [acknowledgements](#How-to-Create-a-React-Component-for-npm) section.

## Documentation
|Properties|Description|
|---|---|
|title (required)| Sets the title of the header. Can be either text or another component. |
|children (required, default)| Anything inside of the accordion component in the user's project will be added as content. This is what will be shown/hidden.|
|expanded | Boolean value which sets whether the content is shown or hidden. Content is hidden (false) by default.|
|accordionTabContainerStyle|Controls the style of the container for the entire component. Accepts reactjs style objects.|
|contentContainerStyle|Controls the style of the container for the content. Accepts reactjs style obejcts.|
|headerContainerStyle|Controls the style of the container for the header. Accepts |

## Acknowledgements

### FontAwesome
The included .svg icons for plus and minus come from FontAwesome 5.0. The npm FontAwesome package was not used to
keep this package light weight. The license for their usage can be found here: https://fontawesome.com/license.
No changes were made to these icons and the FontAwesome team do not endorse this project in any way.

### How to Create a React Component for npm
Thanks to this [Medium article](https://medium.com/@BrodaNoel/how-to-create-a-react-component-and-publish-it-in-npm-668ad7d363ce).
This article taught me the basics of creating my own npm package. I learned a lot from this article and used some of the instructions in the
usage section.