import './App.css';

const Person = (props) => {
  return (
    <>
      <h1>Name : {props.name}</h1>
      <h2>Last Name : {props.lastname}</h2>
      <h2>Age : {props.age}</h2>
    </>
  )
}

const App = () => {
  return (
    <div className="App">
      <Person 
        name="John" 
        lastname="Doe" 
        age={25} 
      />
      <Person 
        name="Mary" 
        lastname="Doe" 
        age={30} 
      />
    </div>
  );
}

export default App;
