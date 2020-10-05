import React, { useRef, useState, useMemo } from "react";
import useSelectorMap from "@utils/hooks/use-selector-map";
import { Link } from "react-router-dom";
import Tree from "@components/elements/tree";
import ssrPlaceholder from "@utils/ssr-placeholder";
import categories from "@store/categories/actions";

const CategoryTree = ssrPlaceholder((props) => {
  const initialState = useMemo(() => ({
    id: "",
    lang: "ru",
    data: { title: "" },
  }));
  const [state, setState] = useState(initialState);
  const select = useSelectorMap((state) => ({
    roots: state.categories.roots,
    wait: state.categories.wait,
  }));
  const setValue = async ({ target: { textContent: text } }, item) => {
    setState((prev) => {
      const newState = { ...prev, id: item._id, data: { title: text } };
      categories.inline(newState);
      return newState;
    });
  };
  const closeEditing = (event) => event.key === "Enter" && event.target.blur();
  const renderItem = (item) => {
    return props.edit ? (
      <div
        id={item._id}
        value={item.title}
        contentEditable="true"
        suppressContentEditableWarning={true}
        onInput={(e) => {
          setValue(e, item);
        }}
        onKeyPress={closeEditing}
      >
        {state.text ? state.text : item.title}
      </div>
    ) : (
      <Link to={`/catalog/${item._id + "1"}`}>{item.title}</Link>
    );
  };
  return select.wait ? (
    <div>{select.wait && <i>Загрузка...</i>}</div>
  ) : (
    <Tree items={select.roots} renderItem={renderItem} />
  );
});

export default React.memo(CategoryTree);
