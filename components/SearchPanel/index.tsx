import React from "react";
import { ajax_article_queryWithWords } from "./../../api";

class Index extends React.Component {
  state = {
    searchWords: "",
    searchResList: [],
  };

  searchTextOnInput = (e: any) => {
    console.log("searchTextOnInput");
    this.setState({
      searchWords: e.target.value,
    });
    clearTimeout(this.ttt);
    this.ttt = setTimeout(() => {
      this.searchActoin();
    }, 1000);
  };

  searchActoin = async () => {
    let { searchWords } = this.state;
    if (searchWords) {
      const list = await ajax_article_queryWithWords({
        words: searchWords,
      });
      this.setState({
        searchResList: list,
      });
    }
  };

  closeSearch = () => {
    this.setState({
      searchWords: "",
      searchResList: [],
    });
    this.props.toggerClick(false);
  };

  componentDidMount() {}

  render() {
    let { searchWords, searchResList } = this.state;
    let { searchTextOnInput } = this;
    let isOpen = this.props.isOpenSearch;
    let openStyle = isOpen ? { display: "block" } : { display: "none" };
    let openMaskStyle = isOpen
      ? {
          display: "block",
          animation: "0.5s ease 0s 1 normal none running to_show",
        }
      : { display: "none" };
    return (
      <div id="local-search">
        <div className="search-dialog" style={openStyle}>
          <div className="search-dialog__title" id="local-search-title">
            搜索
          </div>
          <div id="local-input-panel">
            <div id="local-search-input">
              <div className="local-search-box">
                <input
                  className="local-search-box--input"
                  placeholder="搜索文章"
                  type="text"
                  value={searchWords}
                  onInput={searchTextOnInput}
                />
              </div>
            </div>
          </div>
          <hr />
          <div id="local-search-results">
            <div className="search-result-list">
              {searchResList.map((x: any) => {
                let hrefUrl = `/article/${x.id}`;
                return (
                  <div className="local-search__hit-item">
                    <a
                      href={hrefUrl}
                      className="search-result-title"
                      data-pjax-state=""
                    >
                      {x.title}
                    </a>
                    {/* <p className="search-result">
                      hlight_theme: false下載和修改CSS文件在
                      <span className="search-keyword">github</span>
                      上找到這個CSS在Hexo的根目錄source文件夾下創立一個self文件夾，在self文件夾創建一個Kimbiedark.css文件把
                      <span className="search-keyword">github</span>上Kimbie
                      dark的CSS代碼複製...
                    </p> */}
                  </div>
                );
              })}
            </div>
          </div>
          <span className="search-close-button" onClick={this.closeSearch}>
            <i className="fas fa-times"></i>
          </span>
        </div>
        <div
          id="search-mask"
          style={openMaskStyle}
          onClick={this.closeSearch}
        ></div>
      </div>
    );
  }
}

export default Index;
