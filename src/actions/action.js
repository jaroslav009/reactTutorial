export default function update(text) {
    console.log('hi '+text)
    return {
        type: 'UPDATE_TEXT',
        payload: text
    }
}