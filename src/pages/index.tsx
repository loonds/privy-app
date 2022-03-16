import {Route, Switch} from "react-router";
import LandingPage from "./LandingPage";

const AppIndex = (props: any) => {
    return <div>
        <Switch>
            <Route exact path="/" component={LandingPage}/>
        </Switch>
    </div>
}
export default AppIndex;
