// The props variable is an object containing the welcomeClass helper method on the clickHandler property
function Greeting(props) {
  const welcomeStudent = () => {
    alert(`Welcome, Farley!`)
  }

  return (
    <div className="container text-center">
      <div className="list-group">
        {/* In React, we can directly attach event listeners to the to the relevant markup */}
        <button 
          onClick={props.clickHandler} 
          className="list-group-item list-group-item-action list-group-item-info" 
          aria-current="true"
        >
          Greet the Students!
        </button>
        <button 
          onClick={welcomeStudent} 
          className="list-group-item list-group-item-action"
        >
          Farley
        </button>
      </div>
    </div>
  );
}

export default Greeting;
