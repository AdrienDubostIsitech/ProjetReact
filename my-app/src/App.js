import logo from './logo.svg';
import './App.css';
import RotateItem from './components/Rotation'; 
import ButtonItem from './components/Button'; 

function App() {

  const texte = "RotateItem"; 
  const texte2 = "TransformItem"; 
  const texte3 = "ScaleItem"; 

  const clickHandler = () => {
    alert("You cliked on Me !!!"); 
  }

  return (
    <div className="App">
      <h2> Let's Get Started </h2>
      <RotateItem txt1 = {texte}
      txt2 = {texte2}
      txt3 = {texte3}>
      </RotateItem>
      <ButtonItem></ButtonItem>
      <button onClick={clickHandler}>ChangeTitle</button>
    </div>

    
  );
}

export default App;
