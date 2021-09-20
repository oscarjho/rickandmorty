const CardModal = ({character, onClick}) => {

    const date = (number) => {
        return new Date(number).toLocaleDateString('en-US', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
          })
    }

    return (
        <div className="row">
            <div className="modal_left col-lg-4">
                <div>
                    <button type="button" onClick={onClick} className="cardmodal_button"> Close </button>
                </div>
                <div>
                    <button type="button" onClick={onClick} className="cardmodal_button cardmodal_button_responsive"> x </button>
                </div>
                <div className="cardmodal_img_container">
                    <img src={character.image} alt="card_image" className="cardmodal_img" />
                </div>
            </div>
            <div className="modal_right col-lg-8">

                <div >
                    <div className="cmty">
                        About
                    </div>

                        <div className="cmtg">
                            {character.name} is a {character.gender} {character.species}. Last seen in {date(character.location.created)}
                        </div>
                </div>
                <div>
                    <div className="cmty">
                        Origin
                    </div>
                    <div className="cardmodal_origin">
                        {character.origin.type}
                    </div>
                    <div className="cardmodal_origin_name">
                        {character.origin.name}
                    </div>
                    <div className="cardmodal_origin_dimension">
                        {character.origin.dimension}
                    </div>
                </div>
                <div>
                    <div className="cmty">
                        Location
                    </div>
                    <div className="cardmodal_origin">
                        {character.location.type}
                    </div>
                    <div className="cardmodal_origin_name">
                        {character.location.name}
                    </div>
                    <div className="cardmodal_origin_dimension">
                        {character.location.dimension}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CardModal