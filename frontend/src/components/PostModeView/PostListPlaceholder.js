import React, {Component} from 'react';
import {Placeholder} from 'semantic-ui-react'

class PostListPlaceholder extends Component {

    render() {

        return (
            <a className="ui card" href="javascript:;">
                <div className="content">
                    <Placeholder>
                        <Placeholder.Header image>
                            <Placeholder.Line />
                            <Placeholder.Line />
                        </Placeholder.Header>
                    </Placeholder>
                    <div className="meta">
                        <span className="time">
                            <Placeholder>
                                <Placeholder.Line/>
                            </Placeholder>
                        </span>
                        <span className="category right floated">
                              <Placeholder>
                                <Placeholder.Line/>
                            </Placeholder>
                        </span>

                    </div>
                    <div className="description">
                        <Placeholder>
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

                </div>
            </a>
        );
    }
}

export default PostListPlaceholder;
