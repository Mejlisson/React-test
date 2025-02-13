import "./App.scss";
import Header from "./components/header/header"; 
import List from "./components/list/list";
import SubHeader from "./components/SubHeader/subheader";
import LlamaButton from "./components/LamaButton/LamaButton";

function App() {
    const welcomeTitle = "Welcome";
    const animals = ["lion🦁","cat🐱","dog🐶","lama🦙"];
    return (
        <>
            <Header title={welcomeTitle}/>
            <SubHeader> en subheader</SubHeader>
            <SubHeader> 
               <p>Another list:</p>
               <List items={animals}/>
            </SubHeader>
          <h1>⭐Components⭐</h1>
          <p>En kort lista av djur</p>
          <List items={animals}/>
          <LlamaButton title="Click me!" hasIcon = {true}/>
          <LlamaButton title="No me!" hasIcon ={false}/>
        </>
  );
}
export default App;

