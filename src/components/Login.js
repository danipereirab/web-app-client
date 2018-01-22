import React from 'react'
import { Field, reduxForm } from 'redux-form';

const Login = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props
        return(
            <div className="col-md-8">
                <form method="post" class="form-horizontal">
                    <h4>Use a local account to log in.</h4>
                    <hr />
                    <div asp-validation-summary="All" class="text-danger"></div>
                    <div class="form-group">
                        <label asp-for="Email" class="col-md-2 control-label"></label>
                        <div class="col-md-10">
                            <input asp-for="Email" class="form-control" />
                            <span asp-validation-for="Email" class="text-danger"></span>
                        </div>
                    </div>
                    <div class="form-group">
                        <label asp-for="Password" class="col-md-2 control-label"></label>
                        <div class="col-md-10">
                            <input asp-for="Password" class="form-control" />
                            <span asp-validation-for="Password" class="text-danger"></span>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-md-offset-2 col-md-10">
                            <button type="submit" class="btn btn-primary">Log in</button>
                        </div>
                    </div>
                </form>
             </div>
        )
}

export default reduxForm({
    form: 'Login'  // a unique identifier for this form
})(Login);
