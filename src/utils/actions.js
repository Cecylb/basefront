export const SHOW_ALERT = 'SHOW_ALERT'
export const HIDE_ALERT = 'HIDE_ALERT'
export const REQUEST_SEARCH_RESULT = 'REQUEST_SEARCH_RESULT'
export const FETCH_SEARCH_RESULT = 'FETCH_SEARCH_RESULT'
export const REQUEST_TABLE_FIELDS = 'REQUEST_TABLE_FIELDS'
export const FETCH_TABLE_FIELDS = 'FETCH_TABLE_FIELDS'
export const ADD_NEW_ENTITY = 'ADD_NEW_ENTITY'
export const DELETE_ENTITY = 'DELETE_ENTITY'

export function showAlert() {
    return {
        type: SHOW_ALERT
    }
}

export function hideAlert() {
    return {
        type: HIDE_ALERT
    }
}

export function fetchSearchResult(table, field, query) {
    return {
        type: REQUEST_SEARCH_RESULT,
        data: {
            table: table,
            field: field,
            query: query
        }
    }
}

export function fetchTableFields(table) {
    return {
        type: REQUEST_TABLE_FIELDS,
        table: table
    }
}

export function addNewEntity(table, entity) {
    return {
        type: ADD_NEW_ENTITY,
        data: {
            table: table,
            entity: entity
        }
    }
}

export function deleteEntity(table, id) {
    return {
        type: DELETE_ENTITY,
        data: {
            table: table,
            id: id
        }
    }
}