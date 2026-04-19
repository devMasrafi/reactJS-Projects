import { useState } from "react";
import Button from "../btn/Button";

const Subcription = () => {
  const [userEmail, setUserEmail] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState(false);

  const handleInput = (e) => {
    const userInput = e.target.value.trim();

    if (userInput == "") {
      return;
    } else {
      setUserEmail(e.target.value);
    }
  };

  const handleCheckbox = (e) => {
    setIsChecked(e.target.checked);
    setError(false);
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log("this user email", userEmail);

    if (userEmail == "" || !isChecked) {
      setError(true);
      return;
    }

    setUserEmail("");
    setIsChecked(false);
    setError(false);
  };
  return (
    <div className="flex justify-around">
      {/* text information */}
      <div className="w-80">
        <h2 className="text-2xl capitalize font-semibold"> leave a mail </h2>
        <p>
          Want us to contact you for more or for a meeting?! leave a mail to get notified
        </p>
      </div>

      {/* inputField */}
      <div className="flex items-center">
        <div>
          {error && <p className="pb-2"> please enter your email</p>}
          <div>
            <input
              value={userEmail}
              onChange={handleInput}
              type="email"
              className=" border-black outline-1 -outline-offset-1 px-3 py-2 rounded-l-xl w-65 "
              placeholder="your mail"
            />
            <Button
              //   type="submit"
              onClick={handleClick}
              className={` bg-black text-white rounded-none rounded-r-xl hover:scale-120 transition duration-150 ease-in-out `}
            >
              send
            </Button>
          </div>
          <div className="flex items-center capitalize mt-3 ">
            <input
              type="checkbox"
              id="consent"
              checked={isChecked}
              onChange={handleCheckbox}
              className="cursor-pointer"
            />
            <label
              htmlFor="consent"
              className={`pl-2 cursor-pointer ${error ? `text-red` : `text-black`}`}
            >
              i wish to recive mail or get contacted
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subcription;
