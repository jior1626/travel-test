// Styles
import "./Login.css"

// Redux
import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import { authSelector, setAuthFailed, setLoading, setAuthSuccess } from "../../../redux/states/auth.slice";

// Libraries
import { useNavigate } from "react-router-dom";

// Components Library
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";

// Components UI
import Loading from "../../../components/Spinner/Spinner";
import Logo from "./../../../assets/img/login-logo-travel.jpg";

// Data Fake
import { users } from "../../../data/user";

const Login = () => {

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [showAlert, setShowAlert] = useState(false);

    const [messageAlert, setMessageAlert] = useState("");

    const [typeAlert, setTypeAlert] = useState("");

    const { user, isLoading, error, isAuth } = useAppSelector(authSelector)

    const dispatch = useAppDispatch();

    let navigate = useNavigate();

    const authLogin = async (e: any) => {
        e.preventDefault();
        dispatch(setLoading(true));
        if(email != "" && password != "") {
            const user = users.find(item => item.email == email && item.password == password);
            if(user) {
                dispatch(setAuthSuccess(user));
                navigate(`/home`)
            } else {
                dispatch(setAuthFailed("Usuario no registrado. Por favor registrese!!!"));
                setTypeAlert("danger");
                setMessageAlert("Usuario no registrado. Por favor registrese!!!")
                setShowAlert(true);
            }
        } else {
            setTypeAlert("danger");
            setMessageAlert("Correo o contraseña vacios!!!")
            setShowAlert(true);
        }
    }

    return (
        <>
            { isLoading ? <Loading /> : <></> }
            <div className="d-flex flex-column justify-content-center ">
                <div className="view-content" >  
                    <div className="contain-alert">
                        {/* { showAlert ? <AlertBoostrap setShowAlert={setShowAlert} type={typeAlert} message={messageAlert} />: <></> } */}
                    </div>
                    <div className="content-auth">
                        <div className="image-logo">
                            <img src={Logo} alt="logo-login-btalent" width={400} />
                        </div>
                        <div className="form-login">
                            <Form className="ml-5" onSubmit={authLogin}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Correo <strong className="text-danger">*</strong></Form.Label>
                                    <Form.Control type="email" required placeholder="Ingrese el correo" onChange={e => setEmail(e.target.value)} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password <strong className="text-danger">*</strong></Form.Label>
                                    <Form.Control type="password" required placeholder="Contraseña" onChange={e => setPassword(e.target.value)}/>
                                </Form.Group>
                               
                                <div className="row">
                                    <div className="col-md-5">
                                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label="Recordarme" />
                                        </Form.Group>
                                    </div>
                                    <div className="col-md-7 ml-4">
                                        <a className="recovery-text">Olvidaste tu contraseña?</a>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-12 d-grid gap-2">
                                        <Button size="lg" variant="success" type="submit">
                                            Ingresar
                                        </Button>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div> 
                </div>
            </div>
        </>
        
    )
}

export default Login;