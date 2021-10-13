import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const Home = lazy(() => import('./pages/Home/Home'));
const Help = lazy(() => import('./pages/Help/Help'));
const AppRouter = () => {
  return (
    <div>
      <Suspense fallback={<p>loading.......</p>}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/help" component={Help} />
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
};

export default AppRouter;
