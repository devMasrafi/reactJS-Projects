import Button from "../btn/Button";

const CardOne = ({
  todoTitle,
  todoDetails,
  buttonOneClick,
  buttonTwoClick,
  isCompleted,
}) => {
  return (
    <div className="bg-milk-white w-100 px-5 py-4 rounded-2xl text-black mt-4 ">
      <div>
        <h1
          className={`text-lg font-bold capitalize tracking-wider ${isCompleted ? `line-through` : ``}`}
        >
          {todoTitle ? todoTitle : `something should be here`}{" "}
        </h1>
        <p className={`tracking-wide my-3 ${isCompleted ? "line-through" : ""}`}>
          {todoDetails
            ? todoDetails
            : `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
          delectus, fugit necessitatibus fugiat.`}
        </p>
      </div>
      <div className="flex gap-x-2">
        <Button onClick={buttonOneClick} className={`bg-dark-green text-white`}>
          completed
        </Button>
        <Button
          onClick={buttonTwoClick}
          className={`bg-dark-green text-milk-white`}
        >
          delete
        </Button>
      </div>
    </div>
  );
};

export default CardOne;
