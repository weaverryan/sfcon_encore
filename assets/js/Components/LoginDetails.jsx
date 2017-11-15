import React from 'react';

export default class LoginDetails extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isVisible: false
        }

        this.onToggleClick = this.onToggleClick.bind(this);
    }

    onToggleClick(e) {
        e.preventDefault();

        this.setState({
            isVisible: !this.state.isVisible
        });
    }

    render() {
        return (
            <div>
                <a href="#" onClick={this.onToggleClick}>Don't know the login?</a>
                <div className={this.state.isVisible ? '' : 'hidden'}>
                    Sir or madam, might I recommend that you try the following login details:
                    <table className="table">
                        <tbody>
                            <tr>
                                <th>Username</th>
                                <td>{this.props.username}</td>
                            </tr>
                            <tr>
                                <th>Password</th>
                                <td>{this.props.password}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
