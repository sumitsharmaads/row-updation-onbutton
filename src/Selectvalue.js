import React, { Component } from 'react';

class Select extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
  		language:[{name:"Language"}, {name:"C"}, {name:"C++"}, {name:"Java"}, {name:"HTML"}, {name:"React"},
  		 {name:"JavaScript"}],
  		 Experience:[{level:"Fresher"}, {level:"Good"}, {level:"Excellent"}, {level:"Proficient"}],
  		 result:'', myvalue:'', Data:[], no:0

  	}
  }

  myFunction = (event) => {
  	console.log('i am in options');
  	 this.setState({
      result: event.target.value
    });
  	 console.log(this.state.result)
  }

  myFunctionvalue = (event) => {
  	console.log('i am in options');
  	 this.setState({
      myvalue: event.target.value
    });
  	 console.log(this.state.result)
  }

  Add = ()=> {
  	const result1 = this.state.result;
  	const myvalue1 = this.state.myvalue;
  	const temp = this.state.Data;
  	temp.push({result1, myvalue1});
  	this.setState({Data:temp});
  }
  Delete = (passing) => {
  	const tempdata = this.state.Data;
  	delete tempdata[passing];
  	this.setState({Data:tempdata});
  }

  
  render() {
    return (
      <div className="Select">
      	<form>
      	<select onChange={this.myFunction}>
         {	
         	this.state.language.map((name,index) => (
         		<option>{name.name}</option> 
         		))
         }  
         </select>
         <select onChange={this.myFunctionvalue}>
         	{	
         	this.state.Experience.map((name,index) => (
         		<option>{name.level}</option> 
         		))
         }
         </select>
         </form>
         <button onClick={this.Add}>Add</button>
          {	
         	this.state.Data.map((name,index) => (
         		 <div>
         				<form>
                    <select onChange={this.myFunction} selected={name.result1}>
                     {  
                      this.state.language.map((name,index) => (
                        <option>{name.name}</option> 
                        ))
                     }  
                     </select>
                     <select onChange={this.myFunctionvalue} selected= {name.myvalue1}>
                      { 
                      this.state.Experience.map((name,index) => (
                        <option>{name.level}</option> 
                        ))
                     }
                     </select>
                 </form>
         			</div>
         		))
         }
      </div>
    );
  }
}

export default Select;
