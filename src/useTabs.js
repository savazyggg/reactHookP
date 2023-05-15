// import { useEffect, useState } from "react";
// import React from "react";
// import UseInput from "./useInput";

// const content = [
//   {
//     tab: "section 1",
//     content: "i'm the content of the section 1"
//   },
//   {
//     tab: "section 2",
//     content: "i'm the content of the section 2"
//   },
//   {
//     tab: "section 3",
//     content: "i'm the content of the section 3"
//   }
// ];

// const useTabs = (init, all) => {
//   if (!all || !Array.isArray(all)) {
//     return;
//   }
//   const [currentIndex, setCurrentIndex] = useState(init);
//   return { currentItem: all[currentIndex], changeItem: setCurrentIndex };
// };

// export default function App() {
//   // const maxLength = (value) => !value.includes("@");
//   // const name = UseInput("Mr.", maxLength);

//   const { currentItem, changeItem } = useTabs(0, content);

//   return (
//     <div className="App">
//       {content.map((section, index) => (
//         <button onClick={() => changeItem(index)}>{section.tab}</button>
//       ))}
//       <div>{currentItem.content}</div>
//     </div>
//   );
// }
