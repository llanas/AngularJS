export function DoyenFilter() {
    return function(array) {
        let older= array[0];
        array.forEach(function(element) {
            if(element.age && element.age > older.age) older = element;
        })
        return older.name;
    }
}