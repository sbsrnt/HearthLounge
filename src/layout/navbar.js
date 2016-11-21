import React, { Component } from 'react';
import { Link } from 'react-router'
import { navItems } from '../items/nav-elements';

export class Navbar extends Component {
  _dropdown(el, index){
    if(!el.hasOwnProperty('submenu')) return;
    return (
        <ul className="submenu">
          {navItems[index].submenu.map( (item, id) =>
            <li key={id}>
              <Link to={'/' + el.url + '/' + el.submenu[id].hs_class_url}>
                <div>{el.submenu[id].hs_class}</div>
                {console.log(item)}
              </Link>
            </li>
          )}
        </ul>
    )
  }
  render() {
    return (
        <nav>
          <ul>
            {navItems.map((element, index) =>
                <li key={index} className={element.className}>
                  <Link to={'/' + element.url} activeClassName="active">
                    <span className={element.icon}></span>
                    <div>{element.name}</div>
                    {this._dropdown(element, index)}
                  </Link>
                </li>
            )}
          </ul>
        </nav>
    );
  }
}