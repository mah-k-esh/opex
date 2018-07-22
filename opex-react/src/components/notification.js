import React,{Component} from 'react';
import ReactDom from 'react-dom';

class Notification extends Component{

    constructor(){
        super();
        this.state = {
            message: "",
            type: ""
        }
    }

	componentWillMount(){

		// console.log("makesh: "+this.props.videoItem);
		this.setState({
            message: this.props.noti.message,
            type: this.props.noti.type
		});
	}

    render(){

        return(
            <div className="notification" ref="notification">
                <div className={this.state.type}>
                    {this.state.message}
                </div>
            </div>
        );
    }

}

export default Notification;