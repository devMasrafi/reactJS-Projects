import { NavLink } from "react-router";

const Footer = ({ className }) => {
  const socialLinks = [
    {
      name: "github",
      link: "https://github.com/devMasrafi",
    },
    {
      name: "Linked In",
      link: "https://www.linkedin.com/in/masrafi-mondol/",
    },
    {
      name: "facebook",
      link: "https://www.facebook.com",
    },
    {
      name: "x ( twitter )",
      link: "https://www.x.com",
    },
  ];

  return (
    <div className={` ${className}`}>
      {/* upper Footer */}
      <div className="flex justify-around items-center pb-15 border-b">
        <NavLink to="/">
          <h1 className="text-4xl font-bold tracking-wider italic">
            devMasrafi
          </h1>
          <p className="text-sm italic tracking-wider opacity-60">
            simple, faster, reliable
          </p>
        </NavLink>
        <div className="">
          <div>
            <h2 className="text-3xl capitalize">socials</h2>
          </div>
          <div className="w-130  flex justify-around my-3 border-y">
            {socialLinks.map((items, index) => {
              return (
                <NavLink
                  key={index}
                  to={items.link}
                  target="_blank"
                  className={`border-x  p-4 capitalize`}
                >
                  {items.name}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>

      {/* copyright stuff */}
      <div className="flex justify-around w-200 mx-auto my-10 capitalize list-none list-inside underline underline-offset-8 font-semibold opacity-40 italic">
        <li>@2026 all rights reserve</li>
        <li>privacy</li>
        <li>terms and conditions</li>
      </div>
    </div>
  );
};

export default Footer;
