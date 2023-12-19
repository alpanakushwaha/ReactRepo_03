# NamasteReact by Akshay Saini 
---

# 10/ Apr/ 2023  (Chap_01- Inception on 24/Dec/2022)
===

>> React is lib or framework?
	>> React is library (i.e. very easy to include in a project)
	>> ex.	owl-carousel is a library.
>> Framework > needs routing, etc..
>> Emmet? emits a lot of code for the coder for a shortcut-code.

>> Namaste React using HTML.
>> Namaste React using Javascript.
	>> given id=root

>> how does browser get to know what is document, createElement 
	bcz browser knows about API, JS Engine	

>> CDN links? these links and React is written by Facebook developers
>> crossOrigin?

>> shortest program of React.
	>> also provides react utilities.	
	>> react is a global object

	>> React on Console
	>> ReactDOM on Console
	
>> Why React and ReactDOM?
	>> @18=> vresion
	>> ReactDOM=> web-version of React
	>> React Native

>> "React" in React.createElement refers to the core of react that does not changes

>> ReactDOM.createRoot	>> here, ReactDOM, 
bcz using this, the DOM is being manipulated or reading the DOM 

>> React can exist without TypeScript, JSX and Redux.

>> HTML Tags => React Element => are Objects, by react library
 taking the arguments and making an object

>> can change the content of tag appended with root.render
	>> ex. root.render(heading.innerHTML="heading1234")


>> can we have multiple root?
	>> only 1 root and 1 render.
>> root is the place where React runs

> {} is called PROPS => attributes as in HTML-tag

>> React will overwrite, whatever is present inside root in HTML file.

>> Order of scripts matters

>> Not rendered >> for any kind of error

>> Network >> status 200 


>> BE CURIOUS!!!!!!!!1

>> Async and defer.

>> rendering nested content inside root element, passing children

>> React is an attempt to write HTML and CSS inside Javascript 

>> React.createElement() is an API
>> ReactDOM.createRoot() is an API.


>> JSX makes writing code more easy, it is not a mandatory for
 React to work

>> React.development.js  V/s React.production.js


===

# 25th Dec 2022 (The Valuable Chit-chat session, live class ruined by me)
------------------
>> how does JS knows about function Keyword? => by JS Engine

>> DS for memory storage >> mem heap
>> anonymous function
>> function expression

// in ES6
>> arrow function
	-> this of its lexical parent

>> console.log(this)
=====
const obje={
  fn:function () {
    console.log(this);
  },
  func2: ()=>{
    console.log(this);
  }
}
obje.fn() // object
obje.func2() // window object

========================

function x() {
  console.log(this);
  function y() {
    console.log(this);
  }
  y(); // window
}
x();	// window

================================

const person = {
  name: "Akshay",
};

const person2 = {
  name: "anyname",
};

function x() {
  console.log(this);
}

x.call(person); // Akshay
x.call(person2); // anyname
x.call(this);	// window
x();		// window

==================================
const person = {
  name: "Abc",
  print: function x() {
    console.log(this);
  }
};

const person2 = {
  name: "jkl",
};


person.print()	// person{name, print}
person.print.call();	// window
person.print.call(this);// window
person.print.call(person2) // jkl

===================================

// CALL(),  APPLY(), BIND()

===================================

const obj ={
  firstName: "Akshay",
  print:()=>{
    console.log(this.firstName);
    console.log(this);
  },

  print2:function(){
    console.log(this.firstName);
    console.log(this);
  }

}
obj.print()	// undefined // window
obj.print2()// Akshay // obj{firstname, print:fn, print2:fn}
obj.print.call() // undefined // window
obj.print2.call()	// undefined // window

// Interview Prep Tips

====
# 11/ Apr/ 2023  (Chap_02 Igniting our App, 31/Dec/2022)
====

>> building React App
--------------------------
>> window given by JS Engine
>> access to react and reactDOM given by react library
>> React.createElement.( type/ tag-name, props/ attribute, children)
>> to make the app a production ready app, need to minify, optimise, clearing 
	console.log(), 

>> Bundlers
	>> webpack, vite, parcel
>> package manager  >> npm, yarn, 
>> npm expansion >> github contribution >> 

=>to initialize npm >> npm init => asks for options one by one, like,
 test, author-name, git, ISC , Keywords(tags)
>> also >> npm init -y => without asking for options, says YES to proceed

	>> package.json is created after initialising npm

>> why do we need NPM in the app?	
	>> because, app needs a lot of helper packages other than 
	React, those are managed by npm like, bundling, minifying, 
	remove console.log, optimise the app.

>> package.json	>> main: indicates the entry point to the project
			i.e. index.html or any html file that the 
			developer gives

