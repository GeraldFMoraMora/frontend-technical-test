import '../styles/FormLogin.css';
import TaskAdmin from '../../TaskAdmin/TaskAdmin';
import { AuthService } from '../services/authService';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { Alert, Form } from 'react-bootstrap';

export function FormLogin() {
    const {
        user,
        pass,
        setUser,
        setPass,
        error,
        isLoggedIn,
        handleSubmit,
        errorDescription,
        customer,
        token,
        formRef,
    } = AuthService();
    

    return (
        <section>
            <div className='login-div'>
                {isLoggedIn === false && (
                <div className='login-elements-div'>
                    <div className="title-div">
                        <h2 className='title-h2'>Login</h2>
                    </div>
                    <form 
                        ref={formRef}
                        className='form-login'
                        onSubmit={handleSubmit}
                    >
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon2">@</InputGroup.Text>
                            <Form.Control
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            value={user}
                            onChange={e => setUser(e.target.value)}
                            />
                        </InputGroup>
                            
                        <Form.Control
                            type="password"
                            id="inputPassword6"
                            aria-describedby="passwordHelpBlock"
                            placeholder="Enter your password"
                            value={pass}
                            onChange={e => setPass(e.target.value)}
                        />

                        <Button type='submit' className='btn-login'>Login</Button>{' '}
                        {error && 
                        <Alert className="error-message" key={'warning'} variant={'warning'}>
                            Authentication failed: {errorDescription}
                        </Alert>
                    }

                    </form>
                    
                </div>)}
                {isLoggedIn === true && error === false && (
                <div>
                    <TaskAdmin customer={customer} token={token}/>
                </div>)}
            </div>
            
        </section>
    );
}