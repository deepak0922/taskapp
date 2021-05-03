import React from "react";
import './UserInterface.css';
import levellogo from './images/levellogo.png'

const UserInterface = () => {
  return (
    <div>
      <img src={levellogo} alt="Level Logo" />
        <form action="">
            <h1>LEVEL UP your positivity</h1>
            <p>What's weighing you down? <i class="material-icons">&#xe001;</i></p> 
            <input type="text" placeholder="Type here"/><br/>
            <button>&#128522;Self</button><br/>
            <button>&#128106; Family & Friends</button><br/>
            <button>&#129505;Love</button><br/>
            <button>&#128193;Work</button><br/>
            
        </form>
    </div>
  );
};
export default UserInterface;
