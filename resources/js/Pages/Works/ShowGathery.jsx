import React from "react";
import { Link }from "@inertiajs/inertia-react";
import Image1 from "../../../image/1.png";
import Image2 from "../../../image/2.png";
import Image3 from "../../../image/3.png";

const ShowGathery = () => {
    
    return (
        <div>
            <Link href={route("home")}>戻る</Link>
            <h1>Gathery</h1>
            <h2>おなじ場所へ出かけたい人同士をつなげる</h2>
            <h3>
                <p>行ってみたいところがあるけど、一緒に行ってくれる人いないかなぁ...</p>
                <p>このお店、１人じゃ入りづらい！</p>
                <p>といった人同士を繋ぐための掲示板アプリ</p>
            </h3>
            <h4>製作背景: ひとりカラオケ」や「ひとり焼き肉」といった、様々な「ひとり○○」がある中で、一人で行くにはハードルが高いが身近に一緒に行きたい人がいないといった場合に、同じことを思う人同士を繋ぐアプリを作りたいと考え、このアプリ「Gathery」を制作しました。</h4>
            <div>
                <h4>skill set</h4>
                <h5>PHP (Laravel)</h5>
                <h5>その他: AWS (cloud9, S3)</h5>
            </div>
            <h4>製作期間: １ヶ月半程度</h4>
            <div>
                <a href="https://mysterious-reaches-54046.herokuapp.com/" target="_blank" rel="noopener noreferrer">Gathery</a>
                <a href="https://github.com/Touma-M08/gathery" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
            
            <div>
                <div style={{display:"flex"}}>
                    <div>
                        <p>場所の登録</p>
                        <div style={{width:"350px"}}>
                            <img src={Image1} style={{width:"100%"}}/>
                        </div>
                    </div>
                    
                    <div>
                        <p>場所詳細・行きたい！登録</p>
                        <div style={{width:"350px"}}>
                            <img src={Image2} style={{width:"100%"}}/>
                        </div>
                    </div>
                    
                    <div>
                        <p>掲示板</p>
                        <div style={{width:"350px"}}>
                            <img src={Image3} style={{width:"100%"}}/>
                        </div>
                    </div>
                </div>
                
                <ul>その他の機能
                    <li>場所の検索機能(名称,県,カテゴリ)</li>
                    <li>マイページ(行きたい！一覧,レビュー一覧,予定登録,ユーザー情報編集)</li>
                    <li>レビューランキング</li>
                    <li>カテゴリー追加(管理者のみ)</li>
                    <li>場所情報編集(管理者のみ)</li>
                </ul>
            </div>
            
            <h4>今後の展望</h4>
            <p>個人チャットやグループチャットの実装（ユーザー数が増加した場合、掲示板では不便）</p>
            <p>ランキングの種類追加（現在、レビューでのランキングのみ）</p>
        </div>
    );
}

export default ShowGathery;