export default function(state="", active) {
    switch (active.type) {
        case 'UPDATE_TEXT':
            return active.payload
            break;
    
        default:
            return state
            break;
    }
}