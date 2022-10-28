import React from "react";
import { Link }from "@inertiajs/inertia-react";
import Image1 from "../../../image/1.png";
import Image2 from "../../../image/2.jpg";
import Image3 from "../../../image/3.png";
import "../../Components/ShowWorks.css";

const ShowGathery = () => {
    
    return (
        <div>
            <div className="bg">
                <div className="work-wrap">
                    <Link href={route("home")} className="arrow-left"></Link>
                    <h1 className="work-ttl">Gathery</h1>
                    <h2 className="work-about">おなじ場所へ出かけたい人同士をつなげる</h2>
                    <h3>
                        <p>行ってみたいところがあるけど、一緒に行ってくれる人いないかなぁ...</p>
                        <p>このお店、１人じゃ入りづらい！</p>
                        <p>といった人同士を繋ぐための掲示板アプリ</p>
                    </h3>
                    <h4 className="background">製作背景: ひとりカラオケ」や「ひとり焼き肉」といった、様々な「ひとり○○」がある中で、一人で行くにはハードルが高いが身近に一緒に行きたい人がいないといった場合に、同じことを思う人同士を繋ぐアプリを作りたいと考え、このアプリ「Gathery」を制作しました。</h4>
                
                    <div>
                        <a href="https://mysterious-reaches-54046.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="btn">アプリリンク</a>
                        <a href="https://github.com/Touma-M08/gathery" target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
                    </div>
                </div>
            </div>
            
            <div className="bg">
                <div className="work-wrap">
                    <div className="features">
                        <div className="feature">
                            <p>場所の登録</p>
                            <div className="feature-img-box">
                                <img src={Image1} className="feature-img"/>
                            </div>
                        </div>
                        
                        <div className="feature">
                            <p>場所詳細・行きたい！登録</p>
                            <div className="feature-img-box">
                                <img src={Image2} className="feature-img"/>
                            </div>
                        </div>
                        
                        <div className="feature">
                            <p>掲示板</p>
                            <div className="feature-img-box">
                                <img src={Image3} className="feature-img"/>
                            </div>
                        </div>
                    </div>
                    
                    <ul className="else-feature">
                        <h4>その他の機能</h4>
                        <li>場所の検索機能(名称,県,カテゴリ)</li>
                        <li>マイページ(行きたい！一覧,レビュー一覧,予定登録,ユーザー情報編集)</li>
                        <li>レビューランキング</li>
                        <li>カテゴリー追加(管理者のみ)</li>
                        <li>場所情報編集(管理者のみ)</li>
                    </ul>
                </div>
            </div>
                
            <div className="bg">
                <div className="work-wrap">
                    <div className="work-skill">
                        <div>
                            <h4>skill set</h4>
                            <p>PHP (Laravel)</p>
                        </div>
                        
                        <div>
                            <h4>製作期間</h4>
                            <p>１ヶ月半程度</p>
                        </div>
                    </div>
                    
                    <h4>今後の展望</h4>
                    <p>個人チャットやグループチャットの実装（ユーザー数が増加した場合、掲示板では不便）</p>
                    <p>ランキングの種類追加（現在、レビューでのランキングのみ）</p>
                </div>
            </div>
        </div>
    );
}

export default ShowGathery;