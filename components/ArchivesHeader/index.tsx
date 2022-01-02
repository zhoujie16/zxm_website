import PageNav from "./../PageNav";

const Index = () => {
  return (
    <header
      className="not-home-page"
      id="page-header"
      style={{
        backgroundImage:
          "url(https://s2.loli.net/2022/01/02/aqsQB1dNDxgP9EM.jpg)",
      }}
    >
      <PageNav />
      <div id="page-site-info">
        <h1 id="site-title">归档</h1>
      </div>
    </header>
  );
};

export default Index;
