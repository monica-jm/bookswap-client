import React from "react";
import Router from "./Router";
import { withRouter } from "react-router-dom";
import "./App.css";
import PageLayout from "./styles/PageLayout";
import GlobalStyles from "./styles/GlobalStyles";
import {AuthProvider} from './hooks/authContext';



function AppStyledComponent() {
  return (
    <div className="App">
      <GlobalStyles/>
      <AuthProvider>
        <PageLayout>
          <Router />
        </PageLayout>
      </AuthProvider>
    </div>
  );
}
const AppWithRouter = withRouter(AppStyledComponent);

export default AppWithRouter;