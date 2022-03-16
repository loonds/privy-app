import {Component} from "react";
import {ComingSoon} from "./ComingSoon/ComingSoon";

class  LandingPage extends Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        console.log("hello world");
        return <div>
            <ComingSoon/>
        </div>
    }
}
export default LandingPage;
