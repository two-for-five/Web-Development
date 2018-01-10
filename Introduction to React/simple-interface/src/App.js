import React, {Component } from 'react';
import $ from 'jquery';
import AptList from './Components/AptList';
import _ from 'lodash';
import AddAppointment from './Components/AddAppointment';
import SearchAppointments from './Components/SearchAppointments';

class App extends Component{
  constructor(props){
    super(props);
    this.deleteMessage = this.deleteMessage.bind(this);
    this.toggleAddDisplay = this.toggleAddDisplay.bind(this);
    this.addItem = this.addItem.bind(this);
    this.reOrder = this.reOrder.bind(this);
    this.searchApts = this.searchApts.bind(this);
    this.state = {
      orderBy: 'petName',
      orderDir: 'asc',
      aptBodyVisible: false,
      myAppointments:[],
      queryText: ''
    }

  }
  componentDidMount(){
    this.serverRequest = $.get('https://gist.githubusercontent.com/planetoftheweb/61b3e1df3edbe17bbe94545722d96565/raw/d79f89fb896d44dc4aad3e3f0d71fc75da5039f8/reactdata.json',function(result){
      var tempApts = JSON.parse(result);
      this.setState({
        myAppointments: tempApts
      });
    }.bind(this));
   }

  componentWillUnmount(){
    this.serverRequest.abort();
  }

  deleteMessage(item){
    var allApts = this.state.myAppointments;
    var newApts = _.without(allApts, item);
    this.setState({
      myAppointments: newApts
    })
  }

  toggleAddDisplay(){
    var tempVisibility = !this.state.aptBodyVisible;
    this.setState({
      aptBodyVisible: tempVisibility
    })
  }
  addItem(tempItem){
    var tempApts = this.state.myAppointments;
    tempApts.push(tempItem);
    this.setState({
      myAppointments: tempApts
    })
  }
  reOrder(orderBy, orderDir){
    this.setState({
      orderBy: orderBy,
      orderDir: orderDir
    })
  }
  searchApts(q){
    this.setState({
      queryText: q
    })
  }
  render(){
    var orderBy = this.state.orderBy;
    var orderDir = this.state.orderDir;
    var filteredApts = [];
    var queryText = this.state.queryText;
    var myAppointments = this.state.myAppointments;

    myAppointments.forEach(function(item){
      if(
        (item.petName.toLowerCase().indexOf(queryText) !== -1) ||
        (item.ownerName.toLowerCase().indexOf(queryText) !== -1) ||
        (item.aptDate.toLowerCase().indexOf(queryText) !== -1) ||
        (item.aptNotes.toLowerCase().indexOf(queryText) !== -1)
      )
        {
          filteredApts.push(item);
        }
    })

    filteredApts = _.orderBy(filteredApts, function(item){
      return item[orderBy].toLowerCase();
    }, orderDir)
    filteredApts = filteredApts.map(function(item, index){
      return (
        <AptList key={index} singleItem = {item} whichItem={item} onDelete = {this.deleteMessage} />
      )
    }.bind(this))

    return(
      <div className="interface">
        <div className="item-list media-list">
          <AddAppointment bodyVisible = {this.state.aptBodyVisible} handleToggle = {this.toggleAddDisplay} addApt = {this.addItem}/>
          <SearchAppointments orderBy = {this.state.orderBy} orderDir = {this.state.orderDir} onReOrder = {this.reOrder} onSearch = {this.searchApts} />
          <ul className="item-list media-list">{filteredApts}</ul>
        </div>
      </div>
    )
  }
}


export default App;
