import React from 'react';

export default class LoginDetails extends React.Component {
    render() {
        return (
            <div class="js-recommended-login">
                <a href="#" class="js-show-login">Don't know the login?</a>
                <div class="js-recommended-login-details" style="display: none;">
                    Sir or madam, might I recommend that you try the following login details:
                    <table class="table">
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
