import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock.jsx';
import Tabs from './tabs.jsx';

const Root = () => {

  const tabs = [{ title: "Favorite Ice Cream", content:"I can't answer that question"}, 
                { title: "Cutest Dog", content: "My Dog"}, 
                { title: "Sup' Dude", content: "Nahh duuuude"}];

    return (
    <div>
      <Clock/>
      <Tabs tabs={tabs}/>

    </div>
    )

}

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Root />, root);
});