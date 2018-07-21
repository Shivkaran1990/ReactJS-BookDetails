import React,{Component} from 'react';
import {connect} from 'react-redux';


class BookDetails extends Component
{
    render(){
        if(!this.props.book)
        {
            return <div>select the book to get started</div>
        }
       return (      
        <div>
            <h3>Book Details</h3>
            <div>Title :{this.props.book.title}</div>
             <div>Page :{this.props.book.pages}</div>
            
        </div>
    );
}
}

function mapStateToProps(state) {
    return {
        book: state.activeBook
    };
}


export default connect(mapStateToProps)(BookDetails);