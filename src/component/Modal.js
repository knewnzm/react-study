import { useState } from "react";

function Modal({ handleAddItem, isModalOpen, handleModalOpen}) {
    const [fam, setFam] = useState("");
    const [img, setImg] = useState("");
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddItem([ fam, img, name ]);
        handleModalOpen(false);
    };


    return (
        <div className="modal-background" hidden={!isModalOpen}>
        <form className="modal" onSubmit={handleSubmit}>
            <span className="modal-close" onClick={() => handleModalOpen(false)}>
                X
            </span>
            <label 
                htmlFor="fam" 
                className="label">
                family
            </label>
            <input 
                id="fam" 
                type="text" 
                placeholder="다른 고양이 가족" 
                className="input" 
                required 
                value={fam}
                onChange={(e) => setFam(e.target.value)}
                />
            <label 
                htmlFor="image" 
                className="label">
                image
            </label>
            <input 
                id="image" 
                type="text" 
                placeholder="URL" 
                className="input" 
                required 
                value={img}
                onChange={(e) => setImg(e.target.value)}
            />
            <label 
                htmlFor="name" 
                className="label">
                이름
            </label>
            <input 
                id="name" 
                type="text" 
                placeholder="고양이 이름" 
                className="input" 
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button 
                type="submit" 
                id="submit" 
                className="submit-button">
                저장
            </button> 
        </form>
    </div>
    );
}

export default Modal;