>> parcel is a BEAST!!!
	>> to get parcel in our App by 	
	>> npm install -D parcel
		>> -D is (flag) dev-dependency == --save-dev
		>> for project development purpose only, not for production purpose.


	>> dependency => all the packages that our App needs and is dependent on 
>> package-lock.json got added >> locks the exact version of all libraries/ packages

			>> never have to keep in .gitignore
			>> keep package-lock.json shd be kept on GIT, not in .gitignore
		>> integrity: hash ensures the same version present onlocal system
		v/s version running on production

>> package.json >> "parcel": "^2.8.2" >> this version and higher minor version w/o incrementing the major versions.
			>> or "~2.8.2">> this version and the next minor version
			>> or "2.8.2" >> exact version specified

>> node-modules (database of npm) got added 
	>> parcel present inside node-modules

>> when we are building a production ready app (that uses all 
minification , bundling, image optimisation, caching..) , package
 dependent on another and that on another package is known as 
TRANSITIVE-DEPENDENCY 
		
>> NODE_MODULES is very heavy!!!
	>> therefore shd not put on git
>> package.json and package-lock.json can regenerate NODE-MODULES

>> REACT is NOT a monster!!!!

>> if react version changes to higher, then need to change the CDN 
link in script tag again and again

>> node-modules is present in our local server
=> to install react and reactDOM in out project
	>> npm i react >> for production (dependency only) purpose (as -d in not mentioned)
	

=> npm i react-dom to install react-dom 

>> to ignite the app,  
	>> "npx parcel index.html"
	>> npx (execute)
	>> index.html (entry-point)

>> error >> tells browser script can't have import or export, bcz 
	Javascript browser file doesn't understand import or export 

	>> how to export react? can't , so NEVER touch node-modules

>> script tag in HTML file>> script has "import" written, so, now the
	 script is a module now, no longer a script file

	>> type="module"
	>> react-dom/client

>> reflection of changes on server automatically => live-server>> HMR

>>parcel responsibilities

   >> "hot module replacement" 
   >> changes made in any file is observed by "File watchers algo"
	 written in C++
   >> image optimisation
   >> product optimization: includes tree shaking, minifying JS, CSSS and HTMl, resizing 
	and optimizing images, content hashing, automatic code splitting..
   >> caching while development (therfore, time reduced=> fast)
   >> backward compatibility
   >> manages the port numbers also
   >> consistent hashing algo to parse things up
   >> parcel is zero-config bundler=> on using a file type thet isn't included by default
	Parcel will automatically install all of the necessary plugins and dev dependencies.
	=> this is known as ZERO-CONFIG in parcel
   >> created a Server
   >> code splitting
   >> tree shaking => since only few of the library functions are actually used,
	so, removing the un-used library functions is called tree shaking, 
   >> Scalable


>> parcel-cache => space for parcel changes/ execution


>> dist	>> keeps the files minified for us
	
	>> when "npx parcel build index.html" is executed, then
	parcel creates a development-built (version of our project) and
 host on our server
	>> where is the build pushed? it is pushed to dist folder

=> error, so need to remove 'main: "script.js"' from package.json

>> now 3 files got created. (whatever files present and written by developer
		html, js and css file in minified version got created)

>> execution time reduced for 'production build' when compared to 
	'development build'
>> the production build has come to our website

>> most heaviest thing when we load our project on server => images/videos/etc.

>> HTTP
>> somethings (images, audio, video, etc.) only work on HTTPS
	=> so parcel allows us to do this also
	=> by "npx parcel index.html --https"
	
>> parcel.cache shd be put in .gitignore => bcz it is a small file,
=> bcz anything that is auto-generated (re-generate) on server can be put on .gitignore

>> why are react app performant??
=> bcz of npm that manages all the packages, parcel(bundler), node-modules
========================
>> read parcel doc
==========================

>> bundlers minify 

>> how to make the app work on internet-explorer/ other browsers??
=>> browserlist	>> type/ add in package.json 
=>> "browserslist":["last 2 versions"] or["last 2 chrome versions"]


====================================
browserlist.dev , query composition

>> example: "last 2 Chrome versions" means the app will "surely" work on
	last 2 versions of chrome. It can also work on other versions of
	and other browsers also. 

======================
=> script types in HTML => MDN docs
===

# 12 Apr 23 (Chap_03 Laying_the_foundation 01/Jan/2023 )
=============
>> Polyfill => piece of code for other browsers to provide a 
	particular functionality, that do not support natively.
	=> replacement code for older version of browsers.

	>> example 1: there is a function Array.map() which might 
	be new for some older browsers.
	>> so, polyfill will create/ write an older versions of 
	code of same functionality for older browser.
	
	>> example 2: const, let these are versions are new
 for many old versions of browsers,
	
	>> this polyfilling is done by "Babel"
	>> Babel uses "browserList" 

