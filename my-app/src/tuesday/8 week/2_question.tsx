//Обработка какого action.type не предусмотрена в функции calculator?
//"MULT" - верно

type ActionType = {
    type: "SUM"|"SUB"|"MULT"|"DIV"
    payload: number
}

export const EightWeekTwoQuestion = (state: number, action: ActionType): number => {
    switch (action.type) {
        case "SUM":
            return state + action.payload
        case "SUB":
            return state - action.payload
        case "DIV":
            return state / action.payload
        default:
            return state
    }
}

