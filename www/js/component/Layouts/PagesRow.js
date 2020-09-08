//
class PagesRow extends React.Component {
   render() {
      return (
      <span>
         <Link to={`/pages/${this.props.obj.save_id}`} target="_blank"
         className="btn btn-outline-dark ml-2 mb-2">
            {this.props.obj.title}
         </Link>        
      </span>
      )
   }
}

