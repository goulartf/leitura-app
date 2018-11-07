import React, {Component} from 'react';
import {connect} from 'react-redux'

class NavCategories extends Component {

    render() {

        const {categories} = this.props;

        return (

            <div className="ui vertical menu">
                <a className="active teal item" key={'all'}>
                    All categories
                </a>
                {categories.map((category) => (
                    <a className="item" key={category.name}>
                        {category.name}
                    </a>
                ))}
                <div className="item">
                    <div className="ui transparent icon input">
                        <input type="text" placeholder="Search..."/>
                        <i className="search icon"/>
                    </div>
                </div>
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
