import Work from "../../image/gathery.jpg";
import "./Works.css";

import { Link } from "@inertiajs/inertia-react";

const Works = () => {
    const works = [
        {
            image: Work,
            title: "Gathery"
        },
    ];
    
    return (
        <div>
            <h1>制作物</h1>
            
            <ul>
                {works.map((work, index) => (
                    <div>
                        <div className="work" key={index}>
                            <Link href={`/works/${index}`}>
                                <div className="work-img-box">
                                    <img className="work-img" src={work.image} />
                                </div>
                                <h3>{work.title}</h3>
                            </Link>
                        </div>
                    </div>
                ))}
            </ul>
        </div>  
    );
}

export default Works;