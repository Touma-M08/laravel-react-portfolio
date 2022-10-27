import Work1 from "../../image/gathery.jpg";

import { Link } from "@inertiajs/inertia-react";

const Works = () => {
    const works = [
        {
            image: Work1,
            title: "Gathery"
        },
        {
            image: Work1,
            title: "portfolio"
        },
    ];
    
    return (
        <div className="works">
            <div class="wrap">
                <h1 className="content-ttl __works" id="works">製作実績</h1>
                
                <ul>
                    {works.map((work, index) => (
                        <li className="work" key={index}>
                            <Link className="work-link" href={`/works/${index}`}>
                                <div className="work-img-box">
                                    <img className="work-img" src={work.image} />
                                </div>
                                <h3 className="work-ttl">{work.title}</h3>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>  
        </div>
    );
}

export default Works;