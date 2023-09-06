import UserContext from "../utils/UserContext";

export const Footer = () => {
    return <div>

<UserContext.Consumer>
  {(value) => {
    return <h1 className="font-bold text-center text-2xl my-7">This website is Created By {value.user.name}</h1>;
  }}
</UserContext.Consumer>



    </div>;
  };