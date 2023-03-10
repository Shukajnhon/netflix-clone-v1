// import React, {useState} from "react";
// import {BASE_IMG_URL} from "../../utils/Constants";
// import IconCheckCircle from "../icons/IconCheckCircle";
// import IconChevronDown from "../icons/IconChevronDown";
// import IconHandThumbUp from "../icons/IconHandThumbUp";
// import IconPlayCircle from "../icons/IconPlayCircle";
// import IconPlusCircle from "../icons/IconPlusCircle";

// const CardModal = ({movies, genres}) => {
//   const [addMovie, setAddMovies] = useState(false);
//   const [hovered, setHovered] = useState(false);

//   // ToggleAddMovie func
//   const handleToggleAddMovie = () => {
//     setAddMovies(!addMovie);
//   };

//   // SetTimeout delay when hover
//   const delay = 700;
//   let timer = 0;
//   // const timerHover = (delay) => {
//   //   const timer = setTimeout(() => {
//   //     console.log("timer");
//   //     setHovered(true);
//   //   }, delay);
//   //   return timer;
//   // };

//   // const [isHovered, setIsHovered] = useState(false);
//   // console.log("movies:", data);
//   const {genre_ids, id} = movies;
//   // console.log("id:", id);

//   // console.log("genre_ids:", genre_ids);

//   return (
//     <div
//       className="flex flex-col group"
//       onMouseEnter={() =>
//         (timer = setTimeout(() => {
//           setHovered(true);
//         }, delay))
//       }
//       onMouseLeave={() => {
//         clearTimeout(timer);
//         setHovered(false);
//       }}
//     >
//       <h1>title</h1>
//       <img
//         className="z-10 rounded-md md:h-full md:w-full "
//         src={`${BASE_IMG_URL}/w500${movies.backdrop_path}`}
//         alt=""
//       />

//       <div
//         className={`hover z-30 bg-[#181818] h-max w-[20rem] absolute top-[-10vh] left-0 rounded-md shadow-lg invisible ${
//           hovered ? "md:group-hover:visible md:group-hover:animate-zoomOut" : ""
//         }`}
//       >
//         {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/IJsiX3z9WvM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
//         <div>
//           <div className="card-container relative h-[170px]">
//             <img
//               className="z-10 w-full h-full rounded-t-md "
//               src={`${BASE_IMG_URL}/w500${movies.backdrop_path}`}
//               alt=""
//             />
//             {/* <iframe
//                   className="absolute top-0 z-20 object-cover w-full rounded-t-md"
//                   width="260"
//                   height="171"
//                   src={`https://www.youtube-nocookie.com/embed/IJsiX3z9WvM?autoplay=1&mute=1`}
//                   allowFullScreen
//                 ></iframe> */}
//           </div>

//           <div className="flex flex-col gap-2 px-4 pb-4 pt-2 info-container h-[171px] z-30">
//             <h3 className="">{movies.name || movies.title}</h3>
//             <div className="flex justify-between pt-2 icon">
//               <div className="flex w-6 h-4 gap-4 controls">
//                 <span className="controls-icon">
//                   <IconPlayCircle></IconPlayCircle>
//                 </span>
//                 <span onClick={handleToggleAddMovie} className="controls-icon">
//                   {!addMovie ? (
//                     <IconPlusCircle></IconPlusCircle>
//                   ) : (
//                     <IconCheckCircle></IconCheckCircle>
//                   )}
//                 </span>
//                 <span className="controls-icon">
//                   <IconHandThumbUp></IconHandThumbUp>
//                 </span>
//               </div>
//               <div className="info">
//                 <IconChevronDown></IconChevronDown>
//               </div>
//             </div>

//             <div className="flex mt-4 genres">
//               <ul className="flex flex-wrap gap-4">
//                 {/* {genres.map((genre, index) => {
//                   if (genre.id === genre_ids[0]) {
//                     return (
//                       <li key={index} className="pr-3">
//                         {genre.name}
//                       </li>
//                     );
//                   }
//                   if (genre.id === genre_ids[1]) {
//                     return (
//                       <li key={index} className="pr-3">
//                         {genre.name}
//                       </li>
//                     );
//                   }
//                   if (genre.id === genre_ids[2]) {
//                     return (
//                       <li key={index} className="pr-3">
//                         {genre.name}
//                       </li>
//                     );
//                   }
//                 })} */}
//                 {/* <li className="pr-3">action</li>
//                     <li>action</li>
//                     <li>action</li> */}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CardModal;
