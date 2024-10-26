type TitleProps = {
  children: React.ReactNode;
};

const Title = (props: TitleProps) => {
  const { children } = props;

  return (
    <div className="w-full text-center">
      <h1 className="text-3xl text-amber-500">{children}</h1>
    </div>
  );
};

export default Title;
