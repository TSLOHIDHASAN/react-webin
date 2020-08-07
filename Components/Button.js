import React,{Component} from 'react';
const Btn=(props)=>(
    <button  onClick={props.handler}>
        {props.caption}
    </button>
);
class Button extends Component{
  state={
    num:0
  }
  incermentOrDegrement=(intval)=>{
   this.setState({num:this.state.num+intval})
  }
  
render(){
  return(<div>
  <button className="btn btn-primary" onClick={()=>this.incermentOrDegrement(1)}>+</button>
  {this.state.num}
  <button className="btn btn-primary" onClick={()=>this.incermentOrDegrement(-1)}>-</button>

//btn
<Btn caption="Increment" handler={()=>this.incermentOrDegrement(1)}/>
<Btn caption="decrement" handler={()=>{this.incermentOrDegrement(-1)}}></Btn>

  </div>);
}
}
export default Button;