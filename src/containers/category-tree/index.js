import React, { useState } from "react";
import useSelectorMap from "@utils/hooks/use-selector-map";
import { Link } from "react-router-dom";
import Tree from "@components/elements/tree";
import ssrPlaceholder from "@utils/ssr-placeholder";
import categories from "@store/categories/actions";
import useInit from "@utils/hooks/use-init";
// import { DatePicker } from 'antd';

const CategoryTree = ssrPlaceholder(
  // WEB

  (props) => {
    const select = useSelectorMap((state) => ({
      //items: state.categories.items,
      ...state,
      roots: state.categories.roots,
      wait: state.categories.wait,
    }));
    const [state, setState] = useState({
      id: "5ecba930b6b0b01fd3dd35d5",
      lang: "ru",
      active: "false",
      data: { title: "Художественная, новая" },
    });
    const { edit, func: updateItem } = props;
    console.log(props, "select");
    useInit(async () => {
      await categories.inline(state);
    }, [state]);

    if (select.wait) {
      return <div>{select.wait && <i>Загрузка...</i>}</div>;
    } else {
      return edit ? (
        <Tree
          items={select.roots}
          renderItem={(item) => (
            <div
              value={item.title}
              contentEditable={state.active}
              suppressContentEditableWarning={true}
              onClick={() => {
                setState((prev) => ({
                  ...prev,
                  active: true,
                }));
              }}
              onKeyDown={(e) => {
                if (e.keyCode === 13) {
                  setState((prev) => ({
                    ...prev,
                    active: false,
                  }));
                }
              }}
              onInput={(event) => {
                let text = event.target.textContent;
                setState((prev) => ({
                  ...prev,
                  id: item._id,
                  data: { title: text },
                }));
              }}
            >
              {state.text ? state.text : item.title}
            </div>
          )}
        />
      ) : (
        <Tree
          items={select.roots}
          renderItem={(item) => (
            <Link to={`/catalog/${item._id}`}>{item.title}</Link>
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
