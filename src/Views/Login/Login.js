import React, { useState } from "react";
import './Login.css'
import 'hover.css/css/hover-min.css';
import Anime, { anime } from 'react-anime';
function Login(props) {
    const [credentials, setCredentials] = useState([
        {
            name: 'Owais',
            profileImg: 'https://media.istockphoto.com/id/1431057864/photo/modern-business-man-in-casual-blue-shirt-standing-with-crossed-arms-on-blue-background.jpg?s=1024x1024&w=is&k=20&c=1ztNg_LSiHmSkwnV_VtMSOjkKByQzvWZ06XaSiQ9WJc=',
            email: 'owais@gmail.com',
            password: '1234'
        },
        {
            name: 'Saleem',
            profileImg: 'https://media.istockphoto.com/id/1438969575/photo/smiling-young-male-college-student-wearing-headphones-standing-in-a-classroom.jpg?s=612x612&w=0&k=20&c=yNawJP9JGXU6LOL262ME5M1U2xxNKQsvT7F9DZhZCh4=',
            email: 'saleem@gmail.com',
            password: '12345'

        },
        {
            name: 'Kaleem',
            profileImg: 'https://media.istockphoto.com/id/1435745704/photo/portrait-of-smiling-mid-adult-businessman-standing-at-corporate-office.jpg?s=612x612&w=0&k=20&c=NtTebZxpAfw964hJJut8WFa__eZEfO07CAKdqeFBrFU=',
            email: 'kaleem@gmail.com',
            password: '123456'

        },
        {
            name: 'Saleema',
            profileImg: 'https://media.istockphoto.com/id/1440945691/photo/smiling-middle-aged-man-enjoying-relaxing-time-at-home.jpg?s=612x612&w=0&k=20&c=-sCEe9KZEpc_yJldbhLVKj7FwpaxfaXBJfM59LR6_mI=',
            email: 'saleema@gmail.com',
            password: '1234567'

        },
        {
            name: 'Nasir',
            profileImg: 'https://media.istockphoto.com/id/1442429279/photo/senior-man-group-and-fitness-selfie-at-park-together-for-elderly-health-or-wellness-for.jpg?s=612x612&w=0&k=20&c=4QyQrKsr2eT5YTvNuVS4gmS642NvjQeOx0sEd5TtAOk=',
            email: 'nasir@gmail.com',
            password: '12345678'

        },
    ])
    const [fields, setFields] = useState(
        {
            email: '',
            password: ''
        }
    )
    const [errorMsg, setErrrorMsg] = useState('')
    const EditFields = (key, value) => {
       
        setFields({ ...fields, [key]: value })
    }
    const Check = () => {
        console.log('Login user', fields)
        if (fields.email && fields.password) {
            let array = []
            array = credentials.find(e => e.email == fields.email)
            if(fields.email == array.email && fields.password == array.password){
                props.setUserData(array)
                props.setUser(true)
                
                props.setUserData(array)
                setFields({ ...fields, ['email']: '' })
                setFields({ ...fields, ['password']: '' })
            }
            else{
                setErrrorMsg('invalid credentials')
            }
        }
        else{
            setErrrorMsg('Plz fill all fields')
        }
    }
    return (
        <div className="h-[100dvh] w-[100%] bg-[#27343D] flex items-center main-Login p-5">
            {/* Logo */}
            <div className="w-[50%] flex justify-center logo-div">
                <Anime
                    easing="easeOutElastic"
                    loop={true}
                    duration={1000}
                    direction="alternate"
                    delay={(el, index) => index * 240}
                    translateX="0%"
                    scale={[0.75, 0.9]}
                >

                    <div className="text-[5vw] text-[#b34646] logo-font-login ">
                        9HCM
                    </div>
                </Anime>
            </div>
            {/* separator */}
            <div className="border-r-[1px] border-[#48555D] w-[20px] h-[200px] login-separator" ></div>
            {/* Login Attributes */}
            <div className="w-[50%] flex justify-center">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <input className="hvr-grow bg-transparent border-[1px] border-[#48555D] rounded-md p-2 focus:border-[#b34646] placeholder:text-[#48555D] text-[#9199a0] focus:outline-none" placeholder="Email" onChange={(e) => { EditFields('email', e.target.value) }} />
                    <input type="password" className="hvr-grow bg-transparent border-[1px] border-[#48555D] rounded-md p-2 focus:border-[#b34646] placeholder:text-[#48555D] text-[#9199a0] focus:outline-none mb-[20px]" placeholder="Password" onChange={(e) => { EditFields('password', e.target.value) }} />
                    <button onClick={Check} className="hvr-grow px-3 py-2 rounded-md bg-[#b34646] text-[#c4cacf] style-font text-[20px] target:text-[black]">Connect
                        <i className="fa fa-chevron-circle-right hvr-icon"></i>
                    </button>
                    <p className="text-[#9e2c2c]">{errorMsg}</p>
                    <div className="flex justify-between text-[#48555D]">
                        <span>Forgot Password</span>
                        <span>-</span>
                        <span>Signup</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;

