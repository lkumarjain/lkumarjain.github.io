import Example from './examples/example';
import NavigationExample from "./examples/navigationExample";
import PaperExample from "./examples/paperExample";
import TimelineExample from "./examples/timelineExample";
import ImageExample from "./examples/imageExample";
import OopsExample from "./examples/oopsExample";
import FigureExample from "./examples/figureExample";

export default function Components(props) {
    const { component } = props;

    return <Example>
        {component === "image" && <ImageExample />}
        {component === "figure" && <FigureExample />}
        {component === "oops" && <OopsExample />}
        {component === "nav" && <NavigationExample />}
        {component === "paper" && <PaperExample />}
        {component === "timeline" && <TimelineExample />}
        {!component && <OopsExample />}
    </Example>;
}
