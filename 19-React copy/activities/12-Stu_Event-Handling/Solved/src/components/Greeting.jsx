function Greeting() {
  // welcomeStudent is a helper function which takes in a studentName parameter and uses it to alert a string
  const welcomeStudent = (studentName) => {
    alert(`Welcome, ${studentName}!`)
  }

  return (
    <div className="container text-center">
      <h2>Welcome the Students!</h2>
      <div className="list-group">
        {/* When an event listener function in react needs to receive an argument, you must be sure to pass a callback function which the browser can invoke asynchronously. */}
        {/* Remember in the DOM unit earlier in the boot camp, a similar rule applied: when referencing a named callback function, you do not invoke with () on definition of the event listener. */}
        <button 
          onClick={function(){welcomeStudent('Farley')}} 
          className="list-group-item list-group-item-action"
        >
            Farley
        </button>
        <button 
          onClick={() => welcomeStudent('Asher')} 
          className="list-group-item list-group-item-action"
        >
            Asher
        </button>
        <button 
          onClick={() => welcomeStudent('Sage')} 
          className="list-group-item list-group-item-action"
        >
            Sage
        </button>
      </div>
    </div>
  );
}

export default Greeting;
