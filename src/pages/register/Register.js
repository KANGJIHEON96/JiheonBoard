import axios from "axios";
import { useRef } from "react";
import "./register.css";
import { useHistory } from "react-router";


export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("비밀번호가 달라요");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/register", user);
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">지헌'S 게시판</h3>
          <span className="loginDesc">
            게시판을 사용해보세용
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="닉네임"
              required
              ref={username}
              className="loginInput"
            />
            <input
              placeholder="이메일"
              required
              ref={email}
              className="loginInput"
              type="email"
            />
            <input
              placeholder="패스워드"
              required
              ref={password}
              className="loginInput"
              type="password"
              minLength="6"
            />
            <input
              placeholder="패스워드 확인"
              required
              ref={passwordAgain}
              className="loginInput"
              type="password"
            />
            <button className="loginButton" type="submit">
              회원가입
            </button>
            <button className="loginRegisterButton">계정으로 로그인하기</button>
          </form>
        </div>
      </div>
    </div>
  );
}