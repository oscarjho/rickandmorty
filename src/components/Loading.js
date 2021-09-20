import loadingimg from '../imgs/loading.png'

const Loading = ({loading}) => {
    if (!loading) { return null}

    return (
        <div>
            <div className="lightbox">
                <div className="loading_move">
                <div>
                <img src={loadingimg} alt="loading"></img>
                </div>
                <div className="loadingtext">
                <text>Loading...</text> 
                </div>
                </div>
            </div>
        </div>
    )
}

export default Loading