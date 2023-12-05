// ToastNotification.js
import React, {useEffect } from "react";

// css
import "./alert1s.css";

function Alert1s(props) {


    useEffect(() => {
        let timer = setTimeout(() => {
            props.setToastState(false);		// 1초 뒤, toastState가 false가 되면서 알림창이 사라진다
        },700);

        return () => { clearTimeout(timer) }
    }, []);

    return (
        <div className="toast-alert1">
            <p>장바구니에 추가되었습니다.</p>
        </div>
    );
}

export { Alert1s }