import React, { useState, useEffect } from 'react';
import "./MainPage.css"
import axios from 'axios';

const MainPage = () => {
    let [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("https://0a529599-0246-453b-9f69-c43532db7fa2.mock.pstmn.io/products")
        .then((result) => {
            products=result.data.products;//products data값
            setProducts(products);
        }).catch((error) => {
            console.log(`통신실패: ${error}`)
        })
    }, []);


    return (
        <div>
            <div id="header">
                <div id="header-area">
                    <img src="./images/icons/logo.png" alt="" />
                </div>
            </div>
            <div id="body">
                <div id="banner">
                    <img src="./images/banners/banner1.png" alt="" />
                </div>
                <h1>Products</h1>
                <div id="product-list">
                    {products.map((product, idx) => {
                        //console.log(product)
                        return (
                            <div className="product-card" key={idx}>{/* 반복해서 돌릴것-> unique key 값 지정 */}
                                <div>
                                    <img src={product.imageUrl} alt={product.name} className="product-img" />
                                </div>
                                <div className="product-contents">
                                    <span className="product-name">{product.name}</span>
                                    <span className="product-price">{product.price}</span>
                                    <span className="product-seller">
                                        <img className="product-avatar" src="./images/icons/avatar.png" alt="" />
                                        <span>{product.seller}</span>
                                    </span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div id="footer">
                <a href="#!">회사소개</a>
                <a href="#!">이용약관</a>
                <a href="#!">통신판매업:123-1234</a>
                <a href="#!">사업자등록번호:456-56-789654</a>
            </div>
        </div>
        
    );
};

export default MainPage;