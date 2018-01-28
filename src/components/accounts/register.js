import React from 'react'
import { Field, reduxForm } from 'redux-form';


const Register = (props) => {
    
    const { handleSubmit, pristine, reset, submitting, text, response, account } = props
    
        return(
          
            <div className="col-sm-5">
           
                        <b>{text}</b>
                        <form className='form-group' onSubmit={handleSubmit}>
                        <Field
                            name="username"
                            component={renderField}
                            label="Username"
                            validate={[required, maxLength15, minLength2]}
                            warn={alphaNumeric}
                            type="text"
                            placeholder="User Name"
                           
                            
                        />
                        
                        <button type="submit" disabled={pristine || submitting}>
                            Registrar
                        </button>
                        <small>{response}</small>
                        </form>
                    </div>
            )
}

const required = value => (value ? undefined : 'Required')
const maxLength = max => value => value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength15 = maxLength(15)
const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined
const minValue = min => value => value && value < min ? `Must be at least ${min}` : undefined
const minValue18 = minValue(18)
const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined
const tooOld = value => value && value > 65 ? 'You might be too old for this' : undefined
const aol = value => value && /.+@aol\.com/.test(value) ? 'Really? You still use AOL for your email?' : undefined
const alphaNumeric = value => value && /[^a-zA-Z0-9 ]/i.test(value) ? 'Only alphanumeric characters' : undefined

export const phoneNumber = value => value && !/^(0|[1-9][0-9]{9})$/i.test(value)? 'Invalid phone number, must be 10 digits' : undefined
export const minLength = min => value => value && value.length < min ? `Must be ${min} characters or more` : undefined
export const minLength2 = minLength(2)
export const minLength8 = minLength(8)


const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div className="form-group">
  
      <input {...input} placeholder={label} type={type} className="form-control"/>
      {touched &&
        ((error && <small className="help-block"> {error}</small>) ||
          (warning && <small className="help-block"> {warning}</small>))}
    
  </div>
)


export default reduxForm({
    form: 'Register'
})(Register);
