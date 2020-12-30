import React from 'react'
import FileIcon from '../assets/icons/file-icon.svg';
import BoldIcon from '../assets/icons/bold-icon.svg';
import CodeIcon from '../assets/icons/code-icon.svg';
import UnderlineIcon from '../assets/icons/underline-icon.svg';
import ItalicIcon from '../assets/icons/italic-icon.svg';
import ListIcon from '../assets/icons/list-icon.svg';
import OrderListIcon from '../assets/icons/order-list-icon.svg';
import LinkIcon from '../assets/icons/link-icon.svg';
import TableIcon from '../assets/icons/table-icon.svg';
import ImageIcon from '../assets/icons/image-icon.svg';
import FullSizeIcon from '../assets/icons/full-size-icon.svg';


const NewEntry = () => {
    return (
        <div className="editor-main-container">
            <div className="editor-toolkit">
                <div className="file-editor-toolkit">
                    <img className="editor-toolkit-icon" src={FileIcon} alt="file icon" />
                </div>
                <div className="buttons-editor-toolkit">
                    <img className="editor-toolkit-icon" src={BoldIcon} alt="file icon" />
                    <img className="editor-toolkit-icon" src={UnderlineIcon} alt="file icon" />
                    <img className="editor-toolkit-icon" src={ItalicIcon} alt="file icon" />
                    <img className="editor-toolkit-icon" src={ListIcon} alt="file icon" />
                    <img className="editor-toolkit-icon" src={OrderListIcon} alt="file icon" />
                    <img className="editor-toolkit-icon" src={CodeIcon} alt="file icon" />
                    <img className="editor-toolkit-icon" src={LinkIcon} alt="file icon" />
                    <img className="editor-toolkit-icon" src={ImageIcon} alt="file icon" />
                    <img className="editor-toolkit-icon" src={TableIcon} alt="file icon" />
                </div>
                <div className="full-size-editor-toolkit">
                <img className="editor-toolkit-icon" src={FullSizeIcon} alt="file icon" />
                </div>
            </div>
            <div className="editor-page">

                <textarea className="editor-markdown-text" type="">
                </textarea>

                <div className="editor-pretty-text">

                </div>

            </div>
        </div>
    )
}

export default NewEntry
