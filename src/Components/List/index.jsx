import { useContext, useState } from 'react';
import { Pagination } from '@mantine/core';
import { SettingsContext } from '../../Context/Settings';

function List(props){
    const { pageItems, completed, sort } = useContext(SettingsContext);
    const [currentPage, setPage] = useState(1)
    const pages = Math.ceil(props.list.length / pageItems)

    const displayedItems = completed
    ? props.list.filter((item) => !item.complete)
    : props.list;

    const firstItem = (currentPage - 1) * pageItems;
    const lastItem = currentPage * pageItems;
    const finalItems = displayedItems.slice(firstItem, lastItem);


    return(
      <>
        {finalItems.map(item => (
        <div key={item.id} >
          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <div onClick={() => props.toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
          <hr />
        </div>
      ))}
      <Pagination value={currentPage} onChange={setPage} total={pages} />
      </>
    )
}

export default List;








// import React from 'react';

// function List(props) {
//   const toggleComplete = (itemId) => {
//     // Code logic to toggle the completion status of the item with the specified itemId
//     // Example implementation:
//     // 1. Find the item in the list using the itemId
//     // 2. Toggle the `complete` property of the item
//     // 3. Update the state or re-render the component to reflect the changes
//   };

//   return (
//     <div>
//       {props.list.map(item => (
//         <div key={item.id}>
//           <p>{item.text}</p>
//           <p><small>Assigned to: {item.assignee}</small></p>
//           <p><small>Difficulty: {item.difficulty}</small></p>
//           <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
//           <hr />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default List;