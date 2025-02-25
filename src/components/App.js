import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import user from "../data/user"
// pass this data down as props to the child component(s) that need it!
// console.log(user);

// function App() {
//   return (
//     <div>
//       <NavBar/>
//       <Home name={user.name} city={user.city} color={user.color}/>
//       <About bio="I made this" />
//       </div>
//   );
// }
// export default App;
function App() {
  return (
    <div>
      <NavBar/>
      <Home
        color={user.color}
        name={user.name}
        city={user.city}
      />
      <About
      bio={user.bio}
      />
    </div>
  );
}

export default App;
