import React, {Component} from 'react';
import {Topbar} from './topbar';
export class Adventure extends Component{
  render() {
    return (
        <div className="content">
          <Topbar adventure={this.props.location.pathname.split('/')[2]}
                  details={this.props.location.pathname.split('/')[3]}/>
          {this.props.children}
        </div>
    )
  }
}