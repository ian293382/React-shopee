
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import Input from "antd/es/input/Input";
import { Button } from "antd/es/radio";
import React, { useContext, useEffect, useState } from "react"
import AuthContext from "./AuthContext";
import { useNavigate } from "react-router-dom";
import { message } from "antd";


const LoginForm = () => {
    const navigate = useNavigate();
    const {login, isAuthenticated } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const handleLogin = ({ token,error }) => {
            // 不要在表單內做api 去外部引入 維護困難
    // console.log(handleLogin) // 排錯第一步 後來發性都是undef 就是沒帶到參數 先用state 卡著
    // login is async function 所以可以用 promise所以可以用 .then進行跳轉頁面 但不要做原本的location.assign => 用history
    login(username, password).then(({ token, error }) => {
        if (!token) {
            message.error(error);
        }
    })
          
    };
    useEffect(() => {
        isAuthenticated && navigate('/');
    },[isAuthenticated]);
    //useEffect 的目的是在組件渲染後訂閱一些效果。這裡有兩個參數：函數：定義當特定的條件被滿足時要執行的代碼。依賴數組：包含 useEffect 中使用的變數，當這些變數發生變化時，useEffect 會重新運行。
    // 當 isAuthenticated 這個狀態變化時，useEffect 會被觸發。
    // 如果 isAuthenticated 為真（即用戶已經通過身份驗證），就會執行 navigate('/')。
    // navigate('/') 用於導航到根路徑（/），這意味著如果用戶已經通過身份驗證，就會自動跳轉到應用的首頁或者根路徑。
    return  <div>
        <Input className="mb-3"
                size="large"
                type="text"
                placeholder="請輸入帳號"
                prefix={< UserOutlined />}
                value={username}
                onChange={element => setUsername(element.target.value)} 
                />

        <Input  className="mb-3"
                size="layge"
                type="password"
                placeholder="請輸入密碼"
                prefix={< LockOutlined />} 
                value={password}
                onChange={element => setPassword(element.target.value)}
                />
        <Button onClick={handleLogin}>登入</Button>
    </div>
}

export default LoginForm;