const ErrorPage = () => {
  return (
    <div className="w-[80%] mx-auto mb-10">
      <div className="flex flex-col justify-center items-center">
        <img className="w-[50%]" src="https://i.postimg.cc/kg2fB5VH/404.png" />
        <div>
          <h1 className="text-lg font-bold tracking-tight text-gray-900 md:text-4xl">
            Uh-oh! We can not find that page.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
