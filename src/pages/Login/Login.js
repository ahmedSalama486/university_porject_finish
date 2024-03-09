import React  from "react";
import * as Components from './Components';
import './style.css'
import { MdOutlineMail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";

const Login = () => {

const [signIn, toggle] = React.useState(true);
return( 
    <div className="login">
    <Components.Container>
        <Components.SignUpContainer signinIn={signIn}>
            <Components.Form>
                <Components.Title>Create Account</Components.Title>
                <Components.Input type='text' placeholder='Name' className=""/>
                <FaUser  className="user_icon"/>
                <Components.Input type='email' placeholder='Email' />
                <MdOutlineMail  className="icons"/>
                <Components.Input type='password' placeholder='Password' />
                <RiLockPasswordLine  className="password"/>
                <Components.Button>Sign Up</Components.Button>
            </Components.Form>
        </Components.SignUpContainer>

        <Components.SignInContainer signinIn={signIn}>
            <Components.Form>
                <Components.Title>Sign in</Components.Title>
                <Components.Input type='email' placeholder='Email' />
                <MdOutlineMail  className="icon"/>
                <Components.Input type='password' placeholder='Password' />
                <RiLockPasswordLine  className="password_signin"/>
                <Components.Anchor href='#'>Forgot your password?,Click Here!</Components.Anchor>
                <Components.Button>Sigin In</Components.Button>
            </Components.Form>
        </Components.SignInContainer>

        <Components.OverlayContainer signinIn={signIn}>
            <Components.Overlay signinIn={signIn}>

            <Components.LeftOverlayPanel signinIn={signIn}>
                <Components.Title>Welcome Back!</Components.Title>
                <Components.Paragraph>
                    To keep connected with us please login with your personal info
                </Components.Paragraph>
                <Components.GhostButton onClick={() => toggle(true)}>
                    Sign In
                </Components.GhostButton>
                </Components.LeftOverlayPanel>

                <Components.RightOverlayPanel signinIn={signIn}>
                <Components.Title>Hello, Friend!</Components.Title>
                <Components.Paragraph>
                    Enter Your personal details and start journey with us
                </Components.Paragraph>
                    <Components.GhostButton onClick={() => toggle(false)}>
                        Sigin Up
                    </Components.GhostButton> 
                </Components.RightOverlayPanel>

            </Components.Overlay>
        </Components.OverlayContainer>

    </Components.Container>
    </div>
)

};

export default Login;

