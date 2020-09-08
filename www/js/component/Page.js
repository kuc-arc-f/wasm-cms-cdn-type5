//
class Page extends React.Component {
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
            var items = LibCommon.convert_items(data.page_items )
            var item  = LibCmsEdit_3.get_page_item( items, String(id) )
            item.content = marked(item.content)
            this.setState({ data: item })
// console.log( item )
        })
    }    
    tabRow(){
    }
    render(){
        return(
        <div className="container mt-2">
            <div className="page_head_wrap mt-2">
                <i className="fas fa-home"></i> > {this.state.data.title}
            </div>
            <hr />
            <h1>{this.state.data.title}</h1>
            date : {this.state.data.created_at} <br />
            ID : {this.state.data.id} <br />
            <hr />
            <div id="post_item"
            dangerouslySetInnerHTML={{ __html: this.state.data.content }} />
        </div>
        )
    }
}

