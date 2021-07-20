import {Route,Switch} from 'react-router-dom';

import Ver1Page from "./Ver 1/Ver1Page";
import Ver2Page from "./Ver 2/Ver2Page";

function App() {
  return (
     
<Switch>
    <Route path="/v1">
      <Ver1Page/>
    </Route> 

    <Route path="/v2">
      <Ver2Page/>
    </Route>

    <Route path="/">
      <Ver2Page/>
    </Route> 
</Switch>

  );
}

export default App;
