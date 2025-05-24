import Button from "../Elements/Button/index";
const AuthLayouts = (props) => {
    const { children, title } = props;
  return (
    <div className="w-full max-w-md bg-white shadow-md rounded-2xl px-8 pt-6 pb-8 mb-4">
      <Button classname="px-1">
        <svg className="w-[29px] h-[29px] text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" d="m15 19-7-7 7-7"/>
        </svg>
      </Button>
      <h1 className="text-3xl font-black font-inter mb-8 text-primary">{title}</h1>
      {children}
    </div>
  );
};

export default AuthLayouts;