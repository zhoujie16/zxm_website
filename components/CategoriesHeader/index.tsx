import PageNav from "./../PageNav";

const Index = () => {
  return (
    <header
      className="not-home-page"
      id="page-header"
      style={{
        backgroundImage:
          "url(https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/Photo/categories.jpg)",
      }}
    >
      <PageNav />
      <div id="page-site-info">
        <h1 id="site-title">分类</h1>
      </div>
    </header>
  );
};

export default Index;
