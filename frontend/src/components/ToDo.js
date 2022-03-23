import React from "react";

const ToDoListItem = ({item}) => {
    return (
        <tr>
            <td>{item.id}</td>
            <td>{item.notice}</td>
            <td>{item.author}</td>
            <td>{item.project}</td>
            <td>{item.dateOfCreation}</td>
        </tr>
    )
}

const ToDOList = ({items}) => {
    console.log('test ' + items);
    return (
        <table className="table">
            <tr>
                <th>Id</th>
                <th>Notice</th>
                <th>Author</th>
                <th>Project</th>
                <th>Create</th>
            </tr>
            {items.map((item) => <ToDoListItem item={item}/>)}
        </table>
    )
}

export default ToDOList