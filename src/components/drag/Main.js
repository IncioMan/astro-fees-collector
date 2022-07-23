import React, { useState } from 'react';
import {DndContext, DragOverlay, KeyboardSensor, useSensors} from '@dnd-kit/core';
import MyDroppable from './MyDroppable';
import MyDraggable from './MyDraggable';
import {MouseSensor, TouchSensor, useSensor} from '@dnd-kit/core';


export default function Main() {

    const mouseSensor = useSensor(MouseSensor);
    const touchSensor = useSensor(TouchSensor);
    const keyboardSensor = useSensor(KeyboardSensor);
  
    const sensors = useSensors(
        mouseSensor,
        touchSensor,
        keyboardSensor,
    );

    const [isDropped, setIsDropped] = useState(false);
    const containers = ['A', 'B', 'C'];
    const [parent, setParent] = useState(null);
    const [activeId, setActiveId] = useState(null);

    const draggableMarkup = (
        <MyDraggable>Drag me</MyDraggable>
    );

    function handleDragEnd(event) {
        const {over} = event;
        setActiveId(null);
        // If the item is dropped over a container, set it as the parent
        // otherwise reset the parent to `null`
        setParent(over ? over.id : null);
    }

    function handleDragStart(event) {
        setActiveId(event.active.id);  
    }

    return (
        <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd} sensors={sensors}>
            {parent === null ? draggableMarkup : null}

            {containers.map((id) => (
                <MyDroppable key={id} id={id}>
                    {parent === id ? draggableMarkup : 'Drop here'}
                </MyDroppable>
            ))}
        </DndContext>
  )
}