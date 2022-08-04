import React from 'react';
import {useDroppable} from '@dnd-kit/core';

function Droppable(props) {
  const {isOver, setNodeRef} = useDroppable({
    id: props.id,
  });
  const style = {
    color: isOver ? 'green' : undefined,
  };


  return (
    <div ref={setNodeRef} style={style} className="flex p-5 border rounded-lg flex-col 0 items-start justify-between  gap-3">
      {props.children}
    </div>
  );
}

export default Droppable;
