import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
import {NavLink, withRouter} from 'react-router-dom';
import {Placeholder} from 'semantic-ui-react'

class NavCategories extends Component {

    render() {

        const {categories, loader} = this.props;
        return (

            <Fragment>

                {typeof loader != "undefined" && loader.show && (
                    <Placeholder fluid>
                        <Placeholder.Line/>
                    </Placeholder>
                )}

                {typeof loader != "undefined" && !loader.show && (
                    <div className="ui secondary pointing fluid five item menu">
                        <NavLink to='/' className="item" exact activeClassName="active" key={'all'}>
                            All categories
                        </NavLink>

                        {categories.map((category) => (
                            <NavLink to={`/${category.path}`} exact className="item" activeClassName="active"
                                     key={category.path}>
                                {category.name}
                            </NavLink>
                        ))}

                        <NavLink to='/new' className="ui right labeled icon button blue">
                            <i className="plus icon"></i>
                            Try now!
                        </NavLink>
                    </div>
                )}
            </Fragment>
        );
    }
}


function mapStateToProps({categories, loader}) {
    return {
        loader,
        categories: Object.keys(categories).map(category => categories[category])
    }
}

export default withRouter(connect(mapStateToProps)(NavCategories));
