import React,{Component} from 'react';
import ReactDom from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCalendar, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import qs from 'qs';


class Options extends Component{

    constructor(){
        super();
        this.state = {
            filterBy: "days",
            caption: "Caption"
        }
    }

    updateMetatData=()=>{
        let _this = this;

        axios.get('http://localhost:5000/meta',{
            params: {
            }
        })
        .then(function (response) {
            //console.log("inside success axios: ");        
            //console.log(JSON.stringify(response.data.caption));

            _this.setState({
                caption: response.data.caption
            });
        })
        .catch(function (error) {
            console.log("inside error axios: ");        
            //console.log(error);
        });
    }


    componentWillMount(){
        //get the list from db and update the archive
        this.updateMetatData();

    }

    updateFilterDays=()=>{
        //console.log("Days");
        this.setState({
            filterBy: "days"
        },function(){
            this.props.handlerFilter("days");
        });
    }

    updateFilterWeeks=()=>{
        //console.log("Weeks");
        this.setState({
            filterBy: "weeks"
        },function(){
            this.props.handlerFilter("weeks");
        });
        
    }

    render(){

        return(
            <div className="Options" ref="Options">

                <div className="caption">
                    <div className="titile">
                        {this.state.caption}
                    </div>
                </div>

                <div className="filter">
                    <label> FilterBy: </label>
                    <div className="dayFilter" onClick={this.updateFilterDays.bind(this)}> Day <FontAwesomeIcon icon={faCalendarAlt} /></div>
                    <div className="weekFilter" onClick={this.updateFilterWeeks.bind(this)}> Week <FontAwesomeIcon icon={faCalendar} /></div>
                </div>
            </div>
        );
    }

}

export default Options;