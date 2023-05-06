import './App.css';

const App = () => {
  const name = "Jane"

  return (
    <div className="App">
      <h1>Hello, {2 + 2} !</h1>
      {name ? (
        <>
          {name}
        </>
      ) : (
        <>
          <h1>Name is not defined</h1>
          <h1>There is no name</h1>
        </>
      )}
    </div>
  );
}

export default App;
