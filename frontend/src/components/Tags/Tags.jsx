import "./Tags.css"
function Tags(props){
    const tags = props.tags.map(function (item){
        return <p>{item}</p>
    })
    return(
    <div className="tags">
    {tags}
</div>
)  
    
}

export default Tags;