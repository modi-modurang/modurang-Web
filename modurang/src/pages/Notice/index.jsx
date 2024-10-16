import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';
import Sidebar from '../../components/sidebar/index';

import announceicon from '../../assets/icon/announce.svg';

const Main = () => {
    const [loading, setLoading] = useState(false);
    const [announce, setAnnounce] = useState([]);

    const getAnnounce = async () => {
        setLoading(true);
    
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/notice`,{
                headers:{
                    "ngrok-skip-browser-warning" : encodeURIComponent("하하하"),
                },
            });
            console.log('API 응답:', data);  // API 응답을 출력하여 확인
            setAnnounce(data.data || []);  // data에서 바로 data.data에 접근
        } catch (e) {
            console.error('API 호출 오류:', e);
            setAnnounce([]);  // 오류가 발생하면 빈 배열로 설정
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getAnnounce();
    }, []);

    return (
        <div className='notice'>
            <Sidebar />
            <div className='container'>
                <div className='title-container'>
                    <img src={announceicon} alt='공지사항logo' />
                    <span>공지사항</span>
                </div>
                <div className='post-container'>
                    <div className="item-top">
                        <p className='num'>번호</p>
                        <p className='title'>제목</p>
                        <p className="date">작성일자</p>
                    </div>
                    {
                        !loading && announce.length > 0 ? (
                            announce.map((announceItem) => (
                                <div className="item" key={announceItem.id}>
                                    <p className='num'>{announceItem.id}</p>
                                    <p className='title'>{announceItem.title}</p>
                                    <p className="date">
                                        {announceItem.createdAt ? 
                                            `${announceItem.createdAt.slice(2,4)}/${announceItem.createdAt.slice(5,7)}/${announceItem.createdAt.slice(8,10)}` 
                                            : 'N/A'}
                                    </p>
                                </div>
                            ))
                        ) : (
                            <p>{loading ? "Loading..." : "No announcements available."}</p>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Main;