>> .gitignore file by => git init => makes the repository compatible with git, 
	for all kind of interactions such as, git pull, git push, branching, 
	reWriting History, undoing changes etc..

>> Q. How can you build a performant web scalable app?
	>> React, Bundlers

========================================

>> to avoid configuring the file evrytime, 
	script inside package.json is added as follows
	=> "start":"parcel htmlFile.html"
	
	>> now run the project using		
		>> 'npm run start'


	=> "build":"parcel build htmlFile.html"
	
	>> now build the project using		
		>> 'npm run build'

> Q>> why skipped npx?
   >> executing npm using >>'npm run start', that's why
	'npx'=='npm run'

	
>> shortcut to 'npm run start' => 'npm start'

==================================================

>> console.log are not removed by itself, 
	>> we have to configure to remove console.log
	=> using 'babel plugin transform remove console'
================================

>> .babelrc >> is a configuration file
	=> plugins added in .babelrc file 

============================================

>> in case of multiple children for any reactElement, unique 
	"KEYS" shd be there for all children
=>> error of "unique key" prop	
	>> key uniquely IDENTIFIES the child-element


	>> why? React Reconciliation key

>> why key is required in props of react-Element?

	reactjs.org/docs/reconcilliation.html

	>>> diffing
	>> appending an element in html within a div or ul etc,
		> appending will be easy bcz append means 
adding at last as its(div or ul..) children (i.e the last sibling)
	>> but, adding an element at the first needs 
reOrganising each element already present,
 everytime react 're-renders' everything

	

	>> with the unique key specified, it becomes 
easy for react to add the elements without much effort
	=> react keeps a track of 'key' 

=============================================================
>> react -> import react-> node module



>> Q. how does React.createElement work?
	
	>>import React from "react";
	>> import { createElement } from "react";
	>> import { createElement as ce } from "react";

>> React creats an object, this object is converted into HTML, then rendered
 by ReactDOM that inturn converts into HTML >> rendered by ReactDOM, 
	then JS-Engine takes on the further task
 of creating memory-context and code-execution context... 



>> Q. is JSX HTML inside javascript?
	>>JavaScriptXml
	>> no
	>> facebook devs developed JSX
	>> JSX is HTML like syntax => bcz, <image> tag is "self closing",
	 but in this JSX code, image tag has seperate "opening" and "closing" tag


>> React has the concept of writing everything in JavaScript,
 even the HTML code and CSS code in Single file of Javascript itself.

>> how does JS recognises the HTML-like syntax?



>> Q. HTML vs JSX??

>> Q.  HTML v/s XML?

 HTML displays data and describes the structure of a webpage, 
whereas XML stores and transfers data



>> tabIndex?????????

	>> 
	>> eg. tabIndex="0"
	>> eg. tabIndex="-1"

>> Babel=> is a JS Compiler
=>> creates AST (Abstract Syntax Tree )

===> JSX => React.creatElement => Object => HTML(DOM)
	>> JSX advantages. readability, syntactically easy, modularity, less code
developer friendly
-----------------------------------------

>> Babel compiles JSX for React

---------------------------------------------

>> Q. Advantages of JSX?
	>> easy to write code, 
	>> easy to understand, coders friendly
	>> less code than react code
	>> Readability
	>> syntactical sugar
	>> maintainability
	>> no repeatation

--------------------------------------------
>> any code should always be developer friendly.



----------------------------------------------------

>> How to write all tags in JSX, like .. className, image tag, 
>> usage of JSX


>> JSX expression:
 eg:	const heading2 = (
  <h1 id="title2" key="h2" className="clsHeading">
    Namaste React !!!!!!!
  </h1>
);

=======
>> React Component

	=> navbar, logo, search bar.. etc..

	1>> functional Component- New
	2>> Class based Component- Old
-------------------------------------------------------------
>> Functional Component>> returns some piece of react Element
			>> returns some piece of JSX 

>> Functional component is a normal function.
	=> functional component returns piece of JSX code, React.createElement
	=> "function that returns the JSX code => is Functional Component"


=> naming-convention for functional component=> starts with capital letter

// syntax to render functional component
root.render(<HeaderComponent/>);
 
========

>> writing an ReactElement inside a React Component by?
	1. >> React_component=()=>{
		{reactElement}
	<h1>Hello</h1>

	}

		OR 
=====
	1. >> 
convert the ReactElement also as ReactComponent and put it inside 
the specific React Component => Composition of Component (i.e. FC inside FC )



=========
	>> {any JS code } => >> called as cross-site scripting(XSS)


	=>> JSX makes sure that the website is very secure

	 >> sanitisation
	=>JSX escapes any kind of XSS-attacks


























