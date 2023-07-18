import React, { useState } from "react";

export default function PizzaForm() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [size, setSize] = useState("");
  const [values, setValues] = useState({
    sauce: "",
    toppings: [],
    special: ""
  });

  const handleNameChange = event => {
    const newName = event.target.value;
    setName(newName);
    validateName(newName);
  };

  const validateName = newName => {
    if (newName.length < 2) {
      setNameError("name must be at least 2 characters");
    } else {
      setNameError("");
    }
  };

  const handleSizeChange = event => {
    setSize(event.target.value);
  };

  const onInputChange = event => {
    const { name, value } = event.target;
    setValues(prevValues => ({ ...prevValues, [name]: value }));
  };

  const onCheckboxChange = event => {
    const { name, checked } = event.target;
    setValues(prevValues => {
      if (checked) {
        return { ...prevValues, toppings: [...prevValues.toppings, name] };
      } else {
        return {
          ...prevValues,
          toppings: prevValues.toppings.filter(topping => topping !== name)
        };
      }
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (nameError) {
      // Form has validation errors, handle accordingly (e.g., show error messages)
      return;
    }

    // Proceed with form submission or other actions using values and other form data
  };

  return (
    <div className="pizza">
      <form id="pizza-form" onSubmit={handleSubmit}>
        <h1>Build Your Own Pizza</h1>

        <label>
          Name for Order: <br />
          <input
            id="name-input"
            type="text"
            name="name"
            value={name}
            onChange={handleNameChange}
          />
        </label>
        {nameError && <p style={{ color: "red" }}>{nameError}</p>}

        <label>
          Choice of Size:
          <select
            id="size-dropdown"
            onChange={handleSizeChange}
            value={size}
          >
            <option value="">Select</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="x-tra">X-tra Large</option>
          </select>
        </label>

        <h3>Pick a Sauce</h3>
        <label>
          Original Red
          <input
            type="radio"
            name="sauce"
            value="red"
            checked={values.sauce === "red"}
            onChange={onInputChange}
          />
        </label>

        <label>
          Garlic Ranch
          <input
            type="radio"
            name="sauce"
            value="ranch"
            checked={values.sauce === "ranch"}
            onChange={onInputChange}
          />
        </label>

        <label>
          BBQ Sauce
          <input
            type="radio"
            name="sauce"
            value="bbq"
            checked={values.sauce === "bbq"}
            onChange={onInputChange}
          />
        </label>

        <label>
          Spinach Alfredo
          <input
            type="radio"
            name="sauce"
            value="spinach"
            checked={values.sauce === "spinach"}
            onChange={onInputChange}
          />
        </label>

        <h3>Choose Toppings</h3>
        <label>
          Pepperoni
          <input
            type="checkbox"
            name="pepperoni"
            checked={values.toppings.includes("pepperoni")}
            onChange={onCheckboxChange}
          />
        </label>

        <label>
          Pineapple
          <input
            type="checkbox"
            name="pineapple"
            checked={values.toppings.includes("pineapple")}
            onChange={onCheckboxChange}
          />
        </label>

        <label>
          Ham
          <input
            type="checkbox"
            name="ham"
            checked={values.toppings.includes("ham")}
            onChange={onCheckboxChange}
          />
        </label>

        <label>
          Olives
          <input
            type="checkbox"
            name="olives"
            checked={values.toppings.includes("olives")}
            onChange={onCheckboxChange}
          />
        </label>

        <label>
          Bacon
          <input
            type="checkbox"
            name="bacon"
            checked={values.toppings.includes("bacon")}
            onChange={onCheckboxChange}
          />
        </label>

        <label>
          Cheddar
          <input
            type="checkbox"
            name="cheddar"
            checked={values.toppings.includes("cheddar")}
            onChange={onCheckboxChange}
          />
        </label>

        <label>
          Special Intructions:
          <input id="special-text"
            type="text"
            name="special"
            value={values.special}
            onChange={onInputChange}
          />
        </label>

        <button id="order-button" type="submit">
          Add to Order
        </button>
      </form>
    </div>
  );
}
