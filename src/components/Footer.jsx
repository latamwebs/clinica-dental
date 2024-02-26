export const Footer = () => {
  return (
    <div className="drop-shadow-lg h-16 rounded-lg bg-white m-1 justify-center flex items-center text-gray-800">
      <div>
        Diseño por{" "}
        <a
          href="https://www.linkedin.com/in/anggiealava/"
          target="_blank"
          className="hover:text-blue-800">
          <i className="fa-brands fa-linkedin"></i> Anggie
        </a>{" "}
        y{" "}
        <a
          href="https://www.linkedin.com/in/elias-carmiol/"
          target="_blank"
          className="hover:text-blue-800">
          <i className="fa-brands fa-linkedin"></i> Elias
        </a>
        .© 2024
      </div>
    </div>
  );
};
