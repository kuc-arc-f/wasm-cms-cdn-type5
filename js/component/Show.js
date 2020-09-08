//
class Show extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: ''}
        this.id = ""
    }    
    componentDidMount(){
        this.id = this.props.match.params.id;
        console.log("id", this.id)
        this.get_item( this.id )
    }
    get_item(id){
        var dt = LibCommon.formatDate( new Date(), "YYYY-MM-DD_hhmmss");
        axios.get('./cms.json?' + dt).then(res =>  {
            var data = res.data
            var items = LibCommon.convert_items(data.items )
            var item  = LibCmsEdit_3.get_show_item( items, String(id) )
            item.content = marked(item.content)
            this.setState({ data: item })
// console.log( item )
        })
    }    
    tabRow(){
    }
    render(){
        return(
        <div className="container">
            <Link to="/" className="btn btn-outline-primary mt-2">Back</Link>
            <hr className="mt-2 mb-2" />
            <div className="show_head_wrap">
                <i className="fas fa-home"></i> > {this.state.data.title}
            </div>

            <hr />
            <h1>{this.state.data.title}</h1>
            date : {this.state.data.created_at} <br />
            <hr />
            <div id="post_item"
            dangerouslySetInnerHTML={{ __html: this.state.data.content }} />
        </div>
        )
    }
}

