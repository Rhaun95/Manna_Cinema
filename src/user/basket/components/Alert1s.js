// ToastNotification.js
import React, {useEffect } from "react";

// css
import "../css/alert1s.css";

function Alert1s(props) {

    useEffect(() => {
        let timer = setTimeout(() => {
            props.setToastState(false);		// 1초 뒤, toastState가 false가 되면서 알림창이 사라진다
        }, 2000);

        return () => { clearTimeout(timer) }
    }, []);

    return (
        <div className="toast-alert">
            <p>좌석 페이지로 이동합니다.</p>
        </div>
    );
}

export { Alert1s }