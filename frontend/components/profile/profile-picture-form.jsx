import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addImageToUser } from '../../actions/user_actions';

export default ({user, hideForm, setUser}) => {
    const dispatch = useDispatch();
    const [imageUrl, setImageUrl] = useState();
    const [imageFile, setImageFile] = useState();
    
    const handleChange = (e) => {
        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        reader.onloadend = () =>
            setImageUrl(reader.result);
            setImageFile(file);

        if (file) {
            reader.readAsDataURL(file);
        } else {
            setImageUrl("");
            setImageFile(null);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData =  new FormData();
        formData.append('user[photo]', imageFile);
        dispatch(addImageToUser(user.id, formData))
        .then(data => setUser(data.user))
        .then(hideForm());
    };

    return (
        <div className="profile-form-background">
            <form className="photo-form" onSubmit={handleSubmit}>
                <div onClick={() => hideForm()}><i className="far fa-window-close"></i></div>
                <label className="file-upload">
                    <input type="file" onChange={handleChange} />
                    Upload a new photo
                </label>
                <div className="photo-form-filename">{imageFile ? imageFile.name : ""}</div>
                <button className="file-upload">Submit</button>
            </form>
        </div>
    )
}