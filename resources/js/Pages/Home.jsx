import React from "react";
import { Link } from "@inertiajs/inertia-react";
import { Link as Scroll } from "react-scroll";
import Works from "../Components/Works";
import "../Components/Home.css";
import MainVisual from "../../image/mainvisual.jpg";


const Home = (props) => {
    const { auth } = props;
    const { user } = props;
    
    return (
        <div>
            <div className="main-visual">
                <img className="mainvisual-img" src={ MainVisual }></img>
                <h1 className="main-ttl">Portfolio</h1>
                { auth.user ? <Link className="loginout" href={route('logout')} method="post">Log Out</Link> : <Link className="loginout" href={route("login")}>Log In</Link> }
            </div>
            
            <div className="header">
                <nav>
                    <ul>
                        <li>
                            <Scroll to="profile" smooth={true} duration={600} offset={-90}>PROFILE</Scroll>
                        </li>
                        
                        <li>
                            <Scroll to="works" smooth={true} duration={900} offset={-90}>WORKS</Scroll>
                        </li>
                    </ul>
                </nav>
            </div>  
            
            <div className="container">
                <div className="wrap">
                    <h1 className="content-ttl __profile" id="profile">プロフィール</h1>
                    <div className="profile">
                        <div>
                            { user ? user.image ? <div className="prof-img-box"><img className="prof-img" src={`https://portfolio-prof-img.s3.ap-northeast-1.amazonaws.com/${user.image}`}/></div> : <div><p>no image</p></div> : <div><p>no image</p></div>}
                            { auth.user && <Link href={route("edit")}>変更</Link> }
                        </div>
                        
                        <div className="prof-content">
                            <h2>森野刀磨 -Morino Toma-</h2>
                            
                            <div>
                                <p>生年月日: 1999/8/25(23歳)</p>
                                <p>　　所属: 群馬大学大学院　理工学府　知能機械創製理工学教育プログラム</p>
                                <p>　　出身: 栃木県</p>
                                <p className="text">プログラミング歴は半年程度で、PHPやAWSはプログラミングスクール、その他の言語は独学で学んでいます。現在はプログラミングスクールのメンターをしています。<br/>「ユーザーから不満の出ないアプリ」を製作できるフルスタックエンジニアを目指します！</p>
                            </div>
                            
                            <div className="skill-content">
                                <h3>スキル</h3>
                                <ul className="skills">
                                    <li className="skill-item">
                                        <p>HTML/CSS</p>
                                        <div>
                                            <i className="devicon-html5-plain-wordmark icon"></i>
                                            <i className="devicon-css3-plain-wordmark icon"></i>
                                        </div>
                                    </li>
                                    
                                    <li className="skill-item">
                                        <p>PHP</p>
                                        <i className="devicon-php-plain icon __php"></i>
                                    </li>
                                    
                                    <li className="skill-item">
                                        <p>JavaScript</p>
                                        <div className="js-pos">
                                            <i className="devicon-javascript-plain icon __js"></i>
                                        </div>
                                    </li>
                                    
                                    <li className="skill-item">
                                        <p>AWS</p>
                                        <i className="devicon-amazonwebservices-plain-wordmark icon __aws"></i>
                                    </li>
                                </ul>
                                
                                <a href="https://github.com/Touma-M08" target="_blank" rel="noopener noreferrer" className="github">
                                    <i class="devicon-github-original colored icon __github"></i>
                                    <p>GitHub</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <Works />
            </div>
        </div>
    );
}

export default Home;