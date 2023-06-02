type IProps = {
  children: any;
};

const Index = ({ children }: IProps) => {
  return (
    <>
      <div className="main_container">{children}</div>
    </>
  );
};

export default Index;
