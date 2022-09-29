import React, { useEffect, useState, useRef } from "react";
import '../css/postitList.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

const PostItListItem = (props) => {
    const [content, setContent] = useState(props.entry.content);

    const handleInput = (e) => {
        setContent(e.currentTarget.textContent);
    }

    const handleOnFocus = () => {
        // console.log("onfocus called from " + props.index);
    }

    const handleOnBlur = () => {
        // console.log("onBlur called from " + props.index)
        // props.editContent(props.index, content);
    }

    useEffect(() => {
    }, [content]);

    return (
        <div className={"postitList-entry " + props.color}>
            <div className="postitList-entry-container" >
                
                    
                   <div className="postitList-entry-input" contentEditable={true} id="style-2"
                            value={content} 
                            suppressContentEditableWarning={true}
                            onFocus={handleOnFocus}
                            onBlur={handleOnBlur}
                            onInput={(e) => {handleInput(e);}}
                            
                            >
                        {/* <input className="postitList-entry-input" 
                            defaultValue={props.entry.content} 
                            onChange={(e) => {setContent(e.target.value)}}
                            onBlur={() => {props.editContent(props.index, content); setEditMode(false)}}/> */}
                            {/* <pre>{props.entry.content}</pre> */}
                            {content}
                    </div>
                    
                


                <div className="postitList-entry-header">
                    <div className="postitList-entry-menu-button">
                        <FontAwesomeIcon icon={faEllipsis} />
                    </div>
                    {/* <div className="dropdown-content">

                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default PostItListItem;