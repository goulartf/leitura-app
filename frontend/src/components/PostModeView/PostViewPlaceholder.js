import React, {Component} from 'react';
import {Placeholder} from 'semantic-ui-react'

class PostViewPlaceholder extends Component {

    render() {

        return (
            <div className="ui fluid card">
                <div className="content">
                    <div className="center aligned header">
                        <Placeholder className="center">
                            <Placeholder.Line />
                        </Placeholder>
                        <Placeholder className="center">
                            <Placeholder.Line />
                        </Placeholder>
                        <br />
                    </div>
                    <div className="description">
                        <Placeholder fluid className="center">
                            <Placeholder.Paragraph>
                                <Placeholder.Line/>
                                <Placeholder.Line/>
                                <Placeholder.Line/>
                                <Placeholder.Line/>
                            </Placeholder.Paragraph>
                        </Placeholder>
                    </div>
                </div>
                <div className="extra content">
                    <Placeholder className="center" style={{ height: 50, width: 50 }}>
                        <Placeholder.Image />
                    </Placeholder>
                </div>
            </div>
        );
    }
}

export default PostViewPlaceholder;
