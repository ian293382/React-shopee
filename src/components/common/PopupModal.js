import { Modal } from "antd";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Pop from '../image/ADS.png'
import { Link } from "react-router-dom";

const eventProductId = 'p003';

const PopupModal = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // getItem 取出字串，透過 JSON.parse 解析
        const popupHistoryString = localStorage.getItem('shopee:popup.history');
        if (popupHistoryString) {
            const popupHistory = JSON.parse(popupHistoryString);
            // 確認距離上次廣告時間是否小於 3000 毫秒（1 秒）
            if (Date.now() - popupHistory.time < 1000) {
                setIsVisible(false);
            } else {
                // 更新 localStorage 中的時間
                const updatedHistory = {
                    ...popupHistory,
                    time: Date.now(),
                    
                };
                setIsVisible(true);
                localStorage.setItem("shopee:popup.history", JSON.stringify(updatedHistory));
            }
        } else {
            // 如果 localStorage 中沒有歷史記錄，新增一筆
            const history = {
                time: Date.now(),
                productId: eventProductId,
            };
            localStorage.setItem("shopee:popup.history", JSON.stringify(history));
        }
    }, []);

    return isVisible && (
        <>
            <Modal
                isVisible
                footer={null}
                onOk={() => setIsVisible(false)}
                onCancel={() => setIsVisible(false)}
            >
                <Link to={`/${eventProductId}`}>
                    <img src={Pop} alt={`/${eventProductId}-event`} style={{ width: '100%', height: 'auto' }} />
                </Link>
            </Modal>
        </>
    );
}

export default PopupModal;
