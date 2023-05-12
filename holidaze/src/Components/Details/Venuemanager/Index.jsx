const VenueManagerDetails = (props) => {
    const data = props.data
    console.log(data);
    return (
        <>
        <h1>{data.name}</h1>
        <img src={data.media} alt={data.name} />
        <p>View calendar</p>
        
        </>
    )
}

export default VenueManagerDetails;