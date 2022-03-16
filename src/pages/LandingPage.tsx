import {Component} from "react";
import {ComingSoon} from "../components/ComingSoon/ComingSoon";

class LandingPage extends Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        console.log("Landing Page ");
        return <div>
            <ComingSoon/>
        </div>
    }
}

export default LandingPage;
