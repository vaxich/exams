//Что надо написать вместо XXX, что бы переменная result содержала значение 5?

// type: "SUB" - верно

type ActionType = {
    type: "SUM"|"SUB"|"MULT"|"DIV"
    payload: number
}

export const EightWeekThreeQuestion = (state: number, action: ActionType): number => {
    switch (action.type) {
        case "SUM":
            return state + action.payload
        case "SUB":
            return state - action.payload
        case "DIV":
            return state / action.payload
        case "MULT":
            return state * action.payload
        default:
            return state
    }
}

const result = EightWeekThreeQuestion(10, {type: "SUB", payload: 5})
console.log(result)
