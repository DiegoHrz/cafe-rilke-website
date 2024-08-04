// 'use client'
// import "./styles.css";
// import { AnimatePresence, motion } from "framer-motion";
// import { useState } from "react";

// export default function Carousel() {
//   const [[activeIndex, direction], setActiveIndex] = useState([0, 0]);
//   const items = ["🍔", "🍕", "🌭", "🍗", "🍜", "🥠"];

//   // we want the scope to be always to be in the scope of the array so that the carousel is endless
//   const indexInArrayScope =
//     ((activeIndex % items.length) + items.length) % items.length;

//   // so that the carousel is endless, we need to repeat the items twice
//   // then, we slice the the array so that we only have 3 items visible at the same time
//   const visibleItems = [...items, ...items].slice(
//     indexInArrayScope,
//     indexInArrayScope + 5
//   );
//   const handleClick = (newDirection) => {
//     setActiveIndex((prevIndex) => [prevIndex[0] + newDirection, newDirection]);
//   };



//   return (
//     <div className="main-wrapper overflow-x-hidden py-10 relative">
//       <div className="wrapper ">
//         {/*AnimatePresence is necessary to show the items after they are deleted because only max. 3 are shown*/}
//         <AnimatePresence mode="popLayout" initial={false}>
//           {visibleItems.map((item) => {
//             // The layout prop makes the elements change its position as soon as a new one is added
//             // The key tells framer-motion that the elements changed its position
//             return (
//               <motion.div
//                 className="card mx-10"
//                 key={item}
//                 layout
//                 custom={{
//                   direction,
//                   position: () => {
//                     if (item === visibleItems[0]) {
//                       return "left";
//                     } else if (item === visibleItems[2]) {
//                       return "center";
//                     } else {
//                       return "right";
//                     }
//                   }
//                 }}
//                 variants={variants}
//                 initial="enter"
//                 animate="center"
//                 exit="exit"
//                 transition={{ duration: 1 }}
//               >
//                 <div className="">
//                   <div className='text-xs'>hola</div>
//                   <div>{item}</div>
//                   <div className="absolute top-0 transform left-1/2 -translate-x-1/2 h-48 w-48 "><img src="/assets/best-sellers/best-seller-1.webp" alt="" /></div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </AnimatePresence>
//       </div>
//       <div className="">
//         <motion.button
//           whileTap={{ scale: 0.8 }}
//           onClick={() => handleClick(-1)}
//           className="buttons"
//         >
//           ◀︎
//         </motion.button>
//         <motion.button whileTap={{ scale: 0.8 }} onClick={() => handleClick(1)}>
//           ▶︎
//         </motion.button>
//       </div>
//     </div>
//   );
// }

// const variants = {
//   enter: ({ direction }) => {
//     return { scale: 0.2, x: direction < 1 ? 50 : -50, opacity: 0 };
//   },
//   center: ({ position, direction }) => {
//     return {
//       scale: position() === "center" ? 1 : 0.8,
//       x: 0,
//       zIndex: getZIndex({ position, direction }),
//       opacity: 1
//     };
//   },
//   exit: ({ direction }) => {
//     return { scale: 0.2, x: direction < 1 ? -50 : 50, opacity: 0 };
//   }
// };

// function getZIndex({ position, direction }) {
//   const indexes = {
//     left: direction > 0 ? 2 : 1,
//     center: 3,
//     right: direction > 0 ? 1 : 2
//   };
//   return indexes[position()];
// }
