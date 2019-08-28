import React from 'react';

class Tabs extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      index: 0
    }
  }

  updateIndex(idx, e){
    // debugger;
    //e.target.setAttribute("style", "border-bottom: none;");
    this.setState({index: idx});
    console.log(this.state.index);
  }



  renderArticle(){
    return (
      <h1>{this.props.tabs[this.state.index].content}</h1>
    )
  }

  render(){
    //let { title, content } = this.props;
    return(
      <div id="divTab">
        <ul id="tabs">
          {this.props.tabs.map((tab, index) => {
            if (this.state.index === index){
              return (<h1 id="noBorder" onClick={this.updateIndex.bind(this, index)}>{tab.title} </h1>)

            } else {
              return (<h1 id="thisTab" onClick ={this.updateIndex.bind(this, index)}>{tab.title} </h1>)
            }
          })}
         </ul>
        <article id="content">{this.renderArticle()}</article>
      </div>
    )
  }
}

export default Tabs;