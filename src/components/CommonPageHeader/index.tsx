import NavigationBar from "../NavigationBar";

export default function ({ title }: { title: string }) {
  return (
    <>
      <header
        className="not-home-page"
        id="page-header"
        style={{
          backgroundImage: `url('https://file.crazywong.com/gh/jerryc127/CDN@latest/Photo/categories.jpg')`,
        }}
      >
        <NavigationBar />
        <div id="page-site-info">
          <h1 id="site-title">{title}</h1>
        </div>
      </header>
    </>
  );
}
