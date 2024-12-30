function PasswordOptions({
  uppercaseOption,
  lowercaseOption,
  numbersOption,
  symbolsOption,
  setUppercaseOption,
  setLowercaseOption,
  setNumbersOption,
  setSymbolsOption,
}) {
  const passwordOptions = [
    {
      id: 0,
      name: "Include Uppercase Letters",
      inputId: "uppercase-option",
      stateFunction: setUppercaseOption,
      stateValue: uppercaseOption,
    },
    {
      id: 1,
      name: "Include Lowercase Letters",
      inputId: "lowercase-option",
      stateFunction: setLowercaseOption,
      stateValue: lowercaseOption,
    },
    {
      id: 2,
      name: "Include Numbers",
      inputId: "numbers-option",
      stateFunction: setNumbersOption,
      stateValue: numbersOption,
    },
    {
      id: 3,
      name: "Include Symbols",
      inputId: "symbols-option",
      stateFunction: setSymbolsOption,
      stateValue: symbolsOption,
    },
  ];

  function handleCheckbox(event, stateFunction) {
    if (!event || !stateFunction) return;
    return event.target.checked === true
      ? stateFunction(true)
      : stateFunction(false);
  }

  return passwordOptions.map((option) => (
    <div key={option.id} className="flex gap-5">
      <input
        id={option.inputId}
        type="checkbox"
        onChange={(e) => handleCheckbox(e, option.stateFunction)}
        className="accent-neonGreen cursor-pointer"
        checked={option?.stateValue}
      />
      <label
        htmlFor={option.inputId}
        className="text-lightGray text-[16px] md:text-[18px]"
      >
        {option.name}
      </label>
    </div>
  ));
}

export default PasswordOptions;
