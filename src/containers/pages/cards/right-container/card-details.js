import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class CardDetails extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentTab: 'details'
    }
  }

  createMarkup(card) {
    return {__html: card.flavor};
  }

  flavor(card) {
    return <div dangerouslySetInnerHTML={this.createMarkup(card)} />;
  }

  ifProp(card, prop){
    const capitalize = {textTransform: 'capitalize'};
    if(card[prop]) {
      switch (prop) {
        case 'howToGet':     return <tr><td>How to get</td><td>{card[prop]}</td></tr>;
        case 'howToGetGold': return <tr><td>How to get gold</td><td>{card[prop]}</td></tr>;
        default:             return <tr><td style={capitalize}>{prop}</td><td>{card[prop]}</td></tr>;
      }
    }
  }

  handleButtonClick(e){
    let value = e.target.value;
    this.setState({
      currentTab: value
    })
  }

  render(){
    const {card} = this.props;
    let details = this.state.currentTab === 'details' ? 'active' : 'display-none';
    let golden  = this.state.currentTab === 'golden' ? 'active' : 'display-none';
    let btnDetails = this.state.currentTab === 'details' ? 'active' : '';
    let btnGolden = this.state.currentTab === 'golden' ? 'active' : '';
    return(
      <div className="card-tooltip-wrapper">
        <table className="card-details">
          <tbody className={details}>
            <tr><td>Name</td><td>{card.name}</td></tr>
            <tr><td>Artist</td><td>{card.artist}</td></tr>
            <tr><td>Set</td><td>{card.cardSet}</td></tr>
            <tr><td>Rarity</td><td>{card.rarity}</td></tr>
            <tr><td>Cost</td><td>{card.cost}</td></tr>
            {this.ifProp(card, 'health')}
            {this.ifProp(card, 'durability')}
            {this.ifProp(card, 'faction')}
            <tr><td>Type</td><td>{card.type}</td></tr>
            {this.ifProp(card, 'flavor')}
            {this.ifProp(card, 'howToGet')}
            {this.ifProp(card, 'howToGetGold')}
          </tbody>
          <tbody className={golden}>
            <tr><td style={{textAlign: 'center'}}><img src={card.imgGold} alt={`Golden ${card.name}`} /></td></tr>
          </tbody>
        </table>
        <div className="button-wrapper">
          <button onClick={(e)=>this.handleButtonClick(e)}
                  value="details"
                  className={`btn-pearl ${btnDetails}`}>Details</button>
          <button onClick={(e)=>this.handleButtonClick(e)}
                  value="golden"
                  className={`btn-pearl ${btnGolden}`}>Golden</button>
        </div>
      </div>
    )
  }
}

CardDetails.propTypes = {
  card: PropTypes.object
};
