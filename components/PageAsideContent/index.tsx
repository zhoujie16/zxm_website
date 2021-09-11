import CardWidgetInfo from "./CardWidgetInfo";
import CardWidgetCannouncement from "./CardWidgetCannouncement";
import CardWidgetWebInfo from "./CardWidgetWebInfo";
import CardWidgetNewestComments from "./CardWidgetNewestComments";

const Index = () => {
  return (
    <div className="aside-content" id="aside-content">
      <CardWidgetInfo />
      <CardWidgetCannouncement />
      <CardWidgetWebInfo />
      <div className="sticky_layout"></div>
    </div>
  );
};

export default Index;
