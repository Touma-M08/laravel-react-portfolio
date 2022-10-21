import { useForm } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

const Edit = (props) => {
    const { user } = props;
    const { data, setData, post, processing } = useForm({
        image: user.image,
        preview: "",
    });
    
    const handleSubmit = (e) => {
        e.preventDefault();
        post("/");
    }
    
    const handlePreview = (e) => {
        const reader = new FileReader();
        const image = e.target.files[0];
        reader.onload = (e) => {
            setData({
                image: image,
                preview: e.target.result,
            });
        }
        reader.readAsDataURL(image);
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handlePreview}/>
            
                <input type="submit" disabled={ processing } />
            </form>
            
            { data.preview && <img src={data.preview} alt="画像プレビュー" style={{width: "200px"}} /> }
        </div>  
    );
}

export default Edit;