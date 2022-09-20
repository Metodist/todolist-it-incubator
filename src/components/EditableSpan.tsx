import React, { ChangeEvent, useState } from "react";

type EditableSpanPropstype = {
  title: string;
  callBack: (newTitle: string) => void;
};

export const EditableSpan = (props: EditableSpanPropstype) => {
  const [edit, setEdit] = useState(false);
  let [currentTitle, setCurrentTitle] = useState(props.title);

  const changeEdit = () => {
    setEdit(!edit);
    changeTask();
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentTitle(e.currentTarget.value);
  };

  /*  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    setError(null);
    if (e.charCode === 13) {
      addTask();
    }
  };*/

  const changeTask = () => {
    let newTitle = currentTitle.trim();
    props.callBack(newTitle);
  };

  return edit ? (
    <input
      value={currentTitle}
      onBlur={changeEdit}
      onChange={onChangeHandler}
      autoFocus
    />
  ) : (
    <span onDoubleClick={changeEdit}>{props.title}</span>
  );
};
