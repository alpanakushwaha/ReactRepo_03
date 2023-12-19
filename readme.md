```javascript
 const div = (
   <div className="title">
     <h1>This h1 is React Element written in JSX.</h1>
     <h2>This h2 is React Element written in JSX.</h2>
     <h3>This h3 is React Element written in JSX.</h3>
   </div> // jsx expression
 );
 root.render(div);
 ===========================================

 const HeaderComponent0=()=>{
   return (<div className="title">
     <h1 className="headerOne" key="keyOne"> heading 1 inside functional Component named HeaderComponent.</h1>
     <h2 className="headerTwo" key="keyTwo"> heading 2 inside functional Component named HeaderComponent.</h2>
     <h3 className="headerThree" key="keyThree"> heading 3 inside functional Component named HeaderComponent.</h3>
   </div>)
 }

 root.render(<HeaderComponent0/>);
=====================================================

 const divider = (
   <div id="JSX_div" className="JSX_title">
     <h2>This h2 is React Element written in JSX.</h2>
     <h3>This h3 is React Element written in JSX.</h3>
   </div>
 );

 const TitleComponent2 = () => <p> interesting stuff</p>;

 const Div2 = () => (
   <div className="FC_title">
     <h2 id="FC_div">Divider Functional component </h2>
   </div>
 );

 var abc = 223;

 const data=api.getData();   // suppose // dummyAPI

 const HeaderComponent = () => {
   return (
     <div>
       {/* {data} */}
       {/* <h1>Functional Component !!!</h1> */}
       {/* {divider} */}
       {<TitleComponent2></TitleComponent2>}
       {TitleComponent2()}
       <TitleComponent2/>
       {<TitleComponent2/>}
       {/* <h2>Functional Component !!!</h2> */}
       {/* <Div2 /> */}
       {/* {Div2()} */}
       {
         any Javascript code inside this
         only a single line of JS code normally
        // console.log("this is JS code inside JSX {} ");
        // console.log(abc)
        // alert("single line of JS code inside JSX {}")
      }
      {/* <p>lorem2</p> */}
    </div>
  );
};

// root.render(HeaderComponent());
root.render(<HeaderComponent />);
--------------------------------------------------------------------

 16 Apr 2023

const h1 =React.createElement("h1",{key:"heading1"},"heading 1 using React.createElement.")
const h2 =React.createElement("h2",{key:"heading2"},"heading 2 using React.createElement.")
const h3 =React.createElement("h3",{key:"heading3"},"heading 3 using React.createElement.")
const div =React.createElement("div",{className:"title", key:"divider"},[h1,h2,h3])


console.log(div);

root.render(div)


// Array.map()  // polyfill // mordern Js is converted to older JS

// function myFun()// older code==> babel

// babel => package/ library / actually compiler // transpiler
```

---

date: 19 Dec 2023

> > Episode 02(Live- recorded) Igniting our App

- Bundlers ... Parcel, Webpack, Vite
- responsibilities of Parcel(Bundler=>package=>module)
  - parcel provided server (http://localhost:1234)
  - Hot module replacement
  - File watching algorithm- C++
  - image optimization
  - Caching while development (\* building takes more time, then .parcel-cache => the space/ memory for parcel to execute in much lesser time)
  - minified files (html, css, js)=> removes the console.log
  - cleaning the code / _Code splitting_
  - Dev and production build
  - compatible with older versions of browser (babel/browserlist)
  - supports HTTPS on dev
  - also handles multiple ports
  - _*Consistent hashing algorithm*_
  - Zero config
  - transitive dependencies (dependency tree exists)
  - tree shaking (removing unused code)

\*\* Since the js file has 'import', importing does not happens in normal js files, Importing happens when the file is a module type(mini-pkg). (_search all script types_)

---

### Episode 03 : Laying the Foundation

> > Array.map() // polyfill // mordern Js is converted to older JS

> > function myFun()// older code==> babel

> > reconcilliation algo (for unique keys)
> > Diffing algo

> > render .. is updating things in DOM
> > rerender .. is react changes the whole DOM tree after first render

> > babel => package/ library / actually compiler // transpiler => uses 'browserList'
> > AST

> > **JSX** => React.createElement => Object => HTML(DOM)
>> JSX is syntactical sugar for Developers

>> BAbEl comes along with parcel