import { AsyncStorage } from 'react-native'
import { formatDeckResults } from './helper'

const DECK_STORAGE_KEY = 'flashCards:deck'
// getDecks : title, questions, answers 데이터를 가진 Deck Objects 를 return
export function fetchDeckResults () {
    return AsyncStorage.getItem(DECK_STORAGE_KEY)
        .then(formatDeckResults)
}

// getDeck : key(Object.keys(result).map...) 를 파라미터로 받아서 해당 key 를 가진 Deck 을 return
// key 파라미터 넣을때 string 으로 넣어요
export function getDeck(key) {
    return fetchDeckResults()
        .then((Decks) => {
            return Decks[key]
        })
}

// saveDeckTitle : title(key) 을 파라미터로 받아서 Decks 에 추가하는 메소드 (mergeItem 쓸 듯)
// 언제 더블 컬리 먹이는지 모르겠다
// mergeItem 에 안맞는 문법을 쓰고 있나봄
// 왜 mergeItem 만 불이 안들어오냐
export function saveDeckTitle ({ key }) {
    return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
        [key]: null
    }))
}


// addCardToDeck : title 과 card 를 파라미터로 받아서 card 를 해당 Deck의 questions 에 추가하는
export function addCardToDeck ({ title, card }) {
    return AsyncStorage.getItem(DECK_STORAGE_KEY)
        .then((results) => {
            const data = JSON.parse(results)
            data[title] = card
            AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data))
        })
}

// removeDeck
export function removeDeck (key) {
    return AsyncStorage.getItem(DECK_STORAGE_KEY)
        .then((results) => {
            const data = JSON.parse(results)
            data[key] = undefined
            delete data[key]
            AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data))
        })
}
