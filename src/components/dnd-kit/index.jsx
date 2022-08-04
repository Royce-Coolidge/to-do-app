import { items, lists } from "./data";
import { useState } from "react";
import { DndContext } from '@dnd-kit/core';
import Draggable from "./draggable";
import Droppable from "./droppable";


function DnDKitPage() {

 const [parent, setParent] = useState(null);

  function handleDragEnd(event) {
    const {over} = event;
    // If the item is dropped over a container, set it as the parent
    // otherwise reset the parent to `null`
    setParent(over ? over.id : null);
  }

  const draggableMarkup = (
    <Draggable>Drag me</Draggable>
  );

  return (
    <div className="max-w-full mx-auto sm:px-2 p-5 lg:px-5 flex flex-row items-start h-screen gap-10 bg-gray-100" >
      <DndContext onDragEnd={handleDragEnd} >
        {parent === null ? draggableMarkup : null}
        {lists.map(({ id }) => (
          <Droppable key={id} id={id}>
            {
              items.map(({ id, text}) => (
                <Draggable id={id}>{text}</Draggable>
              ))}
          </Droppable>
        ))}
      </DndContext>
    </div>
  )
}

export default DnDKitPage;
