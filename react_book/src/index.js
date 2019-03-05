import React from 'react';
import ReactDOM from 'react-dom';
import Index from './components/index';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router,Route} from 'react-router-dom'
import Detail from './components/detail'
import { Provider } from 'react-redux'
import store from './redux/store/store'

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/" component={Index} />
                <Route exact path="/detail" component={Detail} />
            </div>
        </Router>
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();
