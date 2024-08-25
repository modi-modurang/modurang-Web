import React,{useState} from 'react';
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import './style.css';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  const [stuNum, setStuNum] = useState("")
  const [password, setPassword] = useState("")
  const [showPswd, setshowPswd] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

  const gotoSignuppage = () => {
    navigate("/signup");
};


  const cancelPaste = (e) => {
    e.preventDefault();
  }

  const handleStuNumChange = (e) => {
  const regex = /^[0-9]*$/;

  if (regex.test(e.target.value)) {
    setStuNum(e.target.value);
  }
  };
  

  const handlePasswordChange = (e) => {
    const inputValue = e.target.value;
    const sanitizedValue = inputValue.replace(/[^a-zA-Z0-9!@#$%^&*()_+{}|:"<>?~`[\];',./\\-]/g, '');
    setPassword(sanitizedValue);
  }
  const changePswd = () =>{
    if (showPswd === true){
      setshowPswd(false)
    }else{
      setshowPswd(true)
    }
  }

  const login = async () => {
    setLoading(true)
    if (stuNum === "" || password ===""){
      toast.error("학번 또는 비밀번호가 잘못 되었습니다")
      setLoading(false)
      return
    }
    try {
      const { data } = await axios.post(`https://7d60-2001-2d8-2051-3f41-fcee-2915-b92e-2830.ngrok-free.app/auth/login`, {
        studentNumber: stuNum,
        password
      })

      localStorage.setItem('accessToken', data.accessToken)
      localStorage.setItem('refreshToken', data.refreshToken)

      navigate('/')
    } catch (e) {
      if (axios.isAxiosError(e)) {
        const code = e.response.data.code

        if (code === 'USER_NOT_FOUND') {
          toast.error("학번 또는 비밀번호가 잘못 되었습니다")

          return
        }
      }
    } finally {
      setLoading(false)
    }
  }
  

  return (
    <div className="login-container">
      <h1>로그인</h1>
      <input
    type="text"
    onPaste={handleStuNumChange}
    onChange={handleStuNumChange}
    value={stuNum}
    maxLength="4"
    placeholder="학번"
  />
      <div className="passwordbox">
        <input type={showPswd ? "text" : "password"} onPaste={cancelPaste} onChange={handlePasswordChange} value={password} maxLength="200" placeholder="비밀번호" />
        <div className="showpassword"  onClick={changePswd}></div>
      </div>
      <button className="login-button" onClick={login} disabled={loading}>로그인 하기</button>
      <p className='noaccount'>모두랑 계정이 없다면? <span className='signupbutton' onClick={gotoSignuppage}>회원가입하기</span></p>
      <ToastContainer
        position='top-right'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover={false}
        limit={5}
       />
    </div>
  );
}

export default Login;
