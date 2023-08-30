import React from "react";
import ReactDOM from "react-dom/client";

let root = ReactDOM.createRoot(document.getElementById("root"));

// const div = (
//   <div className="title">
//     <h1>This h1 is React Element written in JSX.</h1>
//     <h2>This h2 is React Element written in JSX.</h2>
//     <h3>This h3 is React Element written in JSX.</h3>
//   </div> // jsx expression
// );
// root.render(div);
// ===========================================

// const HeaderComponent0=()=>{
//   return (<div className="title">
//     <h1 className="headerOne" key="keyOne"> heading 1 inside functional Component named HeaderComponent.</h1>
//     <h2 className="headerTwo" key="keyTwo"> heading 2 inside functional Component named HeaderComponent.</h2>
//     <h3 className="headerThree" key="keyThree"> heading 3 inside functional Component named HeaderComponent.</h3>
//   </div>)
// }

// root.render(<HeaderComponent0/>);
//=====================================================

// const divider = (
//   <div id="JSX_div" className="JSX_title">
//     <h2>This h2 is React Element written in JSX.</h2>
//     <h3>This h3 is React Element written in JSX.</h3>
//   </div>
// );

// const TitleComponent2 = () => <p> interesting stuff</p>;

// const Div2 = () => (
//   <div className="FC_title">
//     <h2 id="FC_div">Divider Functional component </h2>
//   </div>
// );

// var abc = 223;

// // const data=api.getData();   // suppose // dummyAPI

// const HeaderComponent = () => {
//   return (
//     <div>
//       {/* {data} */}
//       {/* <h1>Functional Component !!!</h1> */}
//       {/* {divider} */}
//       {<TitleComponent2></TitleComponent2>}
//       {TitleComponent2()}
//       <TitleComponent2/>
//       {<TitleComponent2/>}
//       {/* <h2>Functional Component !!!</h2> */}
//       {/* <Div2 /> */}
//       {/* {Div2()} */}
//       {
//         // any Javascript code inside this
//         // only a single line of JS code normally
//         // console.log("this is JS code inside JSX {} ");
//         // console.log(abc)
//         // alert("single line of JS code inside JSX {}")
//       }
//       {/* <p>lorem2</p> */}
//     </div>
//   );
// };

// // root.render(HeaderComponent());
// root.render(<HeaderComponent />);
//--------------------------------------------------------------------

//  16 Apr 2023

const h1 =React.createElement("h1",{key:"heading1"},"heading 1 using React.createElement.")
const h2 =React.createElement("h2",{key:"heading2"},"heading 2 using React.createment.")
const h3 =React.createElement("h3",{key:"heading3"},"heading 3 using React.createElement.")
const div =React.createElement("div",{class:"title", key:"divider"},[h1,h2,h3])


console.log(div);

root.render(div)


// Array.map()  // polyfill // mordern Js is converted to older JS

// function myFun()// older code==> babel

// babel => package/ library / actually compiler // transpiler