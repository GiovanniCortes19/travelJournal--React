import pinIcon from './pin-icon.png'

export default function Card(props) {
    return (
        <>
        <div className="card">

            <img src={props.item.imageUrl} alt='travel-destination' className="card-img" />

            <div className="card-text">
                <div className="location-info">
                    <img src={pinIcon} className="pin-icon" />
                    <span className='location'>{props.item.location}</span>
                    <a href={props.item.googleMapsUrl} target="_blank">View on Google Maps</a>
                </div>

                <h1 className="title">{props.item.title}</h1>

                <div className="text-block">
                    <p className="date">{props.item.startDate} - {props.item.endDate}</p>
                    <p className="description">{props.item.description}</p>
                </div>

            </div>

        </div>
        <hr className='hr-line' />

        </>
    )
}