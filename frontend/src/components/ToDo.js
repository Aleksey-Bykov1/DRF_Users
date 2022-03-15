import React from "react";

const ToDoListItem = ({item}) => {
    return (
        <tr>
            <td>{item.id}</td>
            <td>{item.notice}</td>
            <td>{item.author}</td>
            <td>{item.project}</td>
            <td>{item.date_of_creation}</td>
        </tr>
    )
}

const ToDOList = ({items}) => {
    return (
        <table className="table">
            <tr>
                <th>Id</th>
                <th>Notice</th>
                <th>Author</th>
                <th>Project</th>
                <th>Create</th>
            </tr>

        </table>
    )
}

export default ToDOList