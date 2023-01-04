export const initialState = {
    preguntas: [{preguntaText: "Pregunta",preguntaTipo: "Radio",opciones: [{optionText: "Opcion 1"}],open:true, required: false}],
    doc_name: "Untitled",

}

export const actionTypes = {
    SET_PREGUNTAS: "SET_PREGUNTAS",
    SET_DOC_NAME: "SET_DOC_NAME",
}

const reducer = (state=initialState,action) => {
    switch(action.type){
        case actionTypes.SET_PREGUNTAS :
            return {
                ...state, preguntas: action.preguntas,
            };
        case actionTypes.SET_DOC_NAME:
            return{
                ...state, doc_name: action.doc_name,
            }
        default:
            return state;
    }
}

export default reducer;