import React, {Component} from 'react';
import {connect} from 'react-redux'

class NavCategories extends Component {

    render() {

        const {categories} = this.props;

        return (
            <div>
                Categorias:
                <ul>
                {categories.map((category) => (
                    <li key={category.name}>
                        {category.name}
                    </li>
                ))}
                </ul>
            </div>
        );
    }
}


function mapStateToProps ({ categories }) {
    return {
        categories: Object.keys(categories).map(category => categories[category])
    }
}

export default connect(mapStateToProps)(NavCategories);
