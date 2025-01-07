
const Dog=(props)=>{
    let num=10;
    return(
        <>
        <h1 className="a">Hello {props.name}</h1>
        <h1>{num+props.val1}</h1>
        </>
    )
}
export default Dog;