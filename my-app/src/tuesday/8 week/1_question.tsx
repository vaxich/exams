//Что надо написать вместо ХХХ, чтобы функция calculator работала?
// action.type - верно??
type ActionType = {
    type: "SUM"|"SUB"|"MULT"|"DIV"
    payload: number
}

export const EightWeekOneQuestion = (state: number, action: ActionType) => {
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

