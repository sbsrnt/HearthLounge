import * as actions from '../actions/create-deck/create-deck';
import * as types from '../types/create-deck';
import lowerCase from 'lodash/lowerCase';

describe('#createDeckActions', () =>{

  const testActions = (action, type, key, state) =>{
    test(`should create an action to ${lowerCase(type)}`, () =>{
      const expectedAction = {
        type: type,
        [key]: state
      };

      expect(action(state)).toEqual(expectedAction);
    })
  };

  testActions(actions.toggleFilters, types.TOGGLE_FILTERS, 'filters', true);
  testActions(actions.showDeckEditingTool, types.SHOW_DECK_EDITING_TOOL, 'editingTool', true);
  testActions(actions.toggleDeckMechanics, types.TOGGLE_DECK_MECHANICS, 'deckMechanics', true);
  testActions(actions.toggleImgReadyDecklist, types.TOGGLE_IMG_READY_DECKLIST, 'imgReadyDecklist', true);
  testActions(actions.updateURL, types.UPDATE_URL, 'deckUrl', 'foo');
  testActions(actions.editDeck, types.EDIT_DECK, 'deck', 'foo');
  testActions(actions.updateDeckstring, types.UPDATE_DECKSTRING, 'deckstring', 'foo');
  testActions(actions.simplifyDeck, types.SIMPLIFY_DECK, 'simplifiedDeck', 'foo');
  testActions(actions.updatePlayerClass, types.UPDATE_PLAYERCLASS, 'playerClass', 'priest');
  testActions(actions.updateCurrentCardsLoaded, types.UPDATE_CURRENT_CARDS_LOADED, 'currentCardsLoaded', 70);
});