

const Card = ({character, onClick}) => {

    const {status, image, name} = character

    const image_class = `card_image ${status}`

    return (
        <div className="card_container"  onClick={onClick}>  
        <div className="card">
        <div className="card_image_container">
            <img src={image} alt="card_image" className={image_class} />
            </div>
            <div className="info_container">
                <div className="card_name">
                    {name}
                </div>
                <div className="card_status">
                    {status}
                </div>
            </div>
        </div>    
        </div>
    );
};

export default Card;