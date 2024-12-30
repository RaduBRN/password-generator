import { useState } from "react";
import IconArrow from "../icons/IconArrow";
import IconCopy from "../icons/IconCopy";
import PasswordOptions from "./PasswordOptions";
import PasswordStrength from "./PasswordStrength";
import Slider from "./Slider";

function Container() {
  const defaultPlaceholder = "PTx1f5DaFX";
  const defaultPasswordLength = 10;

  const [value, setValue] = useState(defaultPasswordLength);
  const [randomPassword, setRandomPassword] = useState("");
  const [uppercaseOption, setUppercaseOption] = useState(true);
  const [lowercaseOption, setLowercaseOption] = useState(true);
  const [numbersOption, setNumbersOption] = useState(true);
  const [symbolsOption, setSymbolsOption] = useState(false);
  const [displayClipboardText, setDisplayClipboardText] = useState(false);

  function generateRandomPassword(length) {
    const charSets = [
      numbersOption && "0123456789",
      uppercaseOption && "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      lowercaseOption && "abcdefghijklmnopqrstuvwxyz",
      symbolsOption && "!\"#$%&'()*+,-./[\\]^_`",
    ].filter(Boolean);

    if (length < 6) {
      alert("Password length must be at least 6 characters.");
      return;
    }

    if (charSets.length === 0) {
      alert("Please select at least one character type.");
      return;
    }

    const allChars = charSets.join("");
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars[randomIndex];
    }
    setRandomPassword(password);
  }

  const copyToClipboard = () => {
    navigator?.clipboard?.writeText(randomPassword);
    setDisplayClipboardText(true);
    setTimeout(() => {
      setDisplayClipboardText(false);
    }, 3000);
  };

  return (
    <section className="flex flex-col gap-6 items-center w-full max-w-[343px] md:max-w-[540px]">
      <header>
        <h2 className="text-mediumGray">Password Generator</h2>
      </header>
      <div className="relative w-full h-16 md:h-20 bg-darkGray flex items-center justify-between px-4 md:px-8">
        <input
          className="text-lightGray text-[24px] md:text-[32px] bg-transparent focus:outline-none placeholder:text-mediumGray cursor-default"
          value={randomPassword}
          readOnly
          placeholder={defaultPlaceholder}
        />
        <button
          className="absolute right-4 md:right-8 flex items-center gap-3 group text-neonGreen hover:text-[#fff]"
          onClick={copyToClipboard}
        >
          <div className="relative">
            {displayClipboardText && (
              <span className="absolute right-8 uppercase text-neonGreen text-[16px] md:text-[18px] bg-darkGray">
                Copied
              </span>
            )}
            <IconCopy />
          </div>
        </button>
      </div>
      <div className="flex flex-col justify-center gap-6 md:gap-8 w-full h-[423px] md:h-[528px] bg-darkGray p-4 md:p-8">
        <div className="flex justify-between items-center">
          <p className="text-lightGray">Character Length</p>
          <h2 className="text-neonGreen">{Math.floor(value)}</h2>
        </div>
        <div>
          <Slider value={value} setValue={setValue} />
        </div>
        <div className="flex flex-col gap-3">
          <PasswordOptions
            uppercaseOption={uppercaseOption}
            lowercaseOption={lowercaseOption}
            numbersOption={numbersOption}
            symbolsOption={symbolsOption}
            setUppercaseOption={setUppercaseOption}
            setLowercaseOption={setLowercaseOption}
            setNumbersOption={setNumbersOption}
            setSymbolsOption={setSymbolsOption}
          />
        </div>
        <div>
          <PasswordStrength
            randomPassword={randomPassword}
            uppercaseOption={uppercaseOption}
            lowercaseOption={lowercaseOption}
            numbersOption={numbersOption}
            symbolsOption={symbolsOption}
          />
        </div>
        <div className="w-[309px] md:w-[474px]">
          <button
            className="group flex items-center justify-center w-full h-[54px] md:h-[63px] gap-6 bg-neonGreen hover:bg-darkGray hover:border-neonGreen hover:text-neonGreen border-2 border-transparent"
            onClick={() => generateRandomPassword(Math.floor(value))}
          >
            <p className="uppercase">Generate</p>
            <IconArrow />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Container;
