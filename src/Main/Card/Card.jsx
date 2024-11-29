export function Card({title ='' , description=''}){
    return(
        <div className="row mt-5">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                    </div>
                </div>
            </div>
    )
}