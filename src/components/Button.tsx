const Button = () => {
  return (
    <button
      type="button"
      className={`py-4 px-6 font-poppins text-black rounded-lg my-8 
      bg-gradient-to-r from-cyan-500 to-blue-300 hover:from-blue-500 hover:to-cyan-300 duration-300 ease-in-out transition hover:drop-shadow-2xl`}
    >
      Get Started
    </button>
  );
};

export default Button;