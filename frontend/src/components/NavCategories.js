import React, {Component} from 'react';
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom';

class NavCategories extends Component {

    render() {

        const {categories} = this.props;

        return (

            <div className="ui vertical menu">
                <NavLink to='/' className="item" exact activeClassName="active teal" key={'all'}>
                    All categories
                </NavLink>
                {categories.map((category) => (
                    <NavLink to={`/${category.path}`} exact className="item" activeClassName="active teal" key={category.path}>
                        {category.name}
                    </NavLink>
                ))}
            </div>
        );
    }
}


function mapStateToProps({categories}) {
    return {
        categories: Object.keys(categories).map(category => categories[category])
    }
}

export default connect(mapStateToProps)(NavCategories);
