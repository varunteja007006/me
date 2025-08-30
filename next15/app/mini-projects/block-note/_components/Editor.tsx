"use client";
import "@blocknote/shadcn/style.css";

import React from "react";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";

import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/shadcn";
import { Block, PartialBlock } from "@blocknote/core";
import { useLocalStorage } from "usehooks-ts";

export default function Main() {
  // Stores the document JSON.
  const [blocks, setBlocks] = React.useState<Block[]>([]);
  const [value, setValue, removeValue] = useLocalStorage("editor-content", "");

  const initialValue: PartialBlock[] | undefined = value
    ? JSON.parse(value)
    : undefined;
  // Creates a new editor instance.
  const editor = useCreateBlockNote({
    initialContent: initialValue,
  });

  // Renders the editor instance using a React component.

  const onSave = () => {
    setValue(JSON.stringify(editor.document));
    toast(`Content saved successfully.`);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 flex-row w-full justify-between">
        <h1 className="text-xl font-bold">Block Note:</h1>
        <Button onClick={onSave}>Save</Button>
      </div>
      <BlockNoteView
        editor={editor}
        theme={"light"}
        formattingToolbar={true}
        emojiPicker={true}
        onChange={() => {
          // Saves the document JSON to state.
          setBlocks(editor.document);
        }}
      />
    </div>
  );
}
