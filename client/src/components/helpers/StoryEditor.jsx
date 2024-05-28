import React, { useState } from "react";
import { Editor, EditorState, RichUtils } from "draft-js";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import ListIcon from "@mui/icons-material/List";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import { Button } from "@mui/material";
import "draft-js/dist/Draft.css";

function StoryEditor({ onContentChange, onSave }) {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const onChange = (editorState) => {
    setEditorState(editorState);
    onContentChange(editorState.getCurrentContent().getPlainText());
  };

  const handleBoldClick = () => {
    onChange(RichUtils.toggleInlineStyle(editorState, "BOLD"));
  };

  const handleItalicClick = () => {
    onChange(RichUtils.toggleInlineStyle(editorState, "ITALIC"));
  };

  const handleUnderlineClick = () => {
    onChange(RichUtils.toggleInlineStyle(editorState, "UNDERLINE"));
  };

  const handleUnorderedListClick = () => {
    onChange(RichUtils.toggleBlockType(editorState, "unordered-list-item"));
  };

  const handleOrderedListClick = () => {
    onChange(RichUtils.toggleBlockType(editorState, "ordered-list-item"));
  };

  const handleSaveClick = () => {
    onSave();
  };

  return (
    <div className="h-full w-full py-4 text-white">
      <h1 className="text-sm font-medium text-white">Content</h1>
      <div className="mt-2 flex justify-between items-center">
        <div>
          <FormatBoldIcon onClick={handleBoldClick} className="cursor-pointer" />
          <FormatItalicIcon onClick={handleItalicClick} className="cursor-pointer ml-2" />
          <FormatUnderlinedIcon onClick={handleUnderlineClick} className="cursor-pointer ml-2" />
          <ListIcon onClick={handleUnorderedListClick} className="cursor-pointer ml-2" />
          <FormatListNumberedIcon onClick={handleOrderedListClick} className="cursor-pointer ml-2" />
        </div>
        <Button onClick={handleSaveClick} sx={{ color: "white", textTransform: "initial" }}>Save & Post</Button>
      </div>
      <div className="mt-2 border h-5/6 p-2 rounded-lg">
        <div className="h-full">
          <Editor editorState={editorState} onChange={onChange} />
        </div>
      </div>
    </div>
  );
}

export default StoryEditor;
