// 网站信息
const Index = () => {
  return (
    <div className="card-widget card-webinfo">
      <div className="item-headline">
        <i className="fas fa-chart-line"></i>
        <span>網站資訊</span>
      </div>
      <div className="webinfo">
        <div className="webinfo-item">
          <div className="item-name">文章數目 :</div>
          <div className="item-count">18</div>
        </div>
        <div className="webinfo-item">
          <div className="item-name">已運行時間 :</div>
          <div
            className="item-count"
            id="runtimeshow"
            data-publishdate="2019-11-13T00:00:00.000Z"
          ></div>
        </div>
        <div className="webinfo-item">
          <div className="item-name">本站總字數 :</div>
          <div className="item-count">50.6k</div>
        </div>
        <div className="webinfo-item">
          <div className="item-name">本站訪客數 :</div>
          <div className="item-count" id="busuanzi_value_site_uv"></div>
        </div>
        <div className="webinfo-item">
          <div className="item-name">本站總訪問量 :</div>
          <div className="item-count" id="busuanzi_value_site_pv"></div>
        </div>
        <div className="webinfo-item">
          <div className="item-name">最後更新時間 :</div>
          <div
            className="item-count"
            id="last-push-date"
            data-lastpushdate="2021-09-09T09:59:12.006Z"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Index;
