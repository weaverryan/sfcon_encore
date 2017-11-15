import React from 'react';

export default class LoginDetails extends React.Component {
    render() {
        return (
            <div>
                <a href="#" >Don't know the login?</a>
                <div style={{display: 'none'}}>
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
