import React, { useState } from 'react'
import { CloseIcon } from './Icons';

// Use these props
// 'tags' to pass predermined tags
// 'purpose' to tell what the tags are for
// 'selecetedTags' to pass the values to parent element

export default function TagsInput(props) {
    const [tags, setTags] = useState(props.tags)
    const removeTags = indexToRemove => {
        setTags([...tags.filter((_,index)=> index !== indexToRemove)]);
    };
    const addTags = e => {
        if(e.target.value !== ""){
            setTags([...tags,e.target.value])
            props.selectedTags([...tags,e.target.value]);
            e.target.value = "";
        };
    };
    return (
		<div className='flex flex-wrap bg-white p-4 rounded items-center mb-4'>
			<ul className="flex flex-wrap">
				{tags.map((tag, index) => (
					<li key={index} className="flex mr-1 p-1 rounded bg-gray-800 text-white border">
						<span className='mr-1'>{tag}</span>
						<span className='cursor-pointer'
							onClick={() => removeTags(index)}
						>
							<CloseIcon></CloseIcon>
						</span>
					</li>
				))}
			</ul>
			<input
                type="text"
                className="py-1 focus:outline-none"
				onKeyUp={event => event.key === "Enter" ? addTags(event) : null}
				placeholder={`Press enter to add ${props.purpose}`}
			/>
		</div>
	);
}
