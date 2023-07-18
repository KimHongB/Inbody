function WrapComponent(){
    return(
        <div id="wrap">
            <SkipComponent/>
            <HeaderComponent/>
            <MainComponent/>
            <FooterComponent/>
        </div>
    )
}

    function SkipComponent(){
        return(
            <ul id="skip">
                <li><a href="#header">헤더바로가기</a></li>
                <li><a href="#main">메인바로가기</a></li>
                <li><a href="#footer">하단바로가기</a></li>
        </ul>                
        )
    }

    function HeaderComponent(){
        return(
            <header id="header">
                <div className="title-img">
                    <img src="./img/topbanner-main-fainal_1.jpg" alt=""/>
                </div>
                <div className="title-box1">
                    <div className="gap">
                        <div className="content">
                            <ul className="log">
                                <li>
                                    <a href="#" className="log-btn">
                                    회원가입</a>
                                </li>
                                <li><a href="#" className="log-btn">로그인</a></li>
                                <li><a href="#" className="log-btn">주문배송조회</a></li>
                                <li><a href="#" className="log-btn">고객센터</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="title-box2">
                    <div className="gap">
                        <div className="left-box">
                            <ul className="category">
                                <li>
                                    <a href="#" className="ctg-btn">전체카테고리
                                        <div className="hamberger">
                                            <i></i>
                                            <i></i>
                                            <i></i>
                                        </div>
                                </a>
                            </li>
                                <li><a href="#" className="ctg-btn">HOME</a></li>
                                <li><a href="#" className="ctg-btn">베스트</a></li>
                                <li><a href="#" className="ctg-btn">신상품</a></li>
                                <li><a href="#" className="ctg-btn">배송선택</a></li>
                                <li><a href="#" className="ctg-btn">기프티콘주문</a></li>
                            </ul>
                        </div>
                        <div className="right-box">
                            <ul className="search">
                                <li>
                                    <div>
                                        <form name="search_form" id="searchForm" action="./search.php">
                                            <input type="text" name="userSearch" id="userSearch"/>
                                        </form>
                                    </div>
                                
                                </li>
                                <li><a href="#"><img src="./img/cart.png" alt=""/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        )
    }

    function MainComponent(){
        return(
            <main id="main">
                <Section1Component/>
                <Section2Component/>
                <Section3Component/>
                <Section4Component/>
                <Section5Component/>
                <Section6Component/>
                <Section7Component/>
                <Section8Component/>
                <Section9Component/>
                <Section10Component/>
            </main>
        )
    }
        function Section1Component(){
            return(
                <section id="section1">
                    <div className="main-img">
                        <img src="./img/2023.02_발렌타인-메인배너.jpg" alt=""/>
                    </div>
                </section>
            )
        }
        function Section2Component(){
            return(
                <section id="section2">
                    <div className="list">
                        <div className="txt-box">
                            <p>인기 검색어</p>
                        </div>
                        <div className="list-box">
                            <p>1</p>
                            <span></span>
                        </div>
                        <div>
                            <select name="select" id="select">
        
                                <option value=""><p>케이크</p></option>
                                <option value=""><p>마들렌</p></option>
                                <option value=""><p>튀김소보로</p></option>
                                <option value=""><p>롤</p></option>
                                <option value=""><p>순수롤</p></option>
                                <option value=""><p>약과</p></option>
                                <option value=""><p>튀김</p></option>
                                <option value=""><p>부추빵</p></option>
                                <option value=""><p>부추</p></option>
                                <option value=""><p>순수</p></option>
                            </select>
                        </div>
                    </div>
                    <div className="containor">
                        <div className="gap">
                            <div className="title">
                                <h1>성심당 특산품</h1>
                            </div>
                            <div className="content">
                                <ul>
                                    <li>
                                        <img src="./img/IMG05.png" alt=""/>
                                        <div className="txt-box">
                                            <div className="top-txt">
                                                <h2>튀소세트</h2>
                                            </div>
                                            <div className="bottom-txt">
                                                <h1>10,000원</h1>
                                            </div>
                                            <div className="icon">
                                                <a href="#" className="cart-btn2">
                                                <img src="./img/cart2.png" alt=""/>
                                                </a>
                                            </div>  
                                        </div>
                                    </li>
                                    <li>
                                        <img src="./img/초코튀소삼형제.jpg" alt=""/>
                                        <div className="txt-box">
                                            <span className="top-txt">
                                                <h2>튀소패밀리(튀소2,구마2,초코2)
                                                    </h2>
                                            </span>
                                            <div className="bottom-txt">
                                                <h1>10,800원</h1>
                                            </div>
                                            <div className="icon">
                                                <a href="#" className="cart-btn2">
                                                <img src="./img/cart2.png" alt=""/>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <img src="./img/IMG09.png" alt=""/>
                                        <div className="txt-box">
                                            <span className="top-txt">
                                                <h2>반반세트</h2>
                                            </span>
                                            <div className="bottom-txt">
                                                <h1>11,000원</h1>
                                            </div>
                                            <div className="icon">
                                                <a href="#" className="cart-btn2">
                                                <img src="./img/cart2.png" alt=""/>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <img src="./img/IMG08.png" alt=""/>
                                        <div className="txt-box">
                                            <span className="top-txt">
                                                <h2>형제세트</h2>
                                            </span>
                                            <div className="bottom-txt">
                                                <h1>10,000원</h1>
                                            </div>
                                            <div className="icon">
                                                <a href="#" className="cart-btn2">
                                                <img src="./img/cart2.png" alt=""/>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            )
        }
        function Section3Component(){
            return(
                <section id="section3">
                    <div className="containor">
                        <div className="gap">
                            <div className="title">
                                <h1>성심당 베스트</h1>
                                <span><a href="#" className="+btn">더보기+</a></span>
                            </div>   
                            <div className="content">
                                <ul>
                                    <li>
                                        <img src="./img/IMG71.jpg" alt=""/>
                                        <div className="txt-box">
                                            <div className="top-txt">
                                                <h2>보문산메아리(현장구매만 가능-2/28까지)</h2>
                                            </div>
                                            <div className="bottom-txt">
                                                <h1>품절</h1>
                                            </div>
                                            <div className="icon">
                                                <a href="#" className="cart-btn2">
                                                <img src="./img/cart2.png" alt=""/>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <img src="./img/202029442772071523194.jpg" alt=""/>
                                        <div className="txt-box">
                                            <span className="top-txt">
                                                <h2>순수마들렌 2호</h2>
                                            </span>
                                            <div className="bottom-txt">
                                                <h1>12,000원</h1>
                                            </div>
                                            <div className="icon">
                                                <a href="#" className="cart-btn2">
                                                <img src="./img/cart2.png" alt=""/>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <img src="./img/20_결혼답례품_약과전병세트.jpg" alt=""/>
                                        <div className="txt-box">
                                            <span className="top-txt">
                                                <h2>약과전병세트</h2>
                                            </span>
                                            <div className="bottom-txt">
                                                <h1>24,000원</h1>
                                            </div>
                                            <div className="icon">
                                                <a href="#" className="cart-btn2">
                                                <img src="./img/cart2.png" alt=""/>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <img src="./img/IMG105.jpg" alt=""/>
                                        <div className="txt-box">
                                            <span className="top-txt">
                                                <h2>옛맛심전병 2호</h2>
                                            </span>
                                            <div className="bottom-txt">
                                                <h1>38,000원</h1>
                                            </div>
                                            <div className="icon">
                                                <a href="#" className="cart-btn2">
                                                <img src="./img/cart2.png" alt=""/>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            )
        }
        function Section4Component(){
            return(
                <section id="section4">
                    <div className="containor">
                        <div className="gap">
                            <div className="title">
                                <h1>성심당 신상빵</h1>
                                <span><a href="#" className="+btn">더보기+</a></span>
                            </div>
                            <div className="content">
                                <ul>
                                    <li>
                                        <img src="./img/대흥동종소리1.jpg" alt=""/>
                                        <div className="txt-box">
                                            <div className="top-txt">
                                                <h2>대흥동 종소리(10개입)</h2>
                                            </div>
                                            <div className="bottom-txt">
                                                <h1>품절</h1>
                                            </div>
                                            <div className="icon">
                                                <a href="#" className="cart-btn2">
                                                <img src="./img/cart2.png" alt=""/>
                                                </a>
                                                </div>
                                        </div>
                                    </li>
                                    <li>
                                        <img src="./img/2022_양갱-6구.jpg" alt=""/>
                                        <div className="txt-box">
                                            <span className="top-txt">
                                                <h2>대전부르스양갱(6개입)</h2>
                                            </span>
                                            <div className="bottom-txt">
                                                <h1>품절</h1>
                                            </div>
                                            <div className="icon">
                                                <a href="#" className="cart-btn2">
                                                <img src="./img/cart2.png" alt=""/>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <img src="./img/22_제로쿠키.png" alt=""/>
                                        <div className="txt-box">
                                            <span className="top-txt">
                                                <h2>제로쿠키세트(18개입)</h2>
                                            </span>
                                            <div className="bottom-txt">
                                                <h1>품절</h1>
                                            </div>
                                            <div className="icon">
                                                <a href="#" className="cart-btn2">
                                                <img src="./img/cart2.png" alt=""/>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <img src="./img/22_제로쿠키.png" alt=""/>
                                        <div className="txt-box">
                                            <span className="top-txt">
                                                <h2></h2>
                                            </span>
                                            <div className="bottom-txt">
                                                <h1></h1>
                                            </div>
                                            <div className="icon">
                                                <a href="#" className="cart-btn2">
                                                <img src="./img/cart2.png" alt=""/>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            )
        }
        function Section5Component(){
            return(
                <section id="section5">
                    <span><img src="./img/15겹크레페_1280x144.png" alt=""/></span>
                </section>
            )
        }
        function Section6Component(){
            return(
                <section id="section6">
                    <div className="containor">
                        <div className="gap">
                            <div className="title">
                                <h1>배송 수단별 상품</h1>
                                <span><a href="#" className="+btn">택배상품 더보기+</a></span>
                            </div>
                            <div className="post">
                                <ul>
                                    <li><a href="#" className="post-btn post-btn1">택배</a></li>
                                    <li><a href="#" className="post-btn post-btn2">KTX특송</a></li>
                                    <li><a href="#" className="post-btn post-btn3">대전배송</a></li>
                                    <li><a href="#" className="post-btn post-btn4">매장방문</a></li>
                                </ul>
                            </div>
                            <div className="content">
                                <ul id="menu1" className="product">
                                    <li>
                                        <img src="./img/20_결혼답례품_약과전병세트.jpg" alt=""/>
                                        <div className="txt-box">
                                            <div className="top-txt">
                                                <h2>약과전병세트</h2>
                                            </div>
                                            <div className="bottom-txt">
                                                <h1>24,000원</h1>
                                            </div>
                                            <div className="icon">
                                                <a href="#" className="cart-btn2">
                                                <img src="./img/cart2.png"alt=""/>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <img src="./img/202115442361330523469.jpg" alt=""/>
                                        <div className="txt-box">
                                            <span className="top-txt">
                                                <h2>파이만주세트(8ea)</h2>
                                            </span>
                                            <div className="bottom-txt">
                                                <h1>9,600원</h1>
                                            </div>
                                            <div className="icon">
                                                <a href="#" className="cart-btn2">
                                                <img src="./img/cart2.png" alt=""/>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <img src="./img/IMG96.jpg" alt=""/>
                                        <div className="txt-box">
                                            <span className="top-txt">
                                                <h2>볼콘브롯(오전준비불가제품)</h2>
                                            </span>
                                            <div className="bottom-txt">
                                                <h1>6,000원</h1>
                                            </div>
                                            <div className="icon">
                                                <a href="#" className="cart-btn2">
                                                <img src="./img/cart2.png" alt=""/>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <img src="./img/IMG23.png" alt=""/>
                                        <div className="txt-box">
                                            <span className="top-txt">
                                                <h2>월넛브레드</h2>
                                            </span>
                                            <div className="bottom-txt">
                                                <h1>4,000원</h1>
                                            </div>
                                            <div className="icon">
                                                <a href="#" className="cart-btn2">
                                                <img src="./img/cart2.png" alt=""/>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <ul id="menu2" className="product">
                                    <li>
                                        <img src="./img/IMG01.png" alt=""/>
                                        <div className="txt-box">
                                            <div className="top-txt">
                                                <h2>튀김소보로</h2>
                                            </div>
                                            <div className="bottom-txt">
                                                <h1>1,700원</h1>
                                            </div>
                                            <div className="icon">
                                                <a href="#" className="cart-btn2">
                                                    <img src="./img/cart2.png" alt=""/>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <img src="./img/IMG03.png" alt=""/>
                                        <div className="txt-box">
                                            <span className="top-txt">
                                                <h2>튀소구마</h2>
                                            </span>
                                            <div className="bottom-txt">
                                                <h1>1,700원</h1>
                                            </div>
                                            <div className="icon">
                                                <a href="#" className="cart-btn2">
                                                    <img src="./img/cart2.png" alt=""/>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <img src="./img/2020267652648880.png" alt=""/>
                                        <div className="txt-box">
                                            <span className="top-txt">
                                                <h2>초코튀소</h2>
                                            </span>
                                            <div className="bottom-txt">
                                                <h1>2,000원</h1>
                                            </div>
                                            <div className="icon">
                                                <a href="#" className="cart-btn2">
                                                    <img src="./img/cart2.png" alt=""/>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <img src="./img/IMG04.png" alt=""/>
                                        <div className="txt-box">
                                            <span className="top-txt">
                                                <h2>판타롱부추빵</h2>
                                            </span>
                                            <div className="bottom-txt">
                                                <h1>2,000원</h1>
                                            </div>
                                            <div className="icon">
                                                <a href="#" className="cart-btn2">
                                                    <img src="./img/cart2.png" alt=""/>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <ul id="menu3" className="product">
                                    <li>
                                        <img src="./img/202029249127032523210.jpg" alt=""/>
                                        <div className="txt-box">
                                            <div className="top-txt">
                                                <h2>순수롤</h2>
                                            </div>
                                            <div className="bottom-txt">
                                                <h1>14,000원</h1>
                                            </div>
                                            <div className="icon">
                                                <a href="#" className="cart-btn2">
                                                <img src="./img/cart2.png"alt=""/>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <img src="./img/IMG24.png" alt=""/>
                                        <div className="txt-box">
                                            <span className="top-txt">
                                                <h2>명란바게트</h2>
                                            </span>
                                            <div className="bottom-txt">
                                                <h1>3,800원</h1>
                                            </div>
                                            <div className="icon">
                                                <a href="#" className="cart-btn2">
                                                <img src="./img/cart2.png" alt=""/>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <img src="./img/오키도키슈_세트_패키지_박스.jpg" alt=""/>
                                        <div className="txt-box">
                                            <span className="top-txt">
                                                <h2>오키도키슈세트-4개입(오후배송만가능)</h2>
                                            </span>
                                            <div className="bottom-txt">
                                                <h1>14,000원</h1>
                                            </div>
                                            <div className="icon">
                                                <a href="#" className="cart-btn2">
                                                <img src="./img/cart2.png" alt=""/>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <img src="./img/22_순수마들렌패키지.png" alt=""/>
                                        <div className="txt-box">
                                            <span className="top-txt">
                                                <h2>순수마들렌 1호</h2>
                                            </span>
                                            <div className="bottom-txt">
                                                <h1>품절</h1>
                                            </div>
                                            <div className="icon">
                                                <a href="#" className="cart-btn2">
                                                <img src="./img/cart2.png" alt=""/>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <ul id="menu4" className="product">
                                    <li>
                                        <img src="./img/IMG60.jpg" alt=""/>
                                        <div className="txt-box">
                                            <div className="top-txt">
                                                <h2>야채고로게(오후배송만 가능)</h2>
                                            </div>
                                            <div className="bottom-txt">
                                                <h1>2,300원</h1>
                                            </div>
                                            <div className="icon">
                                                <a href="#" className="cart-btn2">
                                                <img src="./img/cart2.png"alt=""/>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <img src="./img/IMG61.jpg" alt=""/>
                                        <div className="txt-box">
                                            <span className="top-txt">
                                                <h2>김치찹쌀주먹밥(오후배송만 가능)</h2>
                                            </span>
                                            <div className="bottom-txt">
                                                <h1>2,300원</h1>
                                            </div>
                                            <div className="icon">
                                                <a href="#" className="cart-btn2">
                                                <img src="./img/cart2.png" alt=""/>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <img src="./img/IMG34.jpg" alt=""/>
                                        <div className="txt-box">
                                            <span className="top-txt">
                                                <h2>성심순크림빵(현장구매만 가능)</h2>
                                            </span>
                                            <div className="bottom-txt">
                                                <h1>품절</h1>
                                            </div>
                                            <div className="icon">
                                                <a href="#" className="cart-btn2">
                                                <img src="./img/cart2.png" alt=""/>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <img src="./img/IMG34.jpg" alt=""/>
                                        <div className="txt-box">
                                            <span className="top-txt">
                                                <h2></h2>
                                            </span>
                                            <div className="bottom-txt">
                                                <h1></h1>
                                            </div>
                                            <div className="icon">
                                                <a href="#" className="cart-btn2">
                                                <img src="./img/cart2.png" alt=""/>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
        
                </section>
            )
        }
        function Section7Component(){
            return(
                <section id="section7">
                    <div className="container">
                        <div className="instar">
                            <img src="./img/insta.png" alt=""/>
                            <h1>인스타그램</h1>
                            <h2>@sungsimdang_official</h2>
                            <span><a href="#" className="+btn">더보기+</a></span>
                        </div>
        
                    </div>
                </section>  
            )
        }
        function Section8Component(){
            return(
                <section id="section8">
                    <div className="container">
                        <div className="gap">
                            <div className="title">
                                <img src="./img/insta.png" alt=""/>
                                <h1>패밀리 브랜드 인스타그램</h1>
                            </div>
                            <div className="content">
                                <ul>
                                    <li><a href="#" className="instar-btn"><img src="./img/f_banner1.png" alt=""/></a></li>
                                    <li><a href="#" className="instar-btn"><img src="./img/f_banner2.png" alt=""/></a></li>
                                    <li><a href="#" className="instar-btn"><img src="./img/f_banner3.png" alt=""/></a></li>
                                    <li><a href="#" className="instar-btn"><img src="./img/f_banner4.png" alt=""/></a></li>
                                    <li><a href="#" className="instar-btn"><img src="./img/f_banner5.png" alt=""/></a></li>
                                    <li><a href="#" className="instar-btn"><img src="./img/f_banner6.png" alt=""/></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>  
            )
        }
        function Section9Component(){
            return(
                <section id="section9">
                    <div className="container">
                        <div className="contentbox_1">
                            <div className="call_number">
                                <h2>고객센터</h2>
                                <h1>1588-8069</h1>
                                <span>AM 9:00 - PM 17:00 (점심시<s></s>간11:00-12:00)</span>
                            </div>
                        </div>
                        <div className="contentbox_2">
                            <ul>
                                <li><a href="#" className="qna-btn">1:1 문의하기</a></li>
                                <li><a href="#" className="qna-btn">FAQ 바로가기</a></li>
                            </ul>
                        </div>
                        <div className="contentbox_3">
                            <div className="title">
                                <h2>공지사항</h2>
                                <span><a href="#" className="+btn">더보기+</a></span>
                            </div>
                            <div className="content">
                                <ul>
                                    <li><a href="#" className="gongzi">방문수령 예약 관련 안내(픽업매..</a><span>2023-01-11</span></li>
                                    <li><a href="#" className="gongzi">크리스마스케익 예약(방문 및 배..</a><span>2022-12-15</span></li>
                                    <li><a href="#" className="gongzi">KTX특송 주문마감 및 수화물센..</a><span>2022-12-14</span></li>
                                    <li><a href="#" className="gongzi">[중요] 성심당멤버십 앱 안내입니..</a><span>2022-08-25</span></li>
                                    <li><a href="#" className="gongzi">KTX특송 배송제한 안내(광명역..</a><span>2022-08-04</span></li>
                                    <li><a href="#" className="gongzi">코레일 수화물센터 파업으로 인한..</a><span>2022-05-23</span></li>
                                    <li><a href="#" className="gongzi">※ 안내 ※ 밀키트 가격 인상.</a><span>2022-04-28</span></li>
                                    <li>
                                        <a href="#" className="gongzi">
                                            하절기 배송(대전배송 및 KTX특..
                                        </a>
                                        <span>
                                            2022-04-25
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            )
        }
        function Section10Component(){
            return(
                <section id="section10">
                    <div className="container">
                        <div className="left_list">
                            <ul>
                                <li><a href="#" className="list-btn">회사소개</a></li>
                                <li><a href="#" className="list-btn">매장안내</a></li>
                                <li><a href="#" className="list-btn">이용약관</a></li>
                                <li><a href="#" className="list-btn">고객센터</a></li>
                                <li><a href="#" className="list-btn">개인정보처리방침</a></li>
                            </ul>
                        </div>
                        <div className="right_sns">
                            <a href="#" className="sns_btn"><img src="./img/IMGBIN_instagram-facebook-png_vfDUv1a6.png" alt=""/></a>
                            <a href="#" className="sns_btn"><img src="./img/IMGBIN_facebook-png_BjuQQ9YG.png" alt=""/></a>
                        </div>
                    </div>
                </section>
            )
        }

    function FooterComponent(){
        return(
            <footer id="footer">
                <div className="container">
                    <div className="txt-box">
                        <span>대표: 임영진</span>
                        <span>법인명: 로쏘 주식회사</span>
                        <span>전화: 1588-8069</span>
                        <span>E-mail: yoonhd81@sungsimdang.co.kr</span>
                        <br/>
                        <span>주소: 대전 중구 대종로480번길 15(은행동)</span>
                        <span>개인정보관리책임자: 윤현돈 (yoonhd81@sungsimdang.co.kr)</span>
                        <br/>
                        <span>사업자등록번호: 305-81-48738</span>
                        <span>통신판매신고: 제2015-대전중구-0015호</span>
                        <br/>
                    </div>
                    <div className="logo-box">
                        <a href="#">
                            <img src="./img/ft_logo_2.png" alt=""/>
                        </a>
                    </div>
                </div>
            </footer>            
        )
    }

ReactDOM.render(
    <WrapComponent/>,
    document.getElementById('root')
);