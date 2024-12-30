import { useState, useEffect } from "react";

function PasswordStrength({
  randomPassword,
  uppercaseOption,
  lowercaseOption,
  numbersOption,
  symbolsOption,
}) {
  const [points, setPoints] = useState(0);

  useEffect(() => {
    let tmpPoints = 0;

    const optionsCheck = () => {
      if (uppercaseOption) {
        tmpPoints += 1;
      }
      if (lowercaseOption) {
        tmpPoints += 1;
      }
      if (numbersOption) {
        tmpPoints += 1;
      }
      if (symbolsOption) {
        tmpPoints += 1;
      }
    };

    if (randomPassword) {
      tmpPoints += randomPassword?.length;
      optionsCheck();
    }

    setPoints(tmpPoints);
  }, [randomPassword]);

  const getScore = () => {
    let label = "Medium";
    let bars = 3;
    let color = "#F8CD65";

    if (points >= 18) {
      label = "Strong";
      bars = 4;
      color = "#A4FFAF";
    } else if (points >= 12) {
      label = "Medium";
      bars = 3;
      color = "#F8CD65";
    } else if (points >= 8) {
      label = "Weak";
      bars = 2;
      color = "#FB7C58";
    } else if (points >= 1) {
      label = "Too Weak";
      bars = 1;
      color = "#F64A4A";
    }

    return {
      label,
      bars,
      color,
    };
  };

  return (
    <div className="h-[72px] bg-darkestGray flex justify-between items-center px-6">
      <div className="uppercase text-mediumGray text-[16px] md:text-[18px]">
        Strength
      </div>
      <div className="flex items-center gap-2">
        <div className="text-lightGray uppercase text-[18px] md:text-[24px]">
          {getScore()?.label}
        </div>
        <div className="flex gap-1 items-center">
          {Array(4)
            .fill()
            .map((_, index) => (
              <div key={index} className="relative h-[28px] w-[10px] border">
                {getScore()?.bars > index && (
                  <div
                    className="absolute inset-[-1px] bg-white"
                    style={{
                      backgroundColor: getScore()?.color,
                    }}
                  />
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default PasswordStrength;
