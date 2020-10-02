import React, { useRef, useState, useMemo } from "react";
import useSelectorMap from "@utils/hooks/use-selector-map";
import { Link } from "react-router-dom";
import Tree from "@components/elements/tree";
import ssrPlaceholder from "@utils/ssr-placeholder";
import categories from "@store/categories/actions";
import useInit from "@utils/hooks/use-init";

const CategoryTree = ssrPlaceholder(
  (props) => {
    const select = useSelectorMap((state) => ({
      roots: state.categories.roots,
      wait: state.categories.wait,
    }));
    const initialState = useMemo(() => ({
      id: "",
      lang: "ru",
      data: { title: "" },
    }));
    const [state, setState] = useState(initialState);
    const setValue = ({ target: { textContent: text }, keyCode }, item, r) => {
      if (keyCode === 13) {
        r.current.blur();
      }
      setState((prev) => ({
        ...prev,
        id: item._id,
        data: { title: text },
      }));
    };

    useInit(async () => {
      await categories.inline(state);
    }, [state]);
    if (select.wait) {
      return <div>{select.wait && <i>Загрузка...</i>}</div>;
    } else {
      return props.edit ? (
        <Tree
          items={select.roots}
          renderItem={(item) => {
            const r = useRef();
            return (
              <div
                ref={r}
                id={item._id}
                value={item.title}
                contentEditable="true"
                suppressContentEditableWarning={true}
                onKeyDown={(e) => {
                  setValue(e, item, r);
                }}
              >
                {state.text ? state.text : item.title}
              </div>
            );
          }}
        />
      ) : (
        <Tree
          items={select.roots}
          renderItem={(item) => (
            <Link to={`/catalog/${item._id + "1"}`}>{item.title}</Link>
          )}
        />
      );
    }
  },
  // SSR
  (props) => {
    return <div>Здесь будет меню!!!</div>;
  }
);

export default React.memo(CategoryTree);
