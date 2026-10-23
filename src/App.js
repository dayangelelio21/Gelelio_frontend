
import './App.css';
import Card from './components/ui/Card';
import Form from './components/ui/Form';
import Counter from './components/ui/Counter';
import List from './components/ui/List';


function App() {
  return (
    <>
      <Card
        name="Ardee"
        description="This is me."
      />
      <Card
        name="Winzor"
        description="This is me again."
      />
      <Form />
      <Counter />
      <List />
    </>
  );
}

export default App;
