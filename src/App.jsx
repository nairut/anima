import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Celular } from "./screens/Celular";
import { DesktopForm } from "./screens/DesktopForm";
import { CellForm } from "./screens/CellForm";
import { Tablet } from "./screens/Tablet";
import { Index } from "./screens/Index";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
    };
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    const isMobile = window.innerWidth <= 768; // Adjust the breakpoint as needed
    this.setState({ isMobile });
  }

  render() {
    const { isMobile } = this.state;

    return (
      <Router>
        <Switch>
          <Route exact path="/">
            {isMobile ? <Redirect to="/Celular" /> : <Redirect to="/Index" />}
          </Route>
          <Route exact path="/index" component={Index} />
          <Route exact path="/desktop-form" component={DesktopForm} />
          <Route exact path="/Celular" component={Celular} />
          <Route exact path="/cellform" component={CellForm} />

            {isMobile ? <Redirect to="/cellform" /> : <Redirect to="/desktop-form" />}
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;

