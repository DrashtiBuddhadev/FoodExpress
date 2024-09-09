// import { FaSearch } from "react-icons/fa";
// import { useState } from "react";

// const SearchBar = () => {
//   const [searchText, setSearchText] = useState("");
//   return (
//     <div className="search-container">
//       <input
//         type="text"
//         className="search-input"
//         placeholder="Search for restaurants and food"
//         value={searchText} //this value is tied to searchText local state variable. the text won't change even if we type
//         onChange={(e) => {
//           setSearchText(e.target.value);
//         }} //this function will change the value of input field when we type something
//         //in turn it basically updates the searchText variable nd so the value also changes
//         //with onChange we are changing the value of local state variable resulting in rerendering of entire component.
//       />
//       <button className="search-button">
//         <FaSearch className="search-icon" />
//       </button>
//     </div>
//   );
// };

// export default SearchBar;
