import './App.css';

function App() {

  const name = 'Pedro'
  const newName = name.toUpperCase()
  const url = 'https://via.placeholder.com/150'

  const sum = (a, b) => {return a + b}

  return (
    <div className="App">

     <h2>Olá, {newName}</h2>
     <p>soma de 2+3 = {sum(2,3)}</p>

     <img src={url} alt="React" />
    </div>
  );
}

export default App;
