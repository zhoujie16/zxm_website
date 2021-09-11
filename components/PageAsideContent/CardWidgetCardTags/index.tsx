// 网站信息
const Index = () => {
  return (
    <div className="card-widget card-tags">
      <div className="item-headline">
        <i className="fas fa-tags"></i>
        <span>標籤</span>
      </div>
      <div className="card-tag-cloud">
        <a
          href="/tags/%E6%95%99%E7%A8%8B/"
          style={{ fontSize: "1.35em", color: "#1a3709" }}
        >
          教程
        </a>
        <a href="/tags/Hexo/" style={{ fontSize: "1.35em", color: "#192ec0" }}>
          Hexo
        </a>
        <a
          href="/tags/%E4%B8%BB%E9%A1%8C/"
          style={{ fontSize: "1.35em", color: "#a47297" }}
        >
          主題
        </a>
        <a
          href="/tags/butterfly/"
          style={{ fontSize: "1.45em", color: "#ba97b3" }}
        >
          butterfly
        </a>
        <a
          href="/tags/%E6%89%93%E8%B3%9E/"
          style={{ fontSize: "1.15em", color: "#6ca143" }}
        >
          打賞
        </a>
        <a
          href="/tags/Aplayer/"
          style={{ fontSize: "1.15em", color: "#a37c4b" }}
        >
          Aplayer
        </a>
        <a
          href="/tags/Butterfly/"
          style={{ fontSize: "1.15em", color: "#242657" }}
        >
          Butterfly
        </a>
        <a
          href="/tags/%E7%BE%8E%E5%8C%96/"
          style={{ fontSize: "1.15em", color: "#467534" }}
        >
          美化
        </a>
        <a
          href="/tags/%E5%84%AA%E5%8C%96/"
          style={{ fontSize: "1.15em", color: "#091929" }}
        >
          優化
        </a>
        <a
          href="/tags/%E9%AD%94%E6%94%B9/"
          style={{ fontSize: "1.15em", color: "#971122" }}
        >
          魔改
        </a>
        <a
          href="/tags/highlight/"
          style={{ fontSize: "1.25em", color: "#4a6b47" }}
        >
          highlight
        </a>
        <a
          href="/tags/%E6%A8%99%E7%B1%A4%E5%A4%96%E6%8E%9B/"
          style={{ fontSize: "1.25em", color: "#9c490a" }}
        >
          標籤外掛
        </a>
        <a href="/tags/demo/" style={{ fontSize: "1.15em", color: "#66a15b" }}>
          demo
        </a>
        <a
          href="/tags/top-img/"
          style={{ fontSize: "1.15em", color: "#514643" }}
        >
          top_img
        </a>
        <a href="/tags/Bar/" style={{ fontSize: "1.15em", color: "#13b73a" }}>
          Bar
        </a>
      </div>
    </div>
  );
};

export default Index;
