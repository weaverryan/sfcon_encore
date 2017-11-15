import React from 'react';

export default class LoginDetails extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isVisible: false
        }
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
                                <td>cindy_clawford</td>
                            </tr>
                            <tr>
                                <th>Password</th>
                                <td>pumpup</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
