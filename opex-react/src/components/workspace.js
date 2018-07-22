import React,{Component} from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import qs from 'qs';

class Workspace extends Component{

    constructor(){
        super();
        this.state = {
            chartData: [{
                x: 'something',
                y: '10'
            }],
            filterBy: "days"
        }
    }

    updateChartData=()=>{
        let _this = this;
        let filterBy = this.state.filterBy;

        axios.get('http://localhost:5000/charts',{
            params: {
                'filterBy': filterBy
            }
        })
        .then(function (response) {
            //console.log("inside success axios: ");        
            // console.log(JSON.stringify(response.data.data));

            _this.setState({
                chartData: response.data.data.map( (item,index)=>{
                    
                    return {
                        x: (filterBy!="weeks")?item.date.split(" ")[0]:item.date_part+"",
                        y: (item.sum/1000000)
                    }
                })
            });
        })
        .catch(function (error) {
            console.log("inside error axios: ");        
            // console.log(error);
        });
    }

    componentWillReceiveProps(newProps){
        
        this.setState({
            filterBy: newProps.appData
        },function(){
            this.updateChartData();
        });

	}

    componentWillMount(){
        // console.log("componentWillMount");
        this.updateChartData();

    }

    render(){

        var BarChart = require('react-d3-components').BarChart;
 
        var data = [{
            label: '',
            values: this.state.chartData
        }];

        return(

            <div className="workspace" ref="workspace">
                
                <BarChart
                    data={data}
                    width={1000}
                    height={500}
                    margin={{top: 10, bottom: 50, left: 50, right: 10}}
                    xAxis={{label: this.props.appData}}
                    yAxis={{label: "On Hand Value (Million)"}}/>
            </div>
        );
    }

}

export default Workspace;