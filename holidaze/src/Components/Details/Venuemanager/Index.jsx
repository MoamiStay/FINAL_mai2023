const VenueManagerDetails = (props) => {
    const data = props.data
    console.log(data);
    return (
        <>
        <h1>{data.name}</h1>
        <img src={data.media} alt={data.name} />
        
        </>
    )
}

export default VenueManagerDetails;