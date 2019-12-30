import React from 'react';
import {Route, NavLink} from 'react-router-dom';
import Func1Page from './func1';
import Func2Page from './func2';
import Func3Page from './func3';

const functions = () => {
return (
<div className="row">
    <div className="col-sm-2">
        <ul className="list-group list-group-nav">
            <NavLink className="list-group-item" to="/functions/func1">AddUser</NavLink>
            <NavLink className="list-group-item" to="/functions/func2">Show All Users</NavLink>
            <NavLink className="list-group-item" to="/functions/func3">TBD</NavLink>
        </ul>
    </div>

    <div className="container-fluid col-sm-10">
            <Route path="/functions/func1" component={Func1Page}/>
            <Route path="/functions/func2" component={Func2Page}/>
            <Route path="/functions/func3" component={Func3Page}/>
    </div>
</div>
);
};

export default functions