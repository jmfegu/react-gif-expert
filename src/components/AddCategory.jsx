import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

  const [ inputValue, setInputValue ] = useState('');

  const onTyping = ({target}) => {
    setInputValue(target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault();
    const finalValue = inputValue.trim();
    if (finalValue.length == 0) return;
    onNewCategory(finalValue)
    setInputValue('');
  }

  return (
    <form className="form-add-category" onSubmit={ onSubmit }>
      <input
        type="text"
        placeholder="Empieza a escribir para buscar"
        value={ inputValue }
        onChange={ onTyping }
      />
      <input type="submit" value="Buscar gif"/>

    </form>
  )
}
