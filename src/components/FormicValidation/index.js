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
        // background: '#E0FFFF',
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
        margin: '20px auto auto auto',
        fontSize: '10px'
    },

    field: {
        fontSize: '10px',
        height: "20px",
        borderRadius: '5px',
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
        marginTop: '20px',
        background: 'blue',
        color: 'white',
        "&:hover": {
            background: 'blue',
        }

    },
    resetBtn: {
        fontSize: '10px',
        height: '20px',
        width: '60px',
        borderRadius: '5px',
        border: '1px solid',
        marginTop: '20px',
        background: 'red',
        color: 'white',
        "&:hover": {
            background: 'red',
        }


    },

    error: {
        color: 'red',
        fontSize: '10px',
        marginLeft: '20%'
    },
    small: {
        fontSize: '10px',
        marginLeft: '25%',

    }

}))

const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmpassword: ''
}
const onSubmit = values => {
    console.log('form data', values)
}


const validationSchema = Yup.object({
    name: Yup.string().max(30, "Password must be 30 characters").required(" name required"),
    email: Yup.string().email("invalid email").required(" email required"),
    password: Yup.string().min(8, "Password must be 8 characters").required(" password required"),
    confirmpassword: Yup.string().oneOf([Yup.ref("password"), null], "Password must match").required("Confirm password")
})

function FormicValidation() {
    const classes = useStyles()
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}

        >
            <Form className={classes.form}>
                <h4 className={classes.title}>Sign In</h4>
                <div className={classes.userDiv}>
                    <label> Full Name</label>
                    <Field
                        autoComplete="off"
                        className={classes.field}
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Asgar Ansari"
                    />
                </div>
                <div className={classes.error}><ErrorMessage name="name" /> </div>

                <div className={classes.userDiv}>
                    <label>Email</label>
                    <Field
                        autoComplete="off"
                        className={classes.field}
                        id='email'
                        type="email"
                        name="email"
                        placeholder="asgaransari@gmail.com"

                    />
                </div>
                <div className={classes.error}><ErrorMessage name="email" /></div>


                <div className={classes.userDiv}>
                    <label>Password</label>
                    <Field
                        autoComplete="off"
                        className={classes.field}
                        id="password"
                        type="password"
                        name="password"
                        placeholder="********"
                    />
                </div>
                <div className={classes.error}><ErrorMessage name="password" /> </div>

                <div className={classes.userDiv}>
                    <label> Confirm Password</label>
                    <Field
                        autoComplete="off"
                        className={classes.field}
                        id="confirmpassword"
                        type="password"
                        name="confirmpassword"
                        placeholder="********"
                    />
                </div>
                <div className={classes.error}><ErrorMessage name="confirmpassword" /> </div>



                <div className={classes.btn}>
                    <Button type="reset" className={classes.resetBtn}>reset</Button>
                    <Button type="submit" className={classes.submitBtn}>submit</Button>
                </div>

                <small className={classes.small}>have an account Login here <a href="login">here</a></small>
            </Form>
        </Formik>
    )
}

export default FormicValidation
