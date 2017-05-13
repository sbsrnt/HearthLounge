import React from 'react';
import  _ from 'lodash';
import Loader from '../../../../../utils/loader';
import DeckSnippet from '../../right-container/cards-list/deck-snippet';

const DeckList = ({decks, handleTableRowClick, cards}) => {
  const mapDecks = () =>{

    if(decks && decks.length < 1){
      return <tr><td><Loader/></td></tr>
    }
    else {
      return _.map(decks).map(deck => {
        return <DeckSnippet handleTableRowClick={handleTableRowClick}
                            hsClass={deck.hsClass}
                            title={deck.title}
                            votes={deck.upvotes - deck.downvotes}
                            deck={deck.deck}
                            created={deck.created}
                            archetype={deck.archetype}
                            author={deck.author}
                            type={deck.type}
                            views={deck.views}
                            cards={cards}/>
      })
    }
  };

  return (
  <div className="table-scroll">
    <table className="shared-table">
      <thead>
      <tr>
        <td className="title"><p>Name</p></td>
        <td className="hsClass"><p>Class</p></td>
        <td className="votes"><p>Rating</p></td>
        <td className="views"><p>Views</p></td>
        <td className="mana-curve"><p>Mana</p></td>
        <td className="type"><p>Type</p></td>
        <td className="created"><p>Created</p></td>
      </tr>
      </thead>
      <tbody>
      {mapDecks()}
      </tbody>
    </table>
  </div>
  )
};

export default DeckList;