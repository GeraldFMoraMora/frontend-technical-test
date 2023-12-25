import '../styles/Home.css'

export function Home ({ setLoginFlag , setSignUpFlag }) {

    const handleLoginBtn = () => {
        setLoginFlag(true);
    } 
    const handleSignUpBtn = () => {
        setSignUpFlag(true);
    } 
    return(
        <div className='home-principal-div'>
            <div className='title-home-div'>
                <h1>Welcome</h1>
            </div>
            <div className='btns-home-div'>
                <button className='btn-sign' onClick={handleSignUpBtn}>Sign Up</button>
                <button className='btn-log' onClick={handleLoginBtn}>Login</button>
            </div>
        </div>
    );
}