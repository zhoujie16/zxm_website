import CardWidgetInfo from "./CardWidgetInfo";
import CardWidgetCannouncement from "./CardWidgetCannouncement";
import CardWidgetWebInfo from "./CardWidgetWebInfo";
import CardWidgetRecentPost from "./CardWidgetRecentPost";

const Index = () => {
  return (
    <div className="aside-content" id="aside-content">
      <CardWidgetInfo />
      <CardWidgetCannouncement />
      <CardWidgetRecentPost />
      <CardWidgetWebInfo />
      <div className="sticky_layout"></div>
    </div>
  );
};

export default Index;
