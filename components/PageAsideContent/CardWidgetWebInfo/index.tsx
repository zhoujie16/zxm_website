// 网站信息
const Index = () => {
  return (
    <div className="card-widget card-webinfo">
      <div className="item-headline">
        <i className="fas fa-chart-line"></i>
        <span>网站资讯</span>
      </div>
      <div className="webinfo">
        <div className="webinfo-item">
          <div className="item-name">文章数目 :</div>
          <div className="item-count">2840</div>
        </div>
        <div className="webinfo-item">
          <div className="item-name">已运行时间 :</div>
          <div
            className="item-count"
            id="runtimeshow"
            data-publishdate="2019-11-13T00:00:00.000Z"
          >
            2189天
          </div>
        </div>
        <div className="webinfo-item">
          <div className="item-name">本站总字数 :</div>
          <div className="item-count">50.6k</div>
        </div>
        <div className="webinfo-item">
          <div className="item-name">本站访客数 :</div>
          <div className="item-count" id="busuanzi_value_site_uv">
            120034
          </div>
        </div>
        <div className="webinfo-item">
          <div className="item-name">本站总访问量 :</div>
          <div className="item-count" id="busuanzi_value_site_pv">
            534123
          </div>
        </div>
        <div className="webinfo-item">
          <div className="item-name">最后更新时间 :</div>
          <div
            className="item-count"
            id="last-push-date"
            data-lastpushdate="2021-09-09T09:59:12.006Z"
          >
            1周前
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
