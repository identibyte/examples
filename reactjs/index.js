
/*
 * Using Identibyte in a React.js component
 *
 * This example shows how you can integrate Identibyte with a signup
 * form in your React app. Here's the basic structure:
 *
 * - SignupForm is the main component
 * - When the form is submitted, a request is made to Identibyte
 * - If the email is disposable, an error is shown
 * - Otherwise the form is submitted
 */


class SignupForm extends React.Component {

    /*
     * Initialize the component's state with an `error` that is set to
     * null. This is only set to true if the user enters a disposable
     * email address, in which case we will show them an error.
     */
    state = {
        error
    }

    handleFormSubmit = (event) => {
        // Prevent normal form submission
        event.preventDefault();

        // Get the email value from the form
        const email = this.refs.email.value

        // Add token authorization for the Identibyte request
        const encToken = btoa(`${process.env.IDENTIBYTE_TOKEN}:`)
        const fetchOptions = { headers: { Authorization: `Basic ${encToken}` } }

        // Check if email is disposable, then submit the form or set
        // an error to be shown to the user.
        return fetch(`https://identibyte.com/check/${email}`, opts)
            .then(res => res.json())
            .then(({ email }) => {
                if (email.disposable === true) {
                    return this.setState({
                        error: 'Please do not use a disposable email address provider.'
                    })
                } else {
                    return this.refs.form.submit()
                }
            })
    }

    render() {
        return (
            <form ref="form" method="POST">

                {this.state.error ? (<div>{this.state.error}</div>) : null}

                <div>
                    <label>Email address</label>
                    <input
                        ref="email"
                        name="email"
                        type="email"
                        defaultValue=""
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        ref="password"
                        name="password"
                        type="password"
                        defaultValue=""
                    />
                </div>
                <div>
                    <button type="submit" onClick={this.handleFormSubmit}>
                        Sign up
                    </button>
                </div>
            </form>
        )
    }
}
