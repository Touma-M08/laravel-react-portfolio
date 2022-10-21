import { useForm } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

const Edit = (props) => {
    const { user } = props;
    const { data, setData, post, processing } = useForm({
        image: user.image,
    });
    
    const handleSubmit = (e) => {
        e.preventDefault();
        post("/");
    }
    
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={(e) => setData("image", e.target.files[0])}/>
            
                <input type="submit" disabled={ processing } />
            </form>
        </div>  
    );
}

export default Edit;