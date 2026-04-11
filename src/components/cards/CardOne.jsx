import Button from "../btn/Button";

const CardOne = ({ todoTitle, todoDetails }) => {
  return (
    <div className="bg-milk-white w-100 px-5 py-4 rounded-2xl text-black mt-4 ">
      <div>
        <h1 className="text-lg font-bold capitalize tracking-wider ">
          {todoTitle ? todoTitle : `something should be here`}{" "}
        </h1>
        <p className="tracking-wide my-3">
          {todoDetails
            ? todoDetails
            : `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
          delectus, fugit necessitatibus fugiat.`}
        </p>
      </div>
      <div>
        <Button className={`bg-dark-green text-white`}>completed</Button>
      </div>
    </div>
  );
};

export default CardOne;
