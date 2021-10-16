import React from 'react'
import { useFormik, Formik, Form, Field, ErrorMessage } from 'formik'
import { makeStyles, Button } from '@material-ui/core'
import *as Yup from 'yup'
const useStyles = makeStyles(theme => ({
    form: {
        height: 'auto',
        width: '35%',
        border: '1px solid',
        margin: '20px auto auto auto',
        borderRadius: '10px',
        background: '#E0FFFF',
        [theme.breakpoints.only('xs')]: {
            width: '90%',
        }
    },
    title: {
        margin: '10px auto auto 35%',
    },
    userDiv: {
        width: '60%',
        // border: '1px solid',
        display: 'flex',
        flexDirection: "column",
        margin: '15px auto auto auto',
        fontSize: '12px'
    },

    field: {
        fontSize: '10px',
        height: "20px",
        borderRadius: '4px',
        border: '1px solid',
        "&:hover": {
            boxShadow: '2px 2px 5px'
        }
    },
    btn: {
        // border: '1px solid',
        margin: '10px auto auto auto',
        alignItems: 'center',
        justifyContent: 'space-around',
        display: 'flex'

    },

    submitBtn: {
        fontSize: '10px',
        height: '20px',
        width: '60px',
        borderRadius: '5px',
        border: '1px solid',
        marginTop: '20px'

    },
    error: {
        color: 'red',
        fontSize: '10px',
        marginLeft: '40%'
    },
    small: {
        fontSize: '10px',
        marginLeft: '25%',

    }

}))

const initialValues = {

    email: '',
    password: ''
}
const onSubmit = values => {
    console.log('form data', values)
}


const validationSchema = Yup.object({
    email: Yup.string().email("invalid email").required(" email required"),
    password: Yup.string().min(8, "Password must be 8 characters").required(" password required")
})

function Login() {
    const classes = useStyles()

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            <Form className={classes.form}>
                <h4 className={classes.title}>Log In</h4>
                <div className={classes.userDiv}>
                    <label>email</label>
                    <Field
                        className={classes.field}
                        id='email'
                        type="email"
                        name="email"
                        placeholder = "asgar@gmail.com"
                    />
                </div>
                <div className={classes.error}><ErrorMessage name="email" /></div>


                <div className={classes.userDiv}>
                    <label>password</label>
                    <Field
                        className={classes.field}
                        id="password"
                        type="password"
                        name="password"
                    placeholder = "********"
                    />
                </div>
                <div className={classes.error}><ErrorMessage name="password" /> </div>

                <div className={classes.btn}>
                    <Button type="reset" className={classes.submitBtn}>reset</Button>
                    <Button type="submit" className={classes.submitBtn}>submit</Button>
                </div>
            </Form>
        </Formik>
    )
}

export default Login;
