
import { useState } from 'react';

function Form() {
  const [name, setName] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    if (name.trim()) {
      alert(name);
      setName('');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Input your name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
