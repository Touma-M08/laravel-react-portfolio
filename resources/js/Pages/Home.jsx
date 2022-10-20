import React from "react";
import Works from "../Components/Works";

const Home = () => {
    return (
        <div>
            <section>
                <h1>プロフィール</h1>
                
                <h2>森野刀磨 -Morino Toma-</h2>
                
                <div>
                    <p>出身: 栃木県大田原市</p>
                    <p>生年月日: 1999/8/25(23歳)</p>
                    <p>所属: 群馬大学大学院　理工学府　知能機械創製理工学教育プログラム</p>
                    <p>使用言語・スキル: HTML/CSS, PHP, JavaScript, AWS</p>
                    <a href="https://github.com/Touma-M08">GitHubリンク</a>
                </div>
            </section>
            
            <Works />
        </div>
    );
}

export default Home